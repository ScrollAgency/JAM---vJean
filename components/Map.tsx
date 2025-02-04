import React, { useEffect, useState, useRef, } from 'react';
import mapboxgl from 'mapbox-gl';

interface Business {
    name: string;
    address: string; // Change location to address
    className?: string;
}

interface MapboxMapProps {
    mapStyle?: string;
    latitude?: number;
    longitude?: number;
    zoom?: number;
    businesses?: Business[];
    className?: string; // Classe pour personnaliser la carte depuis Plasmic
    searchAddress?: string; // Prop pour la recherche d'adresse
}

const MapboxMap: React.FC<MapboxMapProps> = ({
    mapStyle = '', // Default map style
    latitude = 37.75,
    longitude = -122.45,
    zoom = 9,
    businesses = [],
    className = '',
    searchAddress = '', // Prop pour la recherche d'adresse
}) => {
    const [userLocation, setUserLocation] = useState<{ latitude: number; longitude: number } | null>(null);
    const [mapCenter, setMapCenter] = useState<[number, number]>([longitude, latitude]);
    const mapContainerRef = useRef<HTMLDivElement>(null);
    const mapRef = useRef<mapboxgl.Map | null>(null);

    // Récupérer la position de l'utilisateur
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setUserLocation({ latitude, longitude });
                    setMapCenter([longitude, latitude]); // Centrer la carte sur la position de l'utilisateur
                },
                (error) => {
                    console.error('Erreur de géolocalisation:', error);
                }
            );
        } else {
            console.error('La géolocalisation n\'est pas supportée par ce navigateur.');
        }
    }, []);

    // Fonction pour géocoder une adresse ou une ville
    const geocodeAddress = async (address: string) => {
        try {
            const response = await fetch(
                `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
                    address
                )}.json?access_token=${mapboxgl.accessToken}`
            );
            const data = await response.json();
            if (data.features && data.features.length > 0) {
                const [longitude, latitude] = data.features[0].center;
                return { latitude, longitude };
            } else {
                console.error('Aucun résultat trouvé pour cette adresse.');
                return null;
            }
        } catch (error) {
            console.error('Erreur lors du géocodage:', error);
            return null;
        }
    };

    // Effet pour déclencher la recherche d'adresse lorsque searchAddress change
    useEffect(() => {
        if (searchAddress.trim()) {
            geocodeAddress(searchAddress).then((coords) => {
                if (coords && mapRef.current) {
                    mapRef.current.setCenter([coords.longitude, coords.latitude]); // Centrer la carte sur l'adresse
                }
            });
        }
    }, [searchAddress]);

    useEffect(() => {
        if (!mapContainerRef.current) return;

        mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN || '';

        const map = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: mapStyle,
            center: mapCenter, // Utiliser mapCenter comme centre initial
            zoom: zoom,
        });

        mapRef.current = map;

        map.addControl(new mapboxgl.NavigationControl(), 'top-right');

        // Ajouter un marqueur pour la position de l'utilisateur
        if (userLocation) {
            new mapboxgl.Marker({ color: 'blue' })
                .setLngLat([userLocation.longitude, userLocation.latitude])
                .setPopup(new mapboxgl.Popup().setHTML('<h3>Votre position</h3>'))
                .addTo(map);
        }

        // Ajouter des marqueurs pour les entreprises
        businesses.forEach((business) => {
            const { name, address } = business;
            geocodeAddress(address).then((coords) => {
                if (coords && mapRef.current) {
                    new mapboxgl.Marker()
                        .setLngLat([coords.longitude, coords.latitude])
                        .setPopup(new mapboxgl.Popup().setHTML(`<h3>${name}</h3>`))
                        .addTo(mapRef.current);
                }
            });
        });

        return () => {
            if (mapRef.current) {
                mapRef.current.remove();
                mapRef.current = null;
            }
        };
    }, [mapStyle, latitude, longitude, zoom, businesses, userLocation, mapCenter]);

    return (
        <div id="map" ref={mapContainerRef} className={`mapbox-map ${className}`} aria-label="Carte Mapbox" style={{ width: '100%', height: '100%', borderRadius: 16 }}></div>
    );
};

export default MapboxMap;

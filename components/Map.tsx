import React, { useEffect, useState, useRef, useCallback } from 'react';
import mapboxgl from 'mapbox-gl';

interface Business {
    name: string;
    latitude: number;
    longitude: number;
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
    mapStyle = "mapbox://styles/mapbox/streets-v11",
    latitude = 37.75,
    longitude = -122.45,
    zoom = 9,
    businesses = [],
    className = '',
    searchAddress = '', // Prop pour la recherche d'adresse
}) => {
    const [directions, setDirections] = useState<number | null>(null);
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
                setMapCenter([longitude, latitude]); // Mettre à jour le centre de la carte
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

    const getDirections = useCallback(async (start: [number, number], end: [number, number], mode: string) => {
        try {
            const response = await fetch(
                `https://api.mapbox.com/directions/v5/mapbox/${mode}/${start[0]},${start[1]};${end[0]},${end[1]}?access_token=${mapboxgl.accessToken}`
            );
            const data = await response.json();
            return data.routes[0].duration;
        } catch (error) {
            console.error('Erreur lors de la récupération des directions:', error);
            return null;
        }
    }, []);

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
            const { name, latitude, longitude } = business;
            new mapboxgl.Marker()
                .setLngLat([longitude, latitude])
                .setPopup(new mapboxgl.Popup().setHTML(`<h3>${name}</h3>`))
                .addTo(map);
        });

        // Calculer les directions (optionnel)
        const start: [number, number] = userLocation ? [userLocation.longitude, userLocation.latitude] : mapCenter;
        const end: [number, number] = [-122.431297, 37.773972];

        getDirections(start, end, 'driving').then((duration) => {
            if (duration) {
                console.log('Durée du trajet en voiture:', duration / 60, 'minutes');
                setDirections(duration / 60);
            }
        });

        return () => {
            if (mapRef.current) {
                mapRef.current.remove();
                mapRef.current = null;
            }
        };
    }, [mapStyle, latitude, longitude, zoom, businesses, userLocation, getDirections, mapCenter]);

    return (
        <div className={`map-container ${className}`} aria-label="Carte">
            <div id="map" ref={mapContainerRef} className="mapbox-map" aria-label="Carte Mapbox" style={{ width: '100%', height: '500px' }}></div>
            {directions && (
                <div className="directions-info">
                    <p>Durée du trajet en voiture: {directions} minutes</p>
                </div>
            )}
        </div>
    );
};

export default MapboxMap;
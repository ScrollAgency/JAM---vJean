import React, { useEffect, useState, useRef, useCallback } from 'react';
import mapboxgl from 'mapbox-gl';

interface Business {
    name: string;
    address: string;
    className?: string;
}

interface MapboxMapProps {
    mapStyle?: string;
    latitude?: number;
    longitude?: number;
    zoom?: number;
    businesses?: Business[];
    className?: string;
    searchAddress?: string;
}

const MapboxMap: React.FC<MapboxMapProps> = ({
    mapStyle = 'mapbox://styles/mapbox/streets-v11',
    latitude = 37.75,
    longitude = -122.45,
    zoom = 9,
    businesses = [],
    className = '',
    searchAddress = '',
}) => {
    const [userLocation, setUserLocation] = useState<{ latitude: number; longitude: number } | null>(null);
    const [mapCenter, setMapCenter] = useState<[number, number]>([longitude, latitude]);
    const mapContainerRef = useRef<HTMLDivElement>(null);
    const mapRef = useRef<mapboxgl.Map | null>(null);
    const markersRef = useRef<mapboxgl.Marker[]>([]);

    useEffect(() => {
        if (!process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN) {
            console.error('Mapbox access token is not set');
            return;
        }
        mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;
    }, []);

    useEffect(() => {
        let isMounted = true;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    if (isMounted) {
                        const { latitude, longitude } = position.coords;
                        setUserLocation({ latitude, longitude });
                        setMapCenter([longitude, latitude]);
                    }
                },
                (error) => {
                    console.error('Erreur de géolocalisation:', error);
                }
            );
        }
        return () => {
            isMounted = false;
        };
    }, []);

    const geocodeAddress = useCallback(async (address: string) => {
        try {
            const response = await fetch(
                `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=${mapboxgl.accessToken}`
            );
            const data = await response.json();
            if (data.features?.length > 0) {
                const [longitude, latitude] = data.features[0].center;
                return { latitude, longitude };
            } else {
                console.warn(`Aucun résultat trouvé pour l'adresse : ${address}`);
                return null;
            }
        } catch (error) {
            console.error('Erreur lors du géocodage:', error);
            return null;
        }
    }, []);

    useEffect(() => {
        if (searchAddress.trim()) {
            geocodeAddress(searchAddress).then((coords) => {
                if (coords && mapRef.current) {
                    mapRef.current.flyTo({ center: [coords.longitude, coords.latitude], zoom: 12 });
                }
            });
        }
    }, [searchAddress, geocodeAddress]);

    useEffect(() => {
        if (!mapContainerRef.current || !process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN) return;

        const map = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: mapStyle,
            center: mapCenter,
            zoom: zoom,
        });

        mapRef.current = map;
        map.addControl(new mapboxgl.NavigationControl(), 'top-right');

        if (userLocation) {
            new mapboxgl.Marker({ color: 'blue' })
                .setLngLat([userLocation.longitude, userLocation.latitude])
                .setPopup(new mapboxgl.Popup().setHTML('<h3>Votre position</h3>'))
                .addTo(map);
        }

        businesses.forEach((business) => {
            geocodeAddress(business.address).then((coords) => {
                if (coords && mapRef.current) {
                    const marker = new mapboxgl.Marker()
                        .setLngLat([coords.longitude, coords.latitude])
                        .setPopup(new mapboxgl.Popup().setHTML(`<h3>${business.name}</h3>`))
                        .addTo(mapRef.current);
                    markersRef.current.push(marker);
                }
            });
        });

        return () => {
            markersRef.current.forEach((marker) => marker.remove());
            markersRef.current = [];

            if (mapRef.current) {
                mapRef.current.remove();
                mapRef.current = null;
            }
        };

    }, [mapStyle, latitude, longitude, zoom, businesses, userLocation, geocodeAddress, mapCenter]);

    return <div ref={mapContainerRef} className={`mapbox-map ${className}`} style={{ width: '100%', height: '100%', borderRadius: 16 }} />;
};

export default MapboxMap;

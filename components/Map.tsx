// import React, { useEffect, useRef, useState } from 'react';
// import mapboxgl from 'mapbox-gl';
// import MapboxDirections from '@mapbox/mapbox-gl-directions';

// mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN as string;
// interface MapProps {
//     className?: string;
//     initialCoordinates: [number, number]; // Longitude, Latitude
// }

// const Map: React.FC<MapProps> = ({ className, initialCoordinates }) => {
//     const mapContainerRef = useRef<HTMLDivElement | null>(null);
//     const [map, setMap] = useState<mapboxgl.Map | null>(null);

//     useEffect(() => {
//         if (!mapContainerRef.current) return;

//         // Initialiser la carte
//         const mapInstance = new mapboxgl.Map({
//             container: mapContainerRef.current,
//             style: 'mapbox://styles/mapbox/streets-v11',
//             center: initialCoordinates,
//             zoom: 13,
//         });

//         // Ajouter les contrôles de navigation
//         mapInstance.addControl(new mapboxgl.NavigationControl(), 'top-left');

//         // Ajouter les contrôles de direction
//         const directions = new MapboxDirections({
//             accessToken: mapboxgl.accessToken,
//             unit: 'metric',
//             profile: 'mapbox/driving', // Par défaut, voiture. Options : 'mapbox/walking', 'mapbox/cycling', 'mapbox/transit'
//         });

//         mapInstance.addControl(directions, 'top-right');

//         // Mettre à jour l'état avec la carte initialisée
//         setMap(mapInstance);

//         return () => {
//             mapInstance.remove();
//         };
//     }, [initialCoordinates]);

//     return <div ref={mapContainerRef} className={className} style={{ width: '100%', height: '100%' }} />;
// };

// export default Map;

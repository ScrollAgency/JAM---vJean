// import React, { useState, useEffect, useCallback } from "react";
// import { useMap } from "@react-google-maps/api"; // Si vous utilisez le package react-google-maps

// // Assurez-vous d'importer ou d'ajouter les configurations nécessaires à Plasmic.
// const config = {
//     mapCenter: { lat: 40.748817, lng: -73.985428 }, // Ex: New York
//     mapZoom: 12,
//     markerPosition: { lat: 40.748817, lng: -73.985428 }
// };

// const APIProvider = ({ apiKey, children }: { apiKey: string, children: React.ReactNode }) => {
//     // Plasmic ne gère pas les API keys directement, vous pouvez les passer comme props
//     // ou configurer l'API Google dans l'application.
//     useEffect(() => {
//         if (!apiKey) {
//             console.error("API Key is required for Google Maps.");
//         }
//     }, [apiKey]);

//     return <>{children}</>; // Simply return children here
// };

// const MapWrapper = () => {
//     return (
//         <APIProvider apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY!}>
//             <MapComponent
//                 defaultCenter={config.mapCenter}
//                 defaultZoom={config.mapZoom}
//             />
//         </APIProvider>
//     );
// };

// const MapComponent = ({ defaultCenter, defaultZoom }: { defaultCenter: google.maps.LatLngLiteral, defaultZoom: number }) => {
//     return (
//         <div style={{ height: "100vh" }}>
//             {/* Vous pouvez utiliser un composant Map qui se connecte à Google Maps */}
//             <Map
//                 center={defaultCenter}
//                 zoom={defaultZoom}
//                 mapContainerStyle={{ width: "100%", height: "100%" }}
//             >
//                 <AdvancedMarker position={config.markerPosition} />
//                 <MapControl position={google.maps.ControlPosition.TOP_LEFT}>
//                     <ResetMapButton />
//                 </MapControl>
//             </Map>
//         </div>
//     );
// };

// const ResetMapButton = () => {
//     const map = useMap(); // Utilise useMap() pour récupérer l'instance de la carte
//     const resetMap = useCallback(() => {
//         if (!map) return;

//         map.setCenter(config.mapCenter);
//         map.setZoom(config.mapZoom);
//     }, [map]);

//     return <button onClick={resetMap}>Reset Map View</button>;
// };

// // Example of the AdvancedMarker component (optional)
// const AdvancedMarker = ({ position }: { position: google.maps.LatLngLiteral }) => {
//     return <div style={{ position: "absolute", top: position.lat, left: position.lng }}>Marker</div>;
// };

// export default MapWrapper;

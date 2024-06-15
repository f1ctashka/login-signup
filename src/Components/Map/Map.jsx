import React, { useEffect, useRef } from 'react';
import './Map.css';

const Map = ({ selectedDrone }) => {
    const mapRef = useRef(null);
    const mapInstance = useRef(null);
    const flightPathRef = useRef(null); // Додаємо реф для збереження шляху

    useEffect(() => {
        const loadScript = (url, callback) => {
            const script = document.createElement('script');
            script.src = url;
            script.defer = true;
            script.onload = callback;
            document.head.appendChild(script);
        };

        const initMap = () => {
            const google = window.google;
            mapInstance.current = new google.maps.Map(mapRef.current, {
                center: { lat: 50.4501, lng: 30.5234 }, // Coordinates of Kyiv
                zoom: 10,
            });
        };

        if (!window.google) {
            loadScript(`https://maps.googleapis.com/maps/api/js?key=AIzaSyBf6O9a7AsXA0mi8nhA2yCJK5ThXtX9zyA&libraries=maps&v=beta`, initMap);
        } else {
            initMap();
        }
    }, []);

    useEffect(() => {
        if (mapInstance.current && selectedDrone) {
            const google = window.google;
            const flightPlanCoordinates = selectedDrone.path;

            if (flightPathRef.current) {
                flightPathRef.current.setMap(null); // Видаляємо попередній маршрут
            }

            flightPathRef.current = new google.maps.Polyline({
                path: flightPlanCoordinates,
                geodesic: true,
                strokeColor: '#FF0000',
                strokeOpacity: 1.0,
                strokeWeight: 2,
            });

            flightPathRef.current.setMap(mapInstance.current);

            google.maps.event.addListener(flightPathRef.current, 'click', (event) => {
                const lat = event.latLng.lat();
                const lng = event.latLng.lng();
                alert(`Coordinates: ${lat}, ${lng}`);
            });
        }
    }, [selectedDrone]);

    return <div ref={mapRef} className="map-container"></div>;
};

export default Map;

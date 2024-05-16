import React, { useEffect, useRef, useState } from 'react';
import useLoadScript from '../hooks/useLoadScript';
import './Map.css';

const Map = () => {
  const scriptLoaded = useLoadScript(`https://maps.googleapis.com/maps/api/js?key=AIzaSyAy0XsWJZjIRD-W1D79B647Ys0FVMoh2GU&libraries=places`);
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);
  const [directionsService, setDirectionsService] = useState(null);
  const [directionsRenderer, setDirectionsRenderer] = useState(null);

  useEffect(() => {
    if (scriptLoaded && !map) {
      const mapInstance = new window.google.maps.Map(mapRef.current, {
        center: { lat: -1.939826787816454, lng: 30.0445426438232 },
        zoom: 12,
      });
      setMap(mapInstance);

      const directionsServiceInstance = new window.google.maps.DirectionsService();
      const directionsRendererInstance = new window.google.maps.DirectionsRenderer();
      directionsRendererInstance.setMap(mapInstance);

      setDirectionsService(directionsServiceInstance);
      setDirectionsRenderer(directionsRendererInstance);
    }
  }, [scriptLoaded, map]);

  useEffect(() => {
    if (directionsService && directionsRenderer) {
      const fetchDirections = () => {
        directionsService.route(
          {
            origin: { lat: -1.939826787816454, lng: 30.0445426438232 },
            destination: { lat: -1.9365670876910166, lng: 30.13020167024439 },
            travelMode: window.google.maps.TravelMode.DRIVING,
            waypoints: [
              { location: { lat: -1.9355377074007851, lng: 30.060163829002217 }, stopover: true },
              { location: { lat: -1.9358808342336546, lng: 30.08024820994666 }, stopover: true },
              { location: { lat: -1.9489196023037583, lng: 30.092607828989397 }, stopover: true },
              { location: { lat: -1.9592132952818164, lng: 30.106684061788073 }, stopover: true },
              { location: { lat: -1.9487480402200394, lng: 30.126596781356923 }, stopover: true }
            ]
          },
          (result, status) => {
            if (status === window.google.maps.DirectionsStatus.OK) {
              directionsRenderer.setDirections(result);
            } else {
              console.error(`error fetching directions ${result}`);
            }
          }
        );
      };

      fetchDirections();
    }
  }, [directionsService, directionsRenderer]);

  return <div ref={mapRef} className="map-container" />;
};

export default Map;
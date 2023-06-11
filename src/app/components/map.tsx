// components/Map.tsx

import { useEffect } from 'react';
import L from 'leaflet';

const Map = () => {
  useEffect(() => {
    const map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    }).addTo(map);
  }, []);

  return <div id="map" style={{ height: '400px', width: '100%' }} />;
};

export default Map;
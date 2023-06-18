import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Earthquake = () => {
  const [earthquakeData, setEarthquakeData] = useState([]);

  useEffect(() => {
    const fetchEarthquakeData = async () => {
      try {
        const response = await fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson');
        const data = await response.json();
        setEarthquakeData(data.features);
      } catch (error) {
        console.log('Error:', error);
      }
    };

    fetchEarthquakeData();
  }, []);

  return (
    <div className="map-container">
      <MapContainer center={[0, 0]} zoom={2} className="map" style={{ width: '100%', height: '600px' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="Map data © <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors"
          maxZoom={19}
          tileSize={512}
          zoomOffset={-1}
        />

        {earthquakeData.map((earthquake, index) => (
          <CircleMarker
            key={index}
            center={[earthquake.geometry.coordinates[1], earthquake.geometry.coordinates[0]]}
            radius={5}
            pathOptions={{ color: 'red' }}
          >
            <Popup>
              <div>
                <h3>Earthquake</h3>
                <p>Magnitude: {earthquake.properties.mag}</p>
                <p>Location: {earthquake.properties.place}</p>
              </div>
            </Popup>
          </CircleMarker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Earthquake;

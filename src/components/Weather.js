import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const Weather = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [precipitationData, setPrecipitationData] = useState([]);

  const zoomLevel = 5;
  const apiKey = 'ea48ce502d9d53dd1100f4f6751ee198';

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  useEffect(() => {
    const fetchPrecipitationData = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=current,minutely,hourly,daily,alerts&appid=${apiKey}`
        );
        const data = await response.json();

        setPrecipitationData(
          data?.hourly?.map((hourlyData, index) => ({
            latitude: hourlyData?.lat,
            longitude: hourlyData?.lon,
            value: hourlyData?.precipitation?.value,
            date: new Date(hourlyData?.dt * 1000).toLocaleString(),
          })) || [] // Set empty array if data is undefined
        );
      } catch (error) {
        console.log(error);
      }
    };

    if (latitude !== null && longitude !== null) {
      fetchPrecipitationData();
    }
  }, [latitude, longitude, apiKey]);

  if (latitude === null || longitude === null) {
    return <div>Loading...</div>;
  }

  // Blue icon for precipitation marker
  const blueIcon = L.icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x-blue.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [0, -41],
  });

  return (
    <div className="map-container">
      <MapContainer center={[latitude, longitude]} zoom={zoomLevel} className="map" style={{ width: '100%', height: '400px' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="Map data © OpenStreetMap contributors"
          maxZoom={19}
          tileSize={512}
          zoomOffset={-1}
        />
        {precipitationData &&
          precipitationData.map((dataPoint, index) => (
            <Marker
              key={index}
              position={[dataPoint.latitude, dataPoint.longitude]}
              icon={blueIcon} // Set the blue icon for the marker
            >
              <Popup>
                <div>
                  <h3>Precipitation</h3>
                  <p>Value: {dataPoint.value}</p>
                  <p>Date: {dataPoint.date}</p>
                </div>
              </Popup>
            </Marker>
          ))}
      </MapContainer>
    </div>
  );
};

export default Weather;

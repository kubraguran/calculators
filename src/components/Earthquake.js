import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
  <Container>
    <Row className="justify-content-center align-items-center" >
      <Col>
     <h5>Earthquake Map</h5>
      </Col>
    </Row>
    <br/>
    <br/>
    <Row className="justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <Col xs={6}  className="mt-5 mb-5">
      <div className="map-container">
      <MapContainer center={[0, 0]} 
      zoom={2} className="map" 
      style={{height: '600px', width: '100%' }}>
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
            pathOptions={{
              color: 'red',
              weight: 1,
              fillOpacity: 0.8,
            }}
          >
            <Popup>
              <div>
                <h3>Earthquake</h3>
                <p>Magnitude: {earthquake.properties.mag}</p>
                <p>Location: {earthquake.properties.place}</p>
                <p>Time: {new Date(earthquake.properties.time).toLocaleString()}</p>
              </div>
            </Popup>
          </CircleMarker>
        ))}
      </MapContainer>
    </div>
      </Col>
    </Row>
  </Container>
  );
};

export default Earthquake;

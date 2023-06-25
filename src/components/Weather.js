import React, { useState } from 'react';
import { MapContainer, TileLayer, LayersControl, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const Weather = () => {
  const mapPosition = [11.217, 78.6569];
  const [showTemperature, setShowTemperature] = useState(true);

  return (
    <Container>
      <Row>
        <Col>
       Weather Map
        </Col>
      </Row>
      <Row className="justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <Col xs={6}  className="mt-5 mb-5">
        <div className="weather-box">
    <MapContainer
      className="map"
      center={mapPosition}
      zoom={5}
      style={{height: '600px', width: '100%' }}
    >
      <LayersControl position="topright">
        <LayersControl.BaseLayer checked name="OpenStreetMap">
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="CartoDB">
          <TileLayer url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png" />
        </LayersControl.BaseLayer>
        <LayersControl.Overlay checked name="Clouds">
          <TileLayer
            attribution='&amp;copy <a href="https://openweathermap.org/">OpenWeatherMap</a>'
            url="https://tile.openweathermap.org/map/clouds_new/{z}/{x}/{y}.png?appid=18ac8f46f3977a122fc05bc41a592ed3"
          />
        </LayersControl.Overlay>

        <LayersControl.Overlay checked={showTemperature} name="Temperature">
          <TileLayer
            attribution='&amp;copy <a href="https://openweathermap.org/">OpenWeatherMap</a>'
            url="https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=18ac8f46f3977a122fc05bc41a592ed3"
          />
        </LayersControl.Overlay>

        <LayersControl.Overlay checked name="Precipitation">
          <TileLayer
            attribution='&amp;copy <a href="https://openweathermap.org/">OpenWeatherMap</a>'
            url="https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=18ac8f46f3977a122fc05bc41a592ed3"
          />
        </LayersControl.Overlay>
        <LayersControl.Overlay checked name="WindSpeed">
          <TileLayer
            attribution='&amp;copy <a href="https://openweathermap.org/">OpenWeatherMap</a>'
            url="https://tile.openweathermap.org/map/wind_new/{z}/{x}/{y}.png?appid=18ac8f46f3977a122fc05bc41a592ed3"
          />
        </LayersControl.Overlay>
        <LayersControl.Overlay checked name="SeaLevelPressure">
          <TileLayer
            attribution='&amp;copy <a href="https://openweathermap.org/">OpenWeatherMap</a>'
            url="https://tile.openweathermap.org/map/pressure_new/{z}/{x}/{y}.png?appid=18ac8f46f3977a122fc05bc41a592ed3"
          />
        </LayersControl.Overlay>
      </LayersControl>
  
    </MapContainer>
    </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Weather;

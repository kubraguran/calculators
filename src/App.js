import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Havas from './components/Havas';
import AirCalc from './components/AirCalc';
import AirDensity from './components/AirDensity';
import AirVelocity from './components/AirVelocity';
import Converter from './components/Convertor';
import Weather from './components/Weather';
import Osha from './components/Osha';
import Earthquake from './components/Earthquake';
import Drops from './components/Drops';

function App() {
  return (
    <Container className="App">
      <Row>
        <Col>
          <Havas />
        </Col>
        <Col>
          <AirCalc />
        </Col>
      </Row>
      <Row>
      <Col>
        <AirDensity />
      </Col>
      <Col>
      <AirVelocity />
      </Col>
      </Row>
      <Row>
        <Col>
        <Converter/>
        </Col>
        <Col>
        <Osha/>
        </Col>
      </Row>
      <Row>
      <Col>
        <Weather/>
        </Col>
        <Col>
         <Earthquake />
        </Col>
      </Row>
      <Row>
        <Drops/>
      </Row>
    </Container>
  );
}

export default App;


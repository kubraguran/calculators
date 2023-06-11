import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Havas from './components/Havas';
import AirCalc from './components/AirCalc';
import AirDensity from './components/AirDensity';
import AirVelocity from './components/AirVelocity';

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
    </Container>
  );
}

export default App;


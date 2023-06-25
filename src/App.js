import React from 'react';
import { Routes, Route, Link , NavLink } from 'react-router-dom';
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
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import MainPage from './components/MainPage';

function App() {
  return (

    <>
      <Routes>
        <Route path = '/' element = {<MainPage />} />
        <Route path="/havas" element={<Havas />} />
        <Route path="/aircalc" element={<AirCalc />} />
        <Route path="/airdensity" element={<AirDensity />} />
        <Route path="/airvelocity" element={<AirVelocity />} />
        <Route path="/convertor" element={<Converter />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/osha" element={<Osha />} />
        <Route path="/earthquake" element={<Earthquake />} />
        <Route path="/drops" element={<Drops />} />
      </Routes>

    </>

  );
}

export default App;

/*
    <Container className="App">
    <Row>
      <Col xs={12} sm={6}>
        <Havas />
      </Col>
      <Col xs={12} sm={6}>
        <AirCalc />
      </Col>
    </Row>
    <Row>
      <Col xs={12} sm={6}>
        <AirDensity />
      </Col>
      <Col xs={12} sm={6}>
        <AirVelocity />
      </Col>
    </Row>
    <Row>
      <Col xs={12} sm={6}>
        <Converter />
      </Col>
      <Col xs={12} sm={6}>
        <Osha />
      </Col>
    </Row>
    <Row>
      <Col xs={12} sm={6}>
        <Weather />
      </Col>
      <Col xs={12} sm={6}>
        <Earthquake />
      </Col>
    </Row>
    <Row>
      <Col xs={12}>
        <Drops />
      </Col>
    </Row>
  </Container>

  */


  /*

   <nav>
        <ul>
          <li>
            <Link to="/havas">Havas</Link>
          </li>
          <li>
            <Link to="/aircalc">Air calculator</Link>
          </li>
          <li>
            <Link to="/airdensity">Air density</Link>
          </li>
          <li>
            <Link to="/airvelocity">Air velocity</Link>
          </li>
          <li>
            <Link to="/convertor">Convertor</Link>
          </li>
          <li>
            <Link to="/weather">Weather</Link>
          </li>
          <li>
            <Link to="/osha">Osha</Link>
          </li>
          <li>
            <Link to="/Earthquake">Earthquake</Link>
          </li>
          <li>
            <Link to="/drops">Drops</Link>
          </li>
        </ul>
      </nav>

      */
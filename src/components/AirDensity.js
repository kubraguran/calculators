import React, { useState } from "react";

function AirDensity() {
  const [temperature, setTemperature] = useState("");
  const [pressure, setPressure] = useState("");
  const [airDensity, setAirDensity] = useState("");

  const calculateAirDensity = () => {
    if (temperature !== "" && pressure !== "") {
      const temperatureCelsius = parseFloat(temperature);
      const pressureMB = parseFloat(pressure);

      if (!isNaN(temperatureCelsius) && !isNaN(pressureMB)) {
        const kelvin = temperatureCelsius + 273.15;
        const airDensityCalc = (pressureMB * 100) / (287.05 * kelvin);
        setAirDensity(airDensityCalc.toFixed(3));
      } else {
        setAirDensity("");
      }
    } else {
      setAirDensity("");
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 mx-auto">
        <br/>
         <br/>
         <br/>
          <h5>Air Density Calculator</h5>

          <div className="form-group">
            <label htmlFor="temperature">Temperature (°C):</label>
            <input
              type="number"
              className="form-control"
              id="temperature"
              value={temperature}
              onChange={(e) => setTemperature(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="pressure">Pressure (mb):</label>
            <input
              type="number"
              className="form-control"
              id="pressure"
              value={pressure}
              onChange={(e) => setPressure(e.target.value)}
            />
          </div>
   <br/>
          <button className="btn btn-primary" onClick={calculateAirDensity}>
            Calculate
          </button>

          {airDensity !== "" && (
            <div>
              <label>Air Density:</label>
              <span>{airDensity} kg/m³</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AirDensity;

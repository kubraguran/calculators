import React, { useState } from "react";

function AirVelocity() {
  const [totalPressure, setTotalPressure] = useState("");
  const [staticPressure, setStaticPressure] = useState("");
  const [velocity, setVelocity] = useState("");

  const airDensity = 1.2;

  const calculateVelocity = () => {
    const pressureDifference = parseFloat(totalPressure) - parseFloat(staticPressure);
    const velocity = Math.sqrt((2 * pressureDifference) / airDensity);
    setVelocity(velocity.toFixed(2));
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 mx-auto">
          <h5>Air Velocity Calculator</h5>

          <div className="form-group">
            <label htmlFor="totalPressure">Total Pressure (Pa):</label>
            <input
              type="number"
              className="form-control"
              id="totalPressure"
              value={totalPressure}
              onChange={(e) => setTotalPressure(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="staticPressure">Static Pressure (Pa):</label>
            <input
              type="number"
              className="form-control"
              id="staticPressure"
              value={staticPressure}
              onChange={(e) => setStaticPressure(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="airDensity">Air Density (kg/m³):</label>
            <input
              type="number"
              className="form-control"
              id="airDensity"
              value={airDensity}
              readOnly
            />
          </div>
<br/>
          <button className="btn btn-primary" onClick={calculateVelocity}>
            Calculate
          </button>
  <br/>

          {velocity && (
            <div className="mt-3">
              <label>Velocity (m/s):</label>
              <span>{velocity}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AirVelocity;

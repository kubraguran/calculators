import React, { useState } from "react";

function AirCalc() {
  const [height, setHeight] = useState("");
  const [width, setWidth] = useState("");
  const [length, setLength] = useState("");
  const [extractRate, setExtractRate] = useState("");
  const [airChangeRate, setAirChangeRate] = useState(0);
  const [airChangeRatePerHour, setAirChangeRatePerHour] = useState(0);

  const calculateAirChangeRate = () => {
    const roomVolume = parseFloat(height) * parseFloat(width) * parseFloat(length);
    const extractRateValue = parseFloat(extractRate);

    if (!isNaN(roomVolume) && !isNaN(extractRateValue) && roomVolume > 0 && extractRateValue > 0) {
      const airChangeRate = extractRateValue / roomVolume;
      setAirChangeRate(airChangeRate);

      const airChangeRatePerHour = airChangeRate * 3600;
      setAirChangeRatePerHour(airChangeRatePerHour);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 mx-auto">
        <br/>
         <br/>
         <br/>
          <h5>Air Change Rate Calculator</h5>

          <div className="form-group">
            <br/>
            <label htmlFor="height">Height (m):</label>
            <input
              type="number"
              className="form-control"
              id="height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="width">Width (m):</label>
            <input
              type="number"
              className="form-control"
              id="width"
              value={width}
              onChange={(e) => setWidth(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="length">Length (m):</label>
            <input
              type="number"
              className="form-control"
              id="length"
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="extractRate">Extract Rate (m³/sec):</label>
            <input
              type="number"
              className="form-control"
              id="extractRate"
              value={extractRate}
              onChange={(e) => setExtractRate(e.target.value)}
            />
          </div>
<br/>
          <button className="btn btn-primary" onClick={calculateAirChangeRate}>
            Calculate
          </button>
<br/>
<br/>
          <div>
            <label>Air Change Rate (per hour):</label>
            <span>{airChangeRatePerHour.toFixed(2)} air changes per hour</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AirCalc;

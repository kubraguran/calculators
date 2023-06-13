import React, { useState } from "react";

function Converter() {
  const [inputValue, setInputValue] = useState("");
  const [inches, setInches] = useState(0);
  const [meters, setMeters] = useState(0);
  const [inWGPa, setInWGPa] = useState(0);
  const [inWGKPa, setInWGKPa] = useState(0);
  const [inWGMmWG, setInWGMmWG] = useState(0);
  const [cfm, setCFM] = useState(0);
  const [m3s, setM3s] = useState(0);
  const [cuft, setCuft] = useState(0);
  const [kpa, setKPa] = useState(0);
  const [pamwg, setPaMmWG] = useState(0);
  const [ftmin, setFtMin] = useState(0);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const convertValues = () => {
    const value = parseFloat(inputValue);

    if (!isNaN(value)) {
      setInches(value);
      setMeters((value * 0.0254).toFixed(2));
      setInWGPa((value * 249.088908).toFixed(2));
      setInWGKPa((value * 0.249089).toFixed(2));
      setInWGMmWG((value * 6.35029).toFixed(2));
      setCFM((value * 0.0283168).toFixed(2));
      setM3s((value * 0.000471947).toFixed(2));
      setCuft((value * 0.0166667).toFixed(2));
      setKPa((value * 0.249088).toFixed(2));
      setPaMmWG((value * 25.3995).toFixed(2));
      setFtMin((value * 196.850394).toFixed(2));
    } else {
      resetValues();
    }
  };

  const resetValues = () => {
    setInches(0);
    setMeters(0);
    setInWGPa(0);
    setInWGKPa(0);
    setInWGMmWG(0);
    setCFM(0);
    setM3s(0);
    setCuft(0);
    setKPa(0);
    setPaMmWG(0);
    setFtMin(0);
    setInputValue("");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <h1>Unit Converter</h1>

          <div className="form-group">
            <label>Value:</label>
            <input
              type="number"
              className="form-control"
              value={inputValue}
              onChange={handleInputChange}
            />
          </div>

          <div className="text-center">
            <button className="btn btn-primary" onClick={convertValues}>
              Convert
            </button>
            <button className="btn btn-secondary ml-2" onClick={resetValues}>
              Reset
            </button>
          </div>
        </div>

        <div className="col-lg-6">
          <h3>Conversion Results</h3>

          <div className="row">
            <div className="col-md-6">
              <div>
                <strong>Inches:</strong> {inches}
              </div>

              <div>
                <strong>Meters:</strong> {meters}
              </div>

              <div>
                <strong>In w.g (Pa):</strong> {inWGPa}
              </div>

              <div>
                <strong>In w.g (KPa):</strong> {inWGKPa}
              </div>

              <div>
                <strong>In w.g (mm w.g):</strong> {inWGMmWG}
              </div>
            </div>

            <div className="col-md-6">
              <div>
                <strong>CFM:</strong> {cfm}
              </div>

              <div>
                <strong>m³/s:</strong> {m3s}
              </div>

              <div>
                <strong>cu.ft:</strong> {cuft}
              </div>

              <div>
                <strong>KPa:</strong> {kpa}
              </div>

              <div>
                <strong>Pa mm w.g:</strong> {pamwg}
              </div>

              <div>
                <strong>ft/min:</strong> {ftmin}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Converter;

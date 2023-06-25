import React, { useState } from "react";

function Osha() {
  const [injuriesAndIllnesses, setInjuriesAndIllnesses] = useState(0);
  const [hoursWorked, setHoursWorked] = useState(0);
  const [incidenceRate, setIncidenceRate] = useState(0);

  const calculateIncidenceRate = () => {
    const rate = (injuriesAndIllnesses / hoursWorked) * 200000;
    setIncidenceRate(rate);
  };

  const handleInjuriesAndIllnessesChange = (event) => {
    const value = parseInt(event.target.value);
    if (!isNaN(value)) {
      setInjuriesAndIllnesses(value);
    }
  };

  const handleHoursWorkedChange = (event) => {
    const value = parseInt(event.target.value);
    if (!isNaN(value)) {
      setHoursWorked(value);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 mx-auto">
        <br/>
         <br/>
         <br/>
         <br/>
         <br/>
          <h5>Injury and Illness Incidence Rate Calculator</h5>
          <div className="form-group">
            <br />
            <label htmlFor="injuriesAndIllnesses">Number of injuries and illnesses:</label>
            <input
              type="text"
              pattern="[0-9]*"
              className="form-control"
              id="injuriesAndIllnesses"
              value={injuriesAndIllnesses}
              onChange={handleInjuriesAndIllnessesChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="hoursWorked">Number of hours worked:</label>
            <input
              type="text"
              pattern="[0-9]*"
              className="form-control"
              id="hoursWorked"
              value={hoursWorked}
              onChange={handleHoursWorkedChange}
            />
          </div>

          <br />

          <button className="btn btn-primary" onClick={calculateIncidenceRate}>
            Calculate
          </button>

          <br />
          <br />

          <div>
            <label>Injury and illness incidence rate:</label>
            <span>{incidenceRate.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Osha;

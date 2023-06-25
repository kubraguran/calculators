import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Drops = () => {
  const [weight, setWeight] = useState(0);
  const [size, setSize] = useState(0);

  const handleWeightChange = (e) => {
    setWeight(parseFloat(e.target.value));
  };

  const handleSizeChange = (e) => {
    setSize(parseFloat(e.target.value));
  };

  const calculateConsequence = () => {
  
    const graphData = [];
    for (let i = 0; i <= 10; i++) {
      const x = i;
      const y = weight * i * size; 
      let severity;
      if (y >= 100 && y < 1000) {
        severity = 'danger';
      } else if (y >= 1000 && y < 10000) {
        severity = 'major';
      } else if (y >= 10000 && y < 100000) {
        severity = 'incident';
      } else if (y >= 100000 && y < 1000000) {
        severity = 'slight';
      } else if (y >= 1000000) {
        severity = 'fatality';
      } else {
        severity = 'minor';
      }

      graphData.push({ x, y, severity });
    }

    return graphData;
  };

  const graphData = calculateConsequence();

  const severityColors = {
    danger: '#FF0000',
    major: '#FF9900',
    incident: '#FFCC00',
    slight: '#FFFF00',
    fatality: '#990000',
    minor: '#00FF00',
  };

  return (
    <div className="container text-center">
       <br/>
         <br/>
         <br/>
    <h5 className="calculator-title">Dropped Object Consequence Calculator</h5>
   
    <div className="row justify-content-center">
      <div className="col-lg-4">
        <div className="form-group">
          <label htmlFor="weight" className="input-label">Weight:</label>
          <div className="input-group">
            <input type="number" id="weight" value={weight} onChange={handleWeightChange} className="form-control" />
            <div className="input-group-append">
              <select className="form-control form-control-m">
                <option value="kg">kg</option>
                <option value="lb">lb</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="form-group">
          <label htmlFor="size" className="input-label">Size:</label>
          <div className="input-group">
            <input type="number" id="size" value={size} onChange={handleSizeChange} className="form-control" />
            <div className="input-group-append">
              <select className="form-control form-control-m">
                <option value="m">m</option>
                <option value="ft">ft</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br/>
    <br/>
      <div className="chart-container mt-5" style={{marginLeft: 110}}>
        <LineChart width={1000} height={400} data={graphData} margin={{ right: 30, left: 20, bottom: 10 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="x" />
          <YAxis />
          <Tooltip />
          <Legend />
          {Object.entries(severityColors).map(([severity, color]) => (
            <Line
              key={severity}
              type="monotone"
              dataKey="y"
              dot={false}
              strokeWidth={2}
              connectNulls={true}
              stroke={color}
              data={graphData.filter((entry) => entry.severity === severity)}
              />
              ))}
              </LineChart>
              </div>
              </div>
              );
              };
              
              export default Drops;
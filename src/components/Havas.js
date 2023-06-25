import React, { useState } from 'react';

function Havas() {
  const [time, setTime] = useState('');
  const [level, setLevel] = useState('');
  const [tool, setTool] = useState('');
  const [resultPercent, setResultPercent] = useState('');
  const [resultParagraph, setResultParagraph] = useState('');
  const [registerTable, setRegisterTable] = useState('');
  const [totalPoints, setTotalPoints] = useState(0);
  const [percentage, setPercentage] = useState(0);

  const calculate = () => {
    const timeValue = parseFloat(time);
    const levelValue = parseInt(level);
    const toolValue = tool;

    if (isNaN(timeValue) || isNaN(levelValue) || toolValue.trim() === '') {
      return;
    }

    const eavTime = Math.pow((2.5 / levelValue), 2) * 480;
    const elvTime = Math.pow((5 / levelValue), 2) * 480;
    const dvel = (timeValue / elvTime) * 100;

    const maxPoints = 400;
    const points = Math.floor((dvel / 100) * maxPoints);

    const eavHours = Math.floor(eavTime / 60);
    const eavMinutes = Math.round(eavTime % 60);
    const elvHours = Math.floor(elvTime / 60);
    const elvMinutes = Math.round(elvTime % 60);

    const resultPercent = `<p>${dvel.toFixed(2)}%</p>`;
    const resultParagraph = `<p>A ${toolValue} with a vibration output of ${timeValue}m/s² reaches the EAV (Exposure Action Value) in ${eavHours}hrs:${eavMinutes}mins and the ELV (Exposure Limit Value) in ${elvHours}hrs:${elvMinutes}mins.</p>
    <p>You have used ${points} points on this tool, which is ${(points / maxPoints * 100).toFixed(2)}% of the maximum daily allowance.</p>`;

    setResultPercent(resultPercent);
    setResultParagraph(resultParagraph);

    const newRow = (
      <tr key={toolValue}>
        <td>{toolValue}</td>
        <td>{points}</td>
        <td>{elvMinutes}</td>
        <td>{dvel.toFixed(2)}</td>
      </tr>
    );
    setRegisterTable(newRow);


    setTotalPoints((prevTotalPoints) => prevTotalPoints + points);

    setProgressBar(dvel.toFixed(2));

    setTime('');
    setLevel('');
    setTool('');
  };


  const setProgressBar = (percentage) => {
    const progressBar = document.getElementById('progress-bar');
    progressBar.style.width = `${percentage}%`;
    progressBar.setAttribute('aria-valuenow', percentage);

    if (percentage > 100) {
      progressBar.classList.remove('bg-primary');
      progressBar.classList.add('bg-danger');
    } else {
      progressBar.classList.remove('bg-danger');
      progressBar.classList.add('bg-primary');
    }
  };

  return (
    <div className="container">
      <div className="row">
        
        <div className="col-lg-6 mx-auto">
        <br/>
         <br/>
         <br/>
        <h5>Havas Calculator</h5>
        
          <div className="my-4">
            <div className="form-group">
              <label htmlFor="time">Time:</label>
              <input type="number" className="form-control" id="time" value={time} onChange={(e) => setTime(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="level">Level:</label>
              <input type="number" className="form-control" id="level" value={level} onChange={(e) => setLevel(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="tool">Tool:</label>
              <input type="text" className="form-control" id="tool" value={tool} onChange={(e) => setTool(e.target.value)} />
            </div>
            <br/>
            <button className="btn btn-primary" id="calculate-btn" onClick={calculate}>Calculate</button>
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-lg-6 mx-auto">
          <div id="result-percent" className="mb-3" dangerouslySetInnerHTML={{ __html: resultPercent }}></div>
          <div id="result-paragraph" className="mb-3" dangerouslySetInnerHTML={{ __html: resultParagraph }}></div>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Tool</th>
                <th>Points</th>
                <th>ELV Minutes</th>
                <th>DVEL</th>
              </tr>
            </thead>
            <tbody id="register-table">
              {registerTable}
            </tbody>
          </table>
          <div className="total-points">Total Points: {totalPoints}</div>
          <div className="progress mt-3">
            <div id="progress-bar" className={`progress-bar ${percentage > 100 ? 'bg-danger' : 'bg-primary'}`} role="progressbar" style={{ width: `${percentage}%` }} aria-valuenow={percentage} aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Havas;



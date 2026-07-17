import React, { useState } from 'react';
import './App.css';

function App() {
  // State management for the scoreboard
  const [runs, setRuns] = useState(0);
  const [wickets, setWickets] = useState(0);
  const [overs, setOvers] = useState(0);
  const [balls, setBalls] = useState(0);

  // Function to handle adding runs
  const addRuns = (amount) => {
    setRuns(runs + amount);
  };

  // Function to handle a legal delivery (ball bowled)
  const delivery = () => {
    if (wickets >= 10) return; // Innings over if 10 wickets fall

    let newBalls = balls + 1;
    if (newBalls === 6) {
      setOvers(overs + 1);
      setBalls(0);
    } else {
      setBalls(newBalls);
    }
  };

  // Function to handle a wicket falling
  const fallOfWicket = () => {
    if (wickets < 10) {
      setWickets(wickets + 1);
      delivery(); // Counts as a ball bowled
    }
  };

  // Reset the scoreboard
  const resetMatch = () => {
    setRuns(0);
    setWickets(0);
    setOvers(0);
    setBalls(0);
  };

  return (
    <div className="scoreboard-container">
      <h1>Cricket Scorecard</h1>
      
      <div className="display-panel">
        <div className="score">
          <h2>Score: <span className="highlight">{runs} / {wickets}</span></h2>
        </div>
        <div className="overs">
          <h3>Overs: <span className="highlight">{overs}.{balls}</span></h3>
        </div>
      </div>

      <div className="control-panel">
        <h3>Runs</h3>
        <button onClick={() => addRuns(1)}>+1 Run</button>
        <button onClick={() => addRuns(4)}>+4 (Boundary)</button>
        <button onClick={() => addRuns(6)}>+6 (Sixer)</button>
        
        <h3>Deliveries & Extras</h3>
        <button className="btn-ball" onClick={delivery}>Dot Ball</button>
        <button className="btn-wicket" onClick={fallOfWicket}>Wicket!</button>
        <button className="btn-extra" onClick={() => addRuns(1)}>Wide / No Ball (+1)</button>
      </div>

      <hr />
      <button className="btn-reset" onClick={resetMatch}>Reset Match</button>
    </div>
  );
}

export default App;
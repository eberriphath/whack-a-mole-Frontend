import React, {useState} from 'react';
import '../styles/StartScreen.css';
import {useNavigate} from 'react-router-dom';
import moleImg from '../CuteMole.png'; 

function Startscreen() {
  const navigate = useNavigate();
  const [level, setLevel] = useState("medium");

  const handleStart = () => {
    navigate(`/game?level=${level}`);
  };

  const handleScores = () => {
    navigate('/scores');
  };

  return (
    <div className="start-page">
      <h1 className="game-title">Whack-a-Mole</h1>

      <img src={moleImg} alt="Mole" className="start-page-mole" />

      <div className="level-select">
        <label htmlFor="level">Select Level:</label>
        <select
          id="level"
          value={level}
          onChange={(e) => setLevel(e.target.value)}
        >
          <option value="easy">Easy (1200)</option>
          <option value="medium">Medium (800)</option>
          <option value="hard">Hard (500)</option>
        </select>
      </div>

      <div className="button-group">
        <button onClick={handleStart}>Start Game</button>
        <button onClick={handleScores}>View Scores</button>
        <button onClick={() => navigate('/login')}>Login</button>
        <button onClick={() => navigate('/register')}>Register</button>
        <button onClick={() => navigate('/logout')}>Logout</button>
      </div>
    </div>
  );
}

export default Startscreen;
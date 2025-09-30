import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ScorePage.css';
import moleImg from '../CuteMole.png';   

function ScorePage() {
  const navigate = useNavigate();
  const playerName = localStorage.getItem('playerName') || "Player";
  const score = localStorage.getItem('highScore') || 0;

  return (
    <div className="score-container">
      <h1>{playerName}'s High Score</h1>
      <h2>{score}</h2>

      <p style={{ fontSize: '18px', marginTop: '20px' }}>
        🐹 Keep whacking to beat your high score! 🐹 
      </p>

      <img
        src={moleImg}
        alt="Mole"
        style={{ width: '150px', margin: '20px auto' }}
      />

      <button
        style={{ display: 'block', margin: '20px auto' }}
        onClick={() => navigate('/')}
      >
        Back to Home
      </button>

      <button
        style={{ display: 'block', margin: '10px auto', background: 'tomato', color: 'white' }}
        onClick={() => navigate('/logout')}
      >
        Logout
      </button>
    </div>
  );
}

export default ScorePage;
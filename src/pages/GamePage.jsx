import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import GameBoard from "../components/GameBoard";
import GameTimer from "../components/GameTimer";
import "../styles/GamePage.css";

function GamePage() {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const level = queryParams.get("level") || "medium";

  const getSpeed = () => {
    switch (level) {
      case "easy": return 1200;
      case "hard": return 500;
      default: return 800;
    }
  };

  const moleCount = 9;
  const [paused, setPaused] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [resetKey, setResetKey] = useState(0);
  const [moles, setMoles] = useState(Array(moleCount).fill(false));
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (!paused) {
      const interval = setInterval(() => {
        const newMoles = Array(moleCount).fill(false);
        const index = Math.floor(Math.random() * moleCount);
        newMoles[index] = true;
        setMoles(newMoles);
      }, getSpeed());
      return () => clearInterval(interval);
    } else {
      setMoles(Array(moleCount).fill(false));
    }
  }, [paused, resetKey]);

  const handleWhack = (index) => {
    if (moles[index]) {
      setScore(score + 1);
      const updated = [...moles];
      updated[index] = false;
      setMoles(updated);
    }
  };

  const handleTimeUp = () => {
    setPaused(true);
    setShowMenu(true);

    const currentHighScore = parseInt(localStorage.getItem("highScore")) || 0;
    if (score > currentHighScore) {
      localStorage.setItem("highScore", score);
    }

    alert(`Time is up! Your score: ${score}`);
  };

  return (
    <div className="game-container">
      <h2>Level: {level}</h2>
      <h2>Score: {score}</h2>

      <GameTimer
        startTime={30}
        paused={paused}
        onTimeUp={handleTimeUp}
        resetTrigger={resetKey}
      />

      <GameBoard moles={moles} handleWhack={handleWhack} />

      <div className="game-controls">
        {!showMenu ? (
          <button
            onClick={() => {
              setPaused(true);
              setShowMenu(true);
            }}
          >
            Pause
          </button>
        ) : (
          <>
            <button
              onClick={() => {
                setPaused(false);
                setShowMenu(false);
              }}
            >
              Resume
            </button>
            <button
              onClick={() => {
                setResetKey(resetKey + 1);
                setScore(0);
                setPaused(false);
                setShowMenu(false);
              }}
            >
              Restart
            </button>
            <button onClick={() => navigate("/")}>Home</button>
          </>
        )}
      </div>
    </div>
  );
}

export default GamePage;
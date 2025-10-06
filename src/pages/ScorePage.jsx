import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ScorePage.css";
import moleImg from "../CuteMole.png";

function ScorePage() {
  const navigate = useNavigate();
  const playerName = localStorage.getItem("playerName") || "Player";
  const scores = JSON.parse(localStorage.getItem("scores") || "[]");

  // Send all scores to Flask when component mounts
  useEffect(() => {
    const submitScores = async () => {
      try {
        const res = await fetch("http://localhost:5540/submit-scores", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ playerName, scores }),
        });
        const data = await res.json();
        console.log(data);
      } catch (err) {
        console.error("Failed to submit scores:", err);
      }
    };

    if (scores.length > 0) submitScores();
  }, [playerName, scores]);

  const highScore = scores.length > 0 ? Math.max(...scores) : 0;

  return (
    <div className="score-container">
      <h1>{playerName}'s Scores</h1>
      <h2>Highest: {highScore}</h2>

      <ul>
        {scores.length > 0 ? scores.map((s, i) => <li key={i}>{s}</li>) : <li>No scores yet!</li>}
      </ul>

      <p style={{ fontSize: "18px", marginTop: "20px" }}>
        🐹 Keep whacking to beat your high score! 🐹
      </p>

      <img src={moleImg} alt="Mole" style={{ width: "150px", margin: "20px auto" }} />

      <button style={{ display: "block", margin: "20px auto" }} onClick={() => navigate("/")}>
        Back to Home
      </button>

      
    </div>
  );
}

export default ScorePage;
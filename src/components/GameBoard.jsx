import React from "react";
import moleImg from '../CuteMole.png' ;
import '../styles/Games.css';

function GameBoard({ moles, handleWhack }) {
  return (
    <div className="grid">
      {moles.map((visible, index) => (
        <div
          key={index}
          className={`hole ${visible ? "active" : ""}`}
          onClick={() => handleWhack(index)}
        >
          {visible && <img src={moleImg} alt="Mole" className="mole" />}
        </div>
      ))}
    </div>
  );
}

export default GameBoard;
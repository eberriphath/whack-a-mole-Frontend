import { useState, useEffect } from "react";

const GameTimer = ({ startTime = 30, paused, onTimeUp, resetTrigger }) => {
  const [timeLeft, setTimeLeft] = useState(startTime);

  useEffect(() => {
    let timer;
    if (!paused && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }
    if (timeLeft === 0 && !paused) {
      onTimeUp();
    }
    return () => clearInterval(timer);
  }, [paused, timeLeft]);

  useEffect(() => {
    setTimeLeft(startTime);
  }, [resetTrigger]);

  return <h2>Time Left: {timeLeft}s</h2>;
};

export default GameTimer;
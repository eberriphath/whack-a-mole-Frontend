import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import LogoutPage from "./pages/LogoutPage";
import StartScreen from "./pages/StartScreen";
import GamePage from "./pages/GamePage";
import ScorePage from "./pages/ScorePage";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/logout" element={<LogoutPage />} />
      <Route path="/" element={<StartScreen />} />
      <Route path="/game" element={<GamePage />} />
      <Route path="/scores" element={<ScorePage />} />
    </Routes>
  );
}

export default App;
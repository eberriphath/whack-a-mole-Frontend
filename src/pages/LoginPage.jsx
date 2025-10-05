import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LoginPage.css";

export default function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // get users array from localStorage (saved during registration)
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    // check if the username + password exist
    const foundUser = users.find(
      (u) => u.username === username && u.password === password
    );

    if (foundUser) {
      // set current user globally in localStorage
      localStorage.setItem("user", username);

      // navigate to start screen after login
      navigate("/");
    } else {
      alert("Invalid username or password!");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>

        <p>
          Don’t have an account?{" "}
          <button type="button" onClick={() => navigate("/register")}>
            Register here
          </button>
        </p>
      </div>
    </div>
  );
}

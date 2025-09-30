import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LogoutPage.css";

function LogoutPage() {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear stored user
    localStorage.removeItem("user");

    // Redirect back to login after 1.5s
    const timer = setTimeout(() => {
      navigate("/login");
    }, 1500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="logout-container">
      <h1>You’ve been logged out 👋</h1>
      <p>Redirecting to login...</p>
    </div>
  );
}

export default LogoutPage;
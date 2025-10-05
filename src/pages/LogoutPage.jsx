import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function LogoutPage() {
  const navigate = useNavigate();

  useEffect(() => {
    // remove current user from localStorage
    localStorage.removeItem("user");

    // optionally also clear all users if you want a “hard reset”:
    // localStorage.removeItem("users");

    // redirect to login page after logout
    navigate("/login", { replace: true });
  }, [navigate]);

  return (
    <div>
      <h2>Logging out...</h2>
    </div>
  );
}

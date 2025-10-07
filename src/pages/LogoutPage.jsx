import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function LogoutPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const logout = async () => {
      const token = localStorage.getItem("token");

      await fetch("http://localhost:5640/logout", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      });

      
      localStorage.removeItem("user");
      localStorage.removeItem("token");

      navigate("/login", { replace: true });
    };

    logout();
  }, [navigate]);

  return (
    <div>
      <h2>Logging out...</h2>
    </div>
  );
}

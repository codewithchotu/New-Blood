import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import "../../styles/theme.css";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "admin@gmail.com" && password === "admin123") {
      console.log("✅ Login successful!");
      navigate("/home"); // ✅ Redirect to home
    } else {
      alert("❌ Invalid credentials! Try admin@gmail.com / admin123");
    }
  };

  return (
    <div className="login-container">
      <div className="blood-theme-bg"></div> {/* 🔴 Animated Blood Cells */}
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

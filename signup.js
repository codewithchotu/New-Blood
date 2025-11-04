// src/pages/Login/Signup.js
import React, { useState } from "react";
import { signUpUser } from "../../components/authService";
import "./styles.css";
import AnimatedBackground from "../../components/AnimatedBackground";

export default function Signup({ onBack }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please fill in all fields");
      return;
    }
    const result = await signUpUser(email, password);
    if (result.ok) onBack(); // return to login page
  };

  return (
    <div className="login-wrapper">
      <AnimatedBackground />
      <div className="login-container">
        <div className="login-box">
          <h1 className="login-title">Create Account</h1>
          <form onSubmit={handleSignup}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="login-input"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="login-input"
              required
            />
            <button type="submit" className="login-button">
              Sign Up
            </button>
          </form>

          <p className="signup-link">
            Already have an account?{" "}
            <span onClick={onBack}>Login</span>
          </p>
        </div>
      </div>
    </div>
  );
}

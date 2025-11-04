// src/pages/home/Home.jsx
import React from "react";
import "../../styles/theme.css";
import { useNavigate } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to Line line</h1>
      <p className="home-subtitle">Every drop counts. Choose your action below:</p>

      <div className="card-container">
        <div className="card" onClick={() => navigate("/register-donor")}>
          <h2>Become a Donor</h2>
          <p>Register yourself and save lives by donating blood.</p>
        </div>

        <div className="card" onClick={() => navigate("/request-blood")}>
          <h2>Request Blood</h2>
          <p>Need blood urgently? Post your request here.</p>
        </div>

        <div className="card" onClick={() => navigate("/view-donor")}>
          <h2>Find Donors</h2>
          <p>View available donors near your area.</p>
        </div>

        <div className="card" onClick={() => navigate("/map")}>
          <h2>View Map</h2>
          <p>See nearby hospitals and blood banks.</p>
        </div>
      </div>
    </div>
  );
}

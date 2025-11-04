import React from "react";
import "./RequestBlood.css";

export default function RequestBlood() {
  return (
    <div className="request-blood-page">
      <h1>Request Blood</h1>
      <p>Fill this form if you urgently need blood.</p>

      <form className="request-form">
        <input type="text" placeholder="Patient Name" required />
        <input type="text" placeholder="Blood Group Needed" required />
        <input type="text" placeholder="Hospital Name" required />
        <input type="text" placeholder="City" required />
        <button type="submit">Submit Request</button>
      </form>
    </div>
  );
}

import React, { useState } from "react";
import { db } from "../../firebaseConfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import "./RegisterDonor.css";

export default function RegisterDonor() {
  const [form, setForm] = useState({
    name: "",
    blood: "",
    city: "",
    phone: "",
  });
  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "donors"), {
        ...form,
        timestamp: serverTimestamp(),
      });
      setMsg("✅ Donor Registered Successfully!");
      setForm({ name: "", blood: "", city: "", phone: "" });
    } catch (err) {
      console.error(err);
      setMsg("❌ Failed to Register Donor!");
    }
  };

  return (
    <div className="page-container">
      <div className="blood-bg">
        {[...Array(15)].map((_, i) => (
          <div key={i} className="blood-cell"></div>
        ))}
      </div>

      <h2>🩸 Register as Donor</h2>
      <form onSubmit={handleSubmit} className="form-box">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="blood"
          placeholder="Blood Group (A+, O-, etc)"
          value={form.blood}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={form.city}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Contact Number"
          value={form.phone}
          onChange={handleChange}
          required
        />
        <button type="submit">Register Donor</button>
      </form>
      {msg && <p className="msg">{msg}</p>}
    </div>
  );
}

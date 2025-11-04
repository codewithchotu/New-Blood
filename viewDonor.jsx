import React, { useEffect, useState } from "react";
import { db } from "../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import "./viewDonor.css";
import "../../styles/theme.css";

export default function ViewDonors() {
  const [donors, setDonors] = useState([]);

  useEffect(() => {
    const fetchDonors = async () => {
      const donorCollection = await getDocs(collection(db, "donors"));
      setDonors(donorCollection.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    };
    fetchDonors();
  }, []);

  return (
    <div className="page-container">
      <div className="blood-bg">
        {[...Array(15)].map((_, i) => (
          <div key={i} className="blood-cell"></div>
        ))}
      </div>

      <h2>🩸 Registered Donors</h2>

      <div className="donor-list">
        {donors.length === 0 ? (
          <p className="msg">No donors found.</p>
        ) : (
          donors.map((donor) => (
            <div key={donor.id} className="donor-card">
              <h3>{donor.name}</h3>
              <p><strong>Blood Group:</strong> {donor.blood}</p>
              <p><strong>City:</strong> {donor.city}</p>
              <p><strong>Contact:</strong> {donor.phone}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

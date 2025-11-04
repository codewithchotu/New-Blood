import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./MapPage.css";

export default function MapPage() {
  useEffect(() => {
    // Initialize map
    const map = L.map("map").setView([20.5937, 78.9629], 5); // Default India view

    // Add OpenStreetMap tiles
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);

    // Example hospital markers
    const hospitals = [
      { name: "Apollo Hospital", coords: [17.426, 78.448] },
      { name: "Yashoda Hospital", coords: [17.433, 78.501] },
      { name: "Gandhi Hospital", coords: [17.422, 78.501] },
    ];

    hospitals.forEach((h) => {
      const marker = L.marker(h.coords).addTo(map);
      marker.bindPopup(`<b>${h.name}</b><br>Blood bank available`);
    });

    return () => map.remove(); // Cleanup on unmount
  }, []);

  return (
    <div className="map-page">
      <h2 className="map-title">Nearby Hospitals & Blood Banks</h2>
      <div id="map"></div>
    </div>
  );
}

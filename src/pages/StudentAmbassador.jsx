import React from "react";

export default function StudentAmbassador() {
  return (
    <div className="ambassador-page container">
      <div className="section-header">
        <span className="badge">Student Ambassador</span>
        <h2>Become a Student Ambassador</h2>
        <p>
          Represent Internee.pk at your university and inspire other students to
          start their careers in tech. Gain leadership skills and earn rewards.
        </p>
      </div>

      <div className="ambassador-content">
        <div className="amb-left">
          <h3>Why Join?</h3>
          <ul>
            <li>🌟 Leadership & event management experience</li>
            <li>🌟 Build your personal brand on campus</li>
            <li>🌟 Priority access to internships</li>
            <li>🌟 Exclusive perks & recognition</li>
          </ul>
          <button className="btn btn-dark">Apply Now</button>
        </div>
        <div className="amb-right">
          <img
            src="/images/ambassador.jpg"
            alt="Student Ambassador"
            onError={(e) => (e.currentTarget.src = "/images/placeholder.jpg")}
          />
        </div>
      </div>
    </div>
  );
}

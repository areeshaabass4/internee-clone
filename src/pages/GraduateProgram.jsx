import React from "react";

export default function GraduateProgram() {
  return (
    <div className="graduate-page container">
      <div className="section-header">
        <span className="badge">Graduate Program</span>
        <h2>Launch Your Career with Our Graduate Program</h2>
        <p>
          Designed for fresh graduates who are ready to step into the industry.
          Join our structured program and get real-world experience with expert
          guidance.
        </p>
      </div>

      <div className="grad-content">
        <div className="grad-left">
          <img
            src="/images/graduate.jpg"
            alt="Graduate Program"
            onError={(e) => (e.currentTarget.src = "/images/placeholder.jpg")}
          />
        </div>
        <div className="grad-right">
          <h3>What You’ll Get:</h3>
          <ul>
            <li>✔ Hands-on projects guided by mentors</li>
            <li>✔ Access to exclusive workshops</li>
            <li>✔ Networking with industry experts</li>
            <li>✔ Certificate of completion</li>
          </ul>
          <button className="btn btn-primary">Apply Now</button>
        </div>
      </div>
    </div>
  );
}

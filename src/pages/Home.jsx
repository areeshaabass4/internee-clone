import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-left">
            <h1>Looking for dream internship?</h1>
            <p>
            Internee.pk kickstart student's tech careers with first internships, providing industry exposure, practical skills, and networking opportunities.
            </p>
            <div className="hero-buttons">
              <Link to="/jobportal" className="btn btn-primary">
                Our Job Portal
              </Link>
              <Link to="/Signin" className="btn btn-dark">
                Sign In 
              </Link>
            </div>
          </div>
          <div className="hero-right">
            <img src="/images/hero.png" alt="Internship Program" />
          </div>
        </div>
      </section>

      <section className="internships">
        <div className="container">
          <div className="section-header">
            <span className="badge">Opportunities</span>
            <h2>Internships</h2>
            <p>Explore virtual internship programs in different domains.</p>
          </div>

          <div className="grid">
            <div className="card">
              <div className="card-img">
                <img src="/images/web-dev.jpeg" alt="Web Development" />
              </div>
              <div className="card-body">
                <h4>Web Development</h4>
                <Link to="/internships" className="apply">Apply Now →</Link>
              </div>
            </div>
            <div className="card">
              <div className="card-img">
                <img src="/images/AI.webp" alt="AI" />
              </div>
              <div className="card-body">
                <h4>Artificial Intelligence</h4>
                <Link to="/internships" className="apply">Apply Now →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
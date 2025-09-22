import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        {/* Logo + About */}
        <div className="footer-col">
          <h2 className="logo">
            Internee<span style={{ color: "var(--green)" }}>.pk</span>
          </h2>
          <p>
            Pakistan’s first dedicated internship platform.  
            Helping students launch their careers with industry-relevant experience.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/internships">Internships</Link></li>
            <li><Link to="/graduate">Graduate Program</Link></li>
            <li><Link to="/ambassador">Student Ambassador</Link></li>
          </ul>
        </div>

        {/* Social */}
        <div className="footer-col">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Internee.pk. All rights reserved.</p>
      </div>
    </footer>
  );
}

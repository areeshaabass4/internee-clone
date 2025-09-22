import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <header className="site-header">
      <div className="container header-inner">
        {/* Logo */}
        <div className="logo">
          <NavLink to="/" className="logo-link">
            Internee<span className="logo-pk">.pk</span>
          </NavLink>
        </div>

        {/* Desktop Navigation */}
        <nav className="nav desktop-only">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/internships">Internships</NavLink>
          <NavLink to="/graduate">Graduate Program</NavLink>
          <NavLink to="/ambassador">Student Ambassador</NavLink>
        </nav>

        {/* Right Actions */}
        <div className="actions desktop-only">
          <Link to="/jobportal" className="btn btn-primary">Job Portal</Link>
          <Link to="/signin" className="btn btn-dark">Sign In</Link>
          <button onClick={toggleDarkMode} className="btn-theme" type="button">
            {darkMode ? "🌙" : "☀️"}
          </button>
          <button
            className="hamburger"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            type="button"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <NavLink to="/" onClick={() => setIsMenuOpen(false)}>Home</NavLink>
          <NavLink to="/internships" onClick={() => setIsMenuOpen(false)}>Internships</NavLink>
          <NavLink to="/graduate" onClick={() => setIsMenuOpen(false)}>Graduate Program</NavLink>
          <NavLink to="/ambassador" onClick={() => setIsMenuOpen(false)}>Student Ambassador</NavLink>
          <Link to="/jobportal" className="btn btn-primary" onClick={() => setIsMenuOpen(false)}>
            Job Portal
          </Link>
          <Link to="/signin" className="btn btn-dark" onClick={() => setIsMenuOpen(false)}>
            Sign In
          </Link>
        </div>
      )}
    </header>
  );
}

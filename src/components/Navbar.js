import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = ({ mode, setMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMode = () => setMode(mode === "light" ? "dark" : "light");
  const closeMenu  = () => setMenuOpen(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar">
      <div className="container-fluid px-3 px-lg-4">

        {/* Brand */}
        <Link className="navbar-brand fw-bold" to="/" onClick={closeMenu}>
          <i className="bi bi-file-earmark-text-fill me-2"></i>
          TextUtils
        </Link>

        {/* Mobile right side — theme btn + hamburger */}
        <div className="d-flex align-items-center gap-2 d-lg-none">
          <button className="btn theme-btn" onClick={toggleMode} title={mode === "light" ? "Dark Mode" : "Light Mode"}>
            {mode === "light"
              ? <i className="bi bi-moon-stars-fill"></i>
              : <i className="bi bi-brightness-high-fill"></i>
            }
          </button>

          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        {/* Nav links — controlled by React state on mobile */}
        <div className={`navbar-collapse ${menuOpen ? "show" : "collapse"}`}>
          <ul className="navbar-nav ms-auto align-items-lg-center">

            <li className="nav-item">
              <NavLink className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"} to="/home" onClick={closeMenu}>
                <i className="bi bi-house-door-fill me-1"></i>Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"} to="/about" onClick={closeMenu}>
                <i className="bi bi-info-circle-fill me-1"></i>About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"} to="/feature" onClick={closeMenu}>
                <i className="bi bi-stars me-1"></i>Features
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"} to="/contact" onClick={closeMenu}>
                <i className="bi bi-envelope-fill me-1"></i>Contact
              </NavLink>
            </li>

            {/* Theme toggle — desktop only */}
            <li className="nav-item ms-2 d-none d-lg-block">
              <button className="btn theme-btn" onClick={toggleMode} title={mode === "light" ? "Dark Mode" : "Light Mode"}>
                {mode === "light"
                  ? <i className="bi bi-moon-stars-fill"></i>
                  : <i className="bi bi-brightness-high-fill"></i>
                }
              </button>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;

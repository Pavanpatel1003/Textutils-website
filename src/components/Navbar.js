import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = ({ mode, setMode }) => {
  const toggleMode = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar">
      <div className="container-fluid px-3 px-lg-4">

        {/* Brand */}
        <Link className="navbar-brand fw-bold" to="/">
          <i className="bi bi-file-earmark-text-fill me-2"></i>
          TextUtils
        </Link>

        {/* Mobile: theme btn + toggler side by side */}
        <div className="d-flex align-items-center d-lg-none gap-2">
          <button
            className="btn theme-btn"
            onClick={toggleMode}
            title={mode === "light" ? "Dark Mode" : "Light Mode"}
          >
            {mode === "light" ? (
              <i className="bi bi-moon-stars-fill"></i>
            ) : (
              <i className="bi bi-brightness-high-fill"></i>
            )}
          </button>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        {/* Nav Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center align-items-lg-center">

            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }
                to="/home"
              >
                <i className="bi bi-house-door-fill me-1"></i>Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }
                to="/about"
              >
                <i className="bi bi-info-circle-fill me-1"></i>About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }
                to="/feature"
              >
                <i className="bi bi-stars me-1"></i>Features
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }
                to="/contact"
              >
                <i className="bi bi-envelope-fill me-1"></i>Contact
              </NavLink>
            </li>

            {/* Theme toggle — desktop only */}
            <li className="nav-item ms-2 d-none d-lg-block">
              <button
                className="btn theme-btn"
                onClick={toggleMode}
                title={mode === "light" ? "Dark Mode" : "Light Mode"}
              >
                {mode === "light" ? (
                  <i className="bi bi-moon-stars-fill"></i>
                ) : (
                  <i className="bi bi-brightness-high-fill"></i>
                )}
              </button>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

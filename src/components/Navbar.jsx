import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow sticky-top">
      <div className="container">

        {/* Logo */}
        <Link className="navbar-brand fw-bold fs-4" to="/">
          🚢 Shipping Service
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Center Navigation */}
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav">

            <li className="nav-item mx-2">
              <Link className="nav-link text-white fw-semibold" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item mx-2">
              <Link className="nav-link text-white fw-semibold" to="/add-client">
                Add Client
              </Link>
            </li>

            <li className="nav-item mx-2">
              <Link className="nav-link text-white fw-semibold" to="/view-client">
                View Clients
              </Link>
            </li>

            <li className="nav-item mx-2">
              <Link className="nav-link text-white fw-semibold" to="/add-cargo">
                Add Cargo
              </Link>
            </li>

            <li className="nav-item mx-2">
              <Link className="nav-link text-white fw-semibold" to="/add-port">
                Add Port
              </Link>
            </li>

            <li className="nav-item mx-2">
              <Link className="nav-link text-white fw-semibold" to="/view-port">
                View Ports
              </Link>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
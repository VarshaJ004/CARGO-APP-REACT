import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">

        <Link className="navbar-brand" to="/">
          Shipping Service
        </Link>

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

        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav">

            <Link className="nav-link" to="/">
              Add Client
            </Link>

            <Link className="nav-link" to="/view-client">
              View Clients
            </Link>

            <Link className="nav-link" to="/add-port">
              Add Port
            </Link>

            <Link className="nav-link" to="/view-port">
              View Ports
            </Link>

          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
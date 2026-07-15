import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Home = () => {
  const modules = [
    {
      title: "Add Client",
      description:
        "Register new shipping clients with company and contact details.",
      image:
        "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=800",
      button: "Add Client",
      color: "primary",
      link: "/add-client",
    },
    {
      title: "View Clients",
      description:
        "Browse and manage all registered client companies.",
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800",
      button: "View Clients",
      color: "outline-primary",
      link: "/view-client",
    },
    {
      title: "Add Cargo",
      description:
        "Create cargo records with shipment, destination and weight.",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800",
      button: "Add Cargo",
      color: "success",
      link: "/add-cargo",
    },
    {
      title: "View Cargo",
      description:
        "Monitor all cargo records and shipment status.",
      image:
        "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800",
      button: "View Cargo",
      color: "outline-success",
      link: "/view-cargo",
    },
    {
      title: "Add Port",
      description:
        "Register ports with capacity, manager and operational status.",
      image:
        "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=800",
      button: "Add Port",
      color: "danger",
      link: "/add-port",
    },
    {
      title: "View Ports",
      description:
        "Browse all ports with cargo capacity and contact information.",
      image:
        "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=800",
      button: "View Ports",
      color: "outline-danger",
      link: "/view-port",
    },
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section */}

      <div className="container py-5">

        <div className="row justify-content-center">

          <div className="col-lg-9 text-center">

            <h1 className="display-2 fw-bold">
              🚢 Shipping Service
            </h1>

            <h2 className="display-5 text-secondary mb-4">
              Management System
            </h2>

            <p
              className="lead text-muted mx-auto"
              style={{ maxWidth: "850px" }}
            >
              A centralized platform to manage shipping operations,
              clients, cargo, and port information efficiently.
              Streamline logistics with a modern and user-friendly
              management system.
            </p>

            <Link
              to="/add-client"
              className="btn btn-primary btn-lg mt-3"
            >
              Get Started
            </Link>

          </div>

        </div>

      </div>

      {/* Modules */}

      <div className="container pb-5">

        <h2 className="text-center fw-bold mb-5">
          System Modules
        </h2>

        <div className="row g-4">

          {modules.map((module, index) => (

            <div className="col-lg-4 col-md-6" key={index}>

              <div
                className="card shadow-sm border-0 h-100"
                style={{
                  borderRadius: "15px",
                }}
              >

                <img
                  src={module.image}
                  alt={module.title}
                  className="card-img-top"
                  style={{
                    height: "220px",
                    objectFit: "cover",
                  }}
                />

                <div className="card-body d-flex flex-column text-center">

                  <h3 className="fw-bold mb-3">
                    {module.title}
                  </h3>

                  <p
                    className="text-secondary flex-grow-1"
                    style={{
                      minHeight: "70px",
                    }}
                  >
                    {module.description}
                  </p>

                  <Link
                    to={module.link}
                    className={`btn btn-${module.color} w-100`}
                  >
                    {module.button}
                  </Link>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* Footer */}

      <footer className="bg-light border-top py-4">

        <div className="container text-center">

          <h5 className="fw-bold">
            Shipping Service Management System
          </h5>

          <p className="text-muted mb-0">
            React • Bootstrap • Node.js • Express • MongoDB
          </p>

        </div>

      </footer>

    </>
  );
};

export default Home;
import React, { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";

function AddPort() {
  const [port, setPort] = useState({
    port_id: "",
    port_name: "",
    port_code: "",
    city: "",
    country: "",
    port_type: "",
    maximum_cargo_capacity: "",
    contact_number: "",
    port_manager: "",
    operational_status: "",
  });

  const handleChange = (e) => {
    setPort({
      ...port,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/add-port",
        port
      );

      alert(response.data.message);

      setPort({
        port_id: "",
        port_name: "",
        port_code: "",
        city: "",
        country: "",
        port_type: "",
        maximum_cargo_capacity: "",
        contact_number: "",
        port_manager: "",
        operational_status: "",
      });
    } catch (error) {
      console.log(error);
      alert("Failed to Add Port");
    }
  };

  return (
    <div className="container mt-4">
        <Navbar/>
      <h2 className="text-center mb-4">Add Port</h2>

      <form onSubmit={handleSubmit}>
        <div className="row">

          {/* Port ID */}
          <div className="col-md-4 mb-3">
            <label className="form-label">Port ID</label>
            <input
              type="text"
              className="form-control"
              name="port_id"
              value={port.port_id}
              onChange={handleChange}
            
              required
            />
          </div>

          {/* Port Name */}
          <div className="col-md-4 mb-3">
            <label className="form-label">Port Name</label>
            <input
              type="text"
              className="form-control"
              name="port_name"
              value={port.port_name}
              onChange={handleChange}
            
              required
            />
          </div>

          {/* Port Code */}
          <div className="col-md-4 mb-3">
            <label className="form-label">Port Code</label>
            <input
              type="text"
              className="form-control"
              name="port_code"
              value={port.port_code}
              onChange={handleChange}
            
              required
            />
          </div>

          {/* City */}
          <div className="col-md-4 mb-3">
            <label className="form-label">City</label>
            <input
              type="text"
              className="form-control"
              name="city"
              value={port.city}
              onChange={handleChange}
             
              required
            />
          </div>

          {/* Country */}
          <div className="col-md-4 mb-3">
            <label className="form-label">Country</label>
            <input
              type="text"
              className="form-control"
              name="country"
              value={port.country}
              onChange={handleChange}
              
              required
            />
          </div>

          {/* Port Type */}
          <div className="col-md-4 mb-3">
            <label className="form-label">Port Type</label>
            <select
              className="form-select"
              name="port_type"
              value={port.port_type}
              onChange={handleChange}
              required
            >
              <option value="">Select Port Type</option>
              <option>Container Port</option>
              <option>Bulk Cargo Port</option>
              <option>Fishing Port</option>
              <option>Passenger Port</option>
              <option>Oil Terminal</option>
            </select>
          </div>

          {/* Cargo Capacity */}
          <div className="col-md-4 mb-3">
            <label className="form-label">Maximum Cargo Capacity</label>
            <input
              type="text"
              className="form-control"
              name="maximum_cargo_capacity"
              value={port.maximum_cargo_capacity}
              onChange={handleChange}
         
              required
            />
          </div>

          {/* Contact Number */}
          <div className="col-md-4 mb-3">
            <label className="form-label">Contact Number</label>
            <input
              type="text"
              className="form-control"
              name="contact_number"
              value={port.contact_number}
              onChange={handleChange}
         
              required
            />
          </div>

          {/* Port Manager */}
          <div className="col-md-4 mb-3">
            <label className="form-label">Port Manager</label>
            <input
              type="text"
              className="form-control"
              name="port_manager"
              value={port.port_manager}
              onChange={handleChange}
             
              required
            />
          </div>

          {/* Operational Status */}
          <div className="col-md-4 mb-3">
            <label className="form-label">Operational Status</label>
            <select
              className="form-select"
              name="operational_status"
              value={port.operational_status}
              onChange={handleChange}
              required
            >
              <option value="">Select Status</option>
              <option>Operational</option>
              <option>Under Maintenance</option>
              <option>Closed</option>
            </select>
          </div>

        </div>

        <div className="text-center mt-4">
          <button type="submit" className="btn btn-success px-5">
            Add Port
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddPort;
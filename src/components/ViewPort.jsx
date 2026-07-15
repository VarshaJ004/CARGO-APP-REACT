import React, { useEffect, useState } from "react";
import axios from "axios";

const ViewPort = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    setLoading(true);

    axios
      .post("http://localhost:3000/view-port")
      .then((response) => {
        setData(response.data.data); // <-- Important
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">View All Ports</h2>

      {loading ? (
        <h4 className="text-center text-primary">Loading...</h4>
      ) : (
        <div className="table-responsive">
          <table className="table table-striped table-bordered table-hover text-center align-middle">
            <thead className="table-dark">
              <tr>
                <th>Port ID</th>
                <th>Port Name</th>
                <th>Port Code</th>
                <th>City</th>
                <th>Country</th>
                <th>Port Type</th>
                <th>Maximum Cargo Capacity</th>
                <th>Contact Number</th>
                <th>Port Manager</th>
                <th>Operational Status</th>
              </tr>
            </thead>

            <tbody>
              {data.length > 0 ? (
                data.map((value, index) => (
                  <tr key={index}>
                    <td>{value.port_id}</td>
                    <td>{value.port_name}</td>
                    <td>{value.port_code}</td>
                    <td>{value.city}</td>
                    <td>{value.country}</td>
                    <td>{value.port_type}</td>
                    <td>{value.maximum_cargo_capacity}</td>
                    <td>{value.contact_number}</td>
                    <td>{value.port_manager}</td>
                    <td>{value.operational_status}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="10">No Port Records Found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ViewPort;
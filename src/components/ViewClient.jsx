import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from './Navbar'


const ViewClient = () => {

    const [client, setClient] = useState([])

    const fetchData = () => {
        axios.post("http://localhost:3000/view-client")
            .then((response) => {
                console.log(response.data)
                setClient(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>

           <Navbar />

            <div className="container">

                <h2 className="heading">View Client Companies</h2>

                <div className="table-responsive">

                    <table className="table table-bordered table-striped table-hover">

                        <thead className="table-dark">
                            <tr>
                                <th>Company ID</th>
                                <th>Company Name</th>
                                <th>Contact Person</th>
                                <th>Phone Number</th>
                                <th>Email Address</th>
                                <th>Company Address</th>
                                <th>City</th>
                                <th>Country</th>
                                <th>GST Number</th>
                                <th>Business Type</th>
                            </tr>
                        </thead>

                        <tbody>

                            {client.map((value, index) => {

                                return (
                                    <tr key={index}>
                                        <td>{value.companyId}</td>
                                        <td>{value.companyName}</td>
                                        <td>{value.contactPerson}</td>
                                        <td>{value.phoneNumber}</td>
                                        <td>{value.emailAddress}</td>
                                        <td>{value.companyAddress}</td>
                                        <td>{value.city}</td>
                                        <td>{value.country}</td>
                                        <td>{value.gstNumber}</td>
                                        <td>{value.businessType}</td>
                                    </tr>
                                )

                            })}

                        </tbody>

                    </table>

                </div>

            </div>

        </div>
    )
}

export default ViewClient
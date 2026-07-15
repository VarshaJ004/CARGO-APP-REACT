import React, { useEffect, useState } from 'react'

import axios from 'axios'


const ViewCargo = () => {

    const [data, changeData] = useState([])

    const fetchData = () => {
        axios.get("http://localhost:3000/view-cargo").then(
            (response) => {
                changeData(response.data)
            }
        ).catch(
            (error) => {
                console.log(error)
            }
        )
    }

    useEffect(
        () => {
            fetchData()
        }, []
    )

    return (

        <div className="container">

           

            <div className="row g-3">
                <div className="col-12">

                    <table className="table table-bordered">

                        <thead>
                            <tr>
                                <th>Cargo ID</th>
                                <th>Cargo Name</th>
                                <th>Cargo Type</th>
                                <th>Weight</th>
                                <th>Quantity</th>
                                <th>Company Name</th>
                                <th>Origin Port</th>
                                <th>Destination Port</th>
                                <th>Container Number</th>
                                <th>Shipping Date</th>
                                <th>Delivery Status</th>
                                <th>Cargo Value</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                data.map((value, index) => (
                                    <tr key={index}>
                                        <td>{value.cargoId}</td>
                                        <td>{value.cargoName}</td>
                                        <td>{value.cargoType}</td>
                                        <td>{value.weight}</td>
                                        <td>{value.quantity}</td>
                                        <td>{value.companyName}</td>
                                        <td>{value.originPort}</td>
                                        <td>{value.destinationPort}</td>
                                        <td>{value.containerNumber}</td>
                                        <td>{value.shippingDate}</td>
                                        <td>{value.deliveryStatus}</td>
                                        <td>{value.cargoValue}</td>
                                    </tr>
                                ))
                            }
                        </tbody>

                    </table>

                </div>
            </div>

        </div>

    )
}

export default ViewCargo
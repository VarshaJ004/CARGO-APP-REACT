import React, { useState } from 'react'
import axios from 'axios'


const AddClient = () => {

    const [input, changeInput] = useState({
        companyId: "",
        companyName: "",
        contactPerson: "",
        phoneNumber: "",
        emailAddress: "",
        companyAddress: "",
        city: "",
        country: "",
        gstNumber: "",
        businessType: ""
    })

    const [message, setMessage] = useState("")
    const [error, setError] = useState("")

    const inputHandler = (event) => {
        changeInput({
            ...input,
            [event.target.name]: event.target.value
        })
    }

    const readValue = () => {
        console.log(input)

        axios.post("http://localhost:3000/add-client", input)
            .then((response) => {
                console.log(response.data)

                setMessage("Client Company Added Successfully")
                setError("")

                changeInput({
                    companyId: "",
                    companyName: "",
                    contactPerson: "",
                    phoneNumber: "",
                    emailAddress: "",
                    companyAddress: "",
                    city: "",
                    country: "",
                    gstNumber: "",
                    businessType: ""
                })
            })
            .catch((error) => {
                console.error(error)

                if (error.response) {
                    setError(error.response.data.message)
                } else {
                    setError("Something went wrong")
                }

                setMessage("")
            })
    }

    return (
        <div>
           

            <div className="container">

                <h2 className="heading">Add Client Company</h2>

                {message && (
                    <div className="alert alert-success">
                        {message}
                    </div>
                )}

                {error && (
                    <div className="alert alert-danger">
                        {error}
                    </div>
                )}

                <div className="row">
                    <div className="col-12">

                        <div className="row g-4">

                            <div className="col-md-6">
                                <label className="form-label"><b>Company ID</b></label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="companyId"
                                    value={input.companyId}
                                    onChange={inputHandler}
                                    placeholder="Enter Company ID"
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label"><b>Company Name</b></label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="companyName"
                                    value={input.companyName}
                                    onChange={inputHandler}
                                    placeholder="Enter Company Name"
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label"><b>Contact Person</b></label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="contactPerson"
                                    value={input.contactPerson}
                                    onChange={inputHandler}
                                    placeholder="Enter Contact Person"
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label"><b>Phone Number</b></label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="phoneNumber"
                                    value={input.phoneNumber}
                                    onChange={inputHandler}
                                    placeholder="Enter Phone Number"
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label"><b>Email Address</b></label>
                                <input
                                    type="email"
                                    className="form-control"
                                    name="emailAddress"
                                    value={input.emailAddress}
                                    onChange={inputHandler}
                                    placeholder="Enter Email Address"
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label"><b>Company Address</b></label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="companyAddress"
                                    value={input.companyAddress}
                                    onChange={inputHandler}
                                    placeholder="Enter Company Address"
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label"><b>City</b></label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="city"
                                    value={input.city}
                                    onChange={inputHandler}
                                    placeholder="Enter City"
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label"><b>Country</b></label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="country"
                                    value={input.country}
                                    onChange={inputHandler}
                                    placeholder="Enter Country"
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label"><b>GST Number</b></label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="gstNumber"
                                    value={input.gstNumber}
                                    onChange={inputHandler}
                                    placeholder="Enter GST Number"
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label"><b>Business Type</b></label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="businessType"
                                    value={input.businessType}
                                    onChange={inputHandler}
                                    placeholder="Enter Business Type"
                                />
                            </div>

                            <div className="col-md-6">
                                <button
                                    className="btn btn-primary"
                                    onClick={readValue}
                                >
                                    Add Client Company
                                </button>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default AddClient
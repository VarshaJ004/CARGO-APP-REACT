import axios from 'axios'
import React, { useState } from 'react'

const AddCargo = () => {


    const [input, changeInput] = useState(

        {
            cargoId: "",
            cargoName: "",
            cargoType: "",
            weight: "",
            quantity: "",
            companyName: "",
            originPort: "",
            destinationPort: "",
            containerNumber: "",
            shippingDate: "",
            deliveryStatus: "",
            cargoValue: ""

        }
    )


    const inputHandler = (event) => {
        changeInput({ ...input, [event.target.name]: event.target.value })
    }

    const readValue = () => {
        console.log(input)

        axios.post("http://localhost:3000/add-cargo", input).then(
            (response) => {
                console.log(response.data)
                alert("cargo added successfully")

            }

        ).catch(
            (error) => {
                console.error("Error Adding Cargo", error)
                alert("Failed to add Cargo")
            }
        )

    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Cargo ID</label>
                                <input type="text" className="form-control"
                                    name="cargoId" value={input.cargoId} onChange={inputHandler}
                                />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Cargo Name</label>
                                <input type="text" className="form-control"
                                    name="cargoName" value={input.cargoName} onChange={inputHandler}
                                />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Cargo Type</label>
                                <input type="text" className="form-control" name="cargoType" value={input.cargoType} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Weight</label>
                                <input type="text" className="form-control" name="weight" value={input.weight} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Quantity</label>
                                <input type="text" className="form-control"

                                    name="quantity" value={input.quantity} onChange={inputHandler}
                                />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Company Name</label>
                                <input type="text" className="form-control"
                                    name="companyName" value={input.companyName} onChange={inputHandler}
                                />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Origin Port</label>
                                <input type="text" className="form-control"
                                    name="originPort" value={input.originPort} onChange={inputHandler}
                                />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Destination Port</label>
                                <input type="text" className="form-control" name="destinationPort" value={input.destinationPort} onChange={inputHandler} />
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Container Number</label>
                                <input type="text" className="form-control" name="containerNumber" value={input.containerNumber} onChange={inputHandler} />
                            </div>

                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Shipping Date</label>
                                <input type="date"className="form-control" name="shippingDate" value={input.shippingDate} onChange={inputHandler} />
                            </div>

                                 <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Delivery Status</label>
                                <input type="text" className="form-control" name="deliveryStatus" value={input.deliveryStatus} onChange={inputHandler} />
                            </div>

                            
                                 <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Cargo Value</label>
                                <input type="text" className="form-control" name="cargoValue" value={input.cargoValue} onChange={inputHandler} />
                            </div>


                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <button className="btn btn-success" onClick={readValue}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}




export default AddCargo
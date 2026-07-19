import { useState } from "react";

function Register() {

    const [role, setRole] = useState("customer");

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",

        businessName: "",
        registrationNumber: "",
        province: "",
        city: "",
        address: "",
        businessPhone: "",
        businessEmail: "",
        website: "",
        description: ""
    });

    const handleChange = (e) => {

        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });

    };

    const handleSubmit = (e) => {

        e.preventDefault();

        console.log({
            role,
            ...formData
        });

    };

    return (

        <div className="container py-5">

            <div className="row justify-content-center">

                <div className="col-lg-8">

                    <div className="card shadow">

                        <div className="card-body">

                            <h2 className="mb-4">
                                Create Account
                            </h2>

                            <form onSubmit={handleSubmit}>

                                <div className="row">

                                    <div className="col-md-6 mb-3">

                                        <label>First Name</label>

                                        <input
                                            className="form-control"
                                            name="firstName"
                                            onChange={handleChange}
                                        />

                                    </div>

                                    <div className="col-md-6 mb-3">

                                        <label>Last Name</label>

                                        <input
                                            className="form-control"
                                            name="lastName"
                                            onChange={handleChange}
                                        />

                                    </div>

                                </div>

                                <div className="mb-3">

                                    <label>Email</label>

                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        onChange={handleChange}
                                    />

                                </div>

                                <div className="mb-3">

                                    <label>Phone</label>

                                    <input
                                        className="form-control"
                                        name="phone"
                                        onChange={handleChange}
                                    />

                                </div>

                                <div className="row">

                                    <div className="col-md-6 mb-3">

                                        <label>Password</label>

                                        <input
                                            type="password"
                                            className="form-control"
                                            name="password"
                                            onChange={handleChange}
                                        />

                                    </div>

                                    <div className="col-md-6 mb-3">

                                        <label>Confirm Password</label>

                                        <input
                                            type="password"
                                            className="form-control"
                                            name="confirmPassword"
                                            onChange={handleChange}
                                        />

                                    </div>

                                </div>

                                <div className="mb-4">

                                    <label className="form-label">
                                        Register As
                                    </label>

                                    <select
                                        className="form-select"
                                        value={role}
                                        onChange={(e) => setRole(e.target.value)}
                                    >

                                        <option value="customer">
                                            Customer
                                        </option>

                                        <option value="business">
                                            Business Owner
                                        </option>

                                    </select>

                                </div>

                                {role === "business" && (

                                    <>
                                        <hr />

                                        <h4 className="mb-3">
                                            Business Information
                                        </h4>

                                        <div className="mb-3">

                                            <label>Business Name</label>

                                            <input
                                                className="form-control"
                                                name="businessName"
                                                onChange={handleChange}
                                            />

                                        </div>

                                        <div className="mb-3">

                                            <label>Registration Number</label>

                                            <input
                                                className="form-control"
                                                name="registrationNumber"
                                                onChange={handleChange}
                                            />

                                        </div>

                                        <div className="row">

                                            <div className="col-md-6 mb-3">

                                                <label>Province</label>

                                                <select
                                                    className="form-select"
                                                    name="province"
                                                    onChange={handleChange}
                                                >
                                                    <option value="">Select Province</option>
                                                    <option>Gauteng</option>
                                                    <option>KwaZulu-Natal</option>
                                                    <option>Western Cape</option>
                                                    <option>Eastern Cape</option>
                                                    <option>Free State</option>
                                                    <option>Limpopo</option>
                                                    <option>Mpumalanga</option>
                                                    <option>North West</option>
                                                    <option>Northern Cape</option>
                                                </select>

                                            </div>

                                            <div className="col-md-6 mb-3">

                                                <label>City</label>

                                                <input
                                                    className="form-control"
                                                    name="city"
                                                    onChange={handleChange}
                                                />

                                            </div>

                                        </div>

                                        <div className="mb-3">

                                            <label>Business Address</label>

                                            <textarea
                                                className="form-control"
                                                rows="3"
                                                name="address"
                                                onChange={handleChange}
                                            />

                                        </div>

                                        <div className="mb-3">

                                            <label>Business Description</label>

                                            <textarea
                                                className="form-control"
                                                rows="4"
                                                name="description"
                                                onChange={handleChange}
                                            />

                                        </div>
                                    </>

                                )}

                                <button
                                    className="btn btn-dark w-100 mt-4"
                                >
                                    Register
                                </button>

                            </form>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Register;
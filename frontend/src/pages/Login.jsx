import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Login() {

    const { login } = useAuth();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        remember: false
    });

    const handleChange = (e) => {

        const { name, value, type, checked } = e.target;

        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value
        });

    };

        const handleSubmit = (e) => {

        e.preventDefault();

        login({
            id: 1,
            firstName: "Sandile",
            role: "customer"
        });

    };

    return (

        <div className="container py-5">

            <div className="row justify-content-center">

                <div className="col-md-6">

                    <div className="card shadow">

                        <div className="card-body p-4">

                            <h2 className="text-center mb-4">

                                Login

                            </h2>

                            <form onSubmit={handleSubmit}>

                                <div className="mb-3">

                                    <label className="form-label">

                                        Email Address

                                    </label>

                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />

                                </div>

                                <div className="mb-3">

                                    <label className="form-label">

                                        Password

                                    </label>

                                    <input
                                        type="password"
                                        className="form-control"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        required
                                    />

                                </div>

                                <div className="d-flex justify-content-between align-items-center mb-3">

                                    <div className="form-check">

                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            name="remember"
                                            checked={formData.remember}
                                            onChange={handleChange}
                                        />

                                        <label className="form-check-label">

                                            Remember Me

                                        </label>

                                    </div>

                                    <a href="#">

                                        Forgot Password?

                                    </a>

                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-dark w-100"
                                >

                                    Login

                                </button>

                            </form>

                            <hr />

                            <p className="text-center">

                                Don't have an account?

                                <Link
                                    to="/register"
                                    className="ms-2"
                                >

                                    Register

                                </Link>

                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Login;
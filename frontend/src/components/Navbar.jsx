import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
    const { user, logout } = useAuth();
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">

                <Link className="navbar-brand" to="/">
                    ThePanelBeatSA
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">

                    <ul className="navbar-nav ms-auto">

                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/search">Search</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>

                        {user ? (

                                <>
                                    <li className="nav-item">

                                        <Link
                                            className="nav-link"
                                            to="/dashboard"
                                        >
                                            Dashboard
                                        </Link>

                                    </li>

                                    <li className="nav-item">

                                        <button
                                            className="btn btn-link nav-link"
                                            onClick={logout}
                                        >
                                            Logout
                                        </button>

                                    </li>
                                </>

                            ) : (

                                <>
                                    <li className="nav-item">

                                        <Link
                                            className="nav-link"
                                            to="/login"
                                        >
                                            Login
                                        </Link>

                                    </li>

                                    <li className="nav-item">

                                        <Link
                                            className="nav-link"
                                            to="/register"
                                        >
                                            Register
                                        </Link>

                                    </li>
                                </>

                            )}
                    </ul>

                </div>

            </div>
        </nav>
    );
}

export default Navbar;
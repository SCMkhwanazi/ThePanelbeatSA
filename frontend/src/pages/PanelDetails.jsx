import { useParams } from "react-router-dom";

import {
    FaStar,
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
    FaGlobe,
    FaCheckCircle,
    FaCarCrash,
    FaPaintRoller,
    FaShieldAlt
} from "react-icons/fa";

function PanelDetails() {

    const { id } = useParams();

    return (

        <div className="container py-5">

            <div className="card shadow">

                <img
                    src="https://placehold.co/1200x350"
                    className="card-img-top"
                    alt="Cover"
                />

                <div className="card-body">

                    <div className="d-flex align-items-center mb-3">

                        <h2 className="me-3 mb-0">
                            ABC Panel Beaters
                        </h2>

                        <span className="badge bg-success">
                            <FaCheckCircle className="me-1" />
                            Verified
                        </span>

                    </div>

                    <p className="text-warning">
                        <FaStar /> 4.9
                    </p>

                    <p>
                        <FaMapMarkerAlt className="me-2 text-danger" />
                        Johannesburg, Gauteng
                    </p>

                    <p>
                        <FaPhoneAlt className="me-2 text-primary" />
                        011 123 4567
                    </p>

                    <p>
                        <FaEnvelope className="me-2 text-primary" />
                        info@abcpanelbeat.co.za
                    </p>

                    <p>
                        <FaGlobe className="me-2 text-primary" />
                        www.abcpanelbeat.co.za
                    </p>

                    <hr />

                    <h4>About</h4>

                    <p>

                        ABC Panel Beaters has over 20 years of
                        experience repairing accident damaged
                        vehicles across Gauteng.

                    </p>

                    <hr />

                    <h4>Services</h4>

                    <ul className="list-unstyled">

                        <li className="mb-2">
                            <FaCarCrash className="text-primary me-2" />
                            Dent Removal
                        </li>

                        <li className="mb-2">
                            <FaPaintRoller className="text-warning me-2" />
                            Spray Painting
                        </li>

                        <li className="mb-2">
                            <FaShieldAlt className="text-success me-2" />
                            Insurance Repairs
                        </li>

                    </ul>

                    <button className="btn btn-success mt-3">
                        Request Quote
                    </button>

                </div>

            </div>

        </div>

    );

}

export default PanelDetails;
import {
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
    FaClock
} from "react-icons/fa";

function Contact() {

    return (

        <div className="container py-5">

            <div className="text-center mb-5">

                <h1 className="fw-bold">
                    Contact Us
                </h1>

                <p className="lead text-muted">
                    We'd love to hear from you.
                </p>

            </div>

            <div className="row">

                <div className="col-lg-5">

                    <div className="card shadow h-100">

                        <div className="card-body">

                            <h3 className="mb-4">
                                Contact Information
                            </h3>

                            <p>
                                <FaMapMarkerAlt className="text-danger me-2" />
                                Johannesburg, Gauteng, South Africa
                            </p>

                            <p>
                                <FaPhoneAlt className="text-primary me-2" />
                                +27 11 123 4567
                            </p>

                            <p>
                                <FaEnvelope className="text-success me-2" />
                                info@thepanelbeat.co.za
                            </p>

                            <p>
                                <FaClock className="text-warning me-2" />
                                Monday - Friday
                                <br />
                                08:00 - 17:00
                            </p>

                        </div>

                    </div>

                </div>

                <div className="col-lg-7">

                    <div className="card shadow">

                        <div className="card-body">

                            <h3 className="mb-4">
                                Send Us a Message
                            </h3>

                            <form>

                                <div className="mb-3">

                                    <label>Name</label>

                                    <input
                                        type="text"
                                        className="form-control"
                                    />

                                </div>

                                <div className="mb-3">

                                    <label>Email</label>

                                    <input
                                        type="email"
                                        className="form-control"
                                    />

                                </div>

                                <div className="mb-3">

                                    <label>Subject</label>

                                    <input
                                        type="text"
                                        className="form-control"
                                    />

                                </div>

                                <div className="mb-3">

                                    <label>Message</label>

                                    <textarea
                                        rows="5"
                                        className="form-control"
                                    ></textarea>

                                </div>

                                <button
                                    className="btn btn-dark"
                                >
                                    Send Message
                                </button>

                            </form>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Contact;
import {
    FaUsers,
    FaHandshake,
    FaShieldAlt,
    FaSearchLocation
} from "react-icons/fa";

function About() {
    return (
        <div className="container py-5">

            <div className="text-center mb-5">
                <h1 className="fw-bold">About ThePanelBeat</h1>
                <p className="lead text-muted">
                    Connecting South Africans with trusted panel beaters.
                </p>
            </div>

            <div className="row align-items-center mb-5">

                <div className="col-lg-6">
                    <img
                        src="https://placehold.co/600x400"
                        className="img-fluid rounded shadow"
                        alt="About ThePanelBeat"
                    />
                </div>

                <div className="col-lg-6">

                    <h2>Who We Are</h2>

                    <p>
                        ThePanelBeat is an online platform designed to help
                        motorists across South Africa find reliable and
                        trustworthy panel beaters. Whether you've been in an
                        accident or need cosmetic vehicle repairs, our goal is
                        to simplify the process of finding the right repair
                        shop.
                    </p>

                    <p>
                        We bring together verified businesses, customer
                        reviews, and business information in one convenient
                        place, helping users make informed decisions.
                    </p>

                </div>

            </div>

            <div className="row text-center">

                <div className="col-md-3 mb-4">

                    <FaUsers size={45} className="text-primary mb-3" />

                    <h5>Community</h5>

                    <p>
                        Helping thousands of motorists connect with trusted
                        repair businesses.
                    </p>

                </div>

                <div className="col-md-3 mb-4">

                    <FaHandshake size={45} className="text-success mb-3" />

                    <h5>Trusted Businesses</h5>

                    <p>
                        Businesses can build their reputation through customer
                        reviews and quality service.
                    </p>

                </div>

                <div className="col-md-3 mb-4">

                    <FaShieldAlt size={45} className="text-warning mb-3" />

                    <h5>Verified Listings</h5>

                    <p>
                        We aim to verify businesses to improve trust and
                        transparency.
                    </p>

                </div>

                <div className="col-md-3 mb-4">

                    <FaSearchLocation size={45} className="text-danger mb-3" />

                    <h5>Nationwide Search</h5>

                    <p>
                        Search panel beaters across all provinces in South
                        Africa.
                    </p>

                </div>

            </div>

        </div>
    );
}

export default About;
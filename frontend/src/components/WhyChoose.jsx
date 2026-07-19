import { FaCheckCircle, FaStar, FaShieldAlt, FaSearchLocation } from "react-icons/fa";

function WhyChoose() {
    return (
        <section className="container py-5">

            <div className="text-center mb-5">
                <h2 className="fw-bold">Why Choose ThePanelBeat?</h2>
                <p className="text-muted">
                    Helping South Africans find trusted and reliable panel beaters.
                </p>
            </div>

            <div className="row text-center">

                <div className="col-md-3 mb-4">
                    <FaCheckCircle size={45} className="text-success mb-3" />
                    <h5>Verified Businesses</h5>
                    <p>Only verified panel beaters appear on our platform.</p>
                </div>

                <div className="col-md-3 mb-4">
                    <FaStar size={45} className="text-warning mb-3" />
                    <h5>Customer Reviews</h5>
                    <p>Read honest reviews from real customers.</p>
                </div>

                <div className="col-md-3 mb-4">
                    <FaShieldAlt size={45} className="text-primary mb-3" />
                    <h5>Trusted Repairs</h5>
                    <p>Compare quality and reputation before choosing.</p>
                </div>

                <div className="col-md-3 mb-4">
                    <FaSearchLocation size={45} className="text-danger mb-3" />
                    <h5>Search Nationwide</h5>
                    <p>Find panel beaters across South Africa.</p>
                </div>

            </div>

        </section>
    );
}

export default WhyChoose;
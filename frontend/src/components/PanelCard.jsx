import { Link } from "react-router-dom";
import {
    FaStar,
    FaMapMarkerAlt,
} from "react-icons/fa";

function PanelCard({id, name, city, rating }) {
    return (
        <div className="card shadow-sm h-100">

            <img
                src="https://placehold.co/600x300"
                className="card-img-top"
                alt={name}
            />

            <div className="card-body">

                <h5>{name}</h5>

                <p className="text-muted">
                    <FaMapMarkerAlt className="me-2 text-danger" />{city}
                </p>

                <p className="text-warning">
                    <FaStar /> {rating}
                </p>

                <Link
                    to={`/panel/${id}`}
                    className=" btn btn-dark w-100"
                >
                    View Profile
                </Link>

            </div>

        </div>
    );
}

export default PanelCard;
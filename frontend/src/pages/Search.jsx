import { useState } from "react";
import PanelCard from "../components/PanelCard";


function Search() {
    const [search, setSearch] = useState("");
    const [province, setProvince] = useState("");
    const [city, setCity] = useState("");
    const [rating, setRating] = useState("");

    const panelBeaters = [
        {
            id: 1,
            name: "ABC Panel Beaters",
            city: "Johannesburg",
            province: "Gauteng",
            rating: 4.9
        },
        {
            id: 2,
            name: "Elite Auto Body",
            city: "Pretoria",
            province: "Gauteng",
            rating: 4.8
        },
        {
            id: 3,
            name: "Durban Collision Centre",
            city: "Durban",
            province: "KwaZulu-Natal",
            rating: 4.7
        },
        {
            id: 4,
            name: "Cape Auto Repairs",
            city: "Cape Town",
            province: "Western Cape",
            rating: 4.6
        }
    ];

    const filtered = panelBeaters.filter(panel => {

        const matchName =
            panel.name.toLowerCase().includes(search.toLowerCase());

        const matchProvince =
            province === "" || panel.province === province;

        const matchCity =
            city === "" || panel.city === city;

        const matchRating =
            rating === "" || panel.rating >= Number(rating);

        return (
            matchName &&
            matchProvince &&
            matchCity &&
            matchRating
        );

    });

    return (
        <div className="container py-5">

            <h2 className="mb-4">Find a Panel Beater</h2>

            {/* Search Box */}

            <div className="input-group mb-4">

                <input
                    type="text"
                    className="form-control"
                    placeholder="Search by business..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <button className="btn btn-dark">
                    Search
                </button>

            </div>

            {/* Filters */}

            <div className="row mb-5">

                <div className="col-md-4">

                    <select
                        className="form-select"
                        value={province}
                        onChange={(e) => setProvince(e.target.value)}
                    >

                        <option value="">All Provinces</option>
                        <option>Gauteng</option>
                        <option>KwaZulu-Natal</option>
                        <option>Western Cape</option>

                    </select>

                </div>

                <div className="col-md-4">

                    <select
                        className="form-select"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    >

                        <option value="">All Cities</option>
                        <option>Johannesburg</option>
                        <option>Pretoria</option>
                        <option>Durban</option>
                        <option>Cape Town</option>

                    </select>

                </div>

                <div className="col-md-4">

                    <select
                        className="form-select"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                    >

                        <option value="">All Ratings</option>
                        <option value="4.5">4.5+</option>
                        <option value="4.7">4.7+</option>
                        <option value="4.9">4.9+</option>

                    </select>

                </div>

            </div>

            <h5 className="mb-4">
                {filtered.length} Result(s) Found
            </h5>

            <div className="row">

                {filtered.map(panel => (

                    <div
                        className="col-lg-4 col-md-6 mb-4"
                        key={panel.id}
                    >

                        <PanelCard
                            id={panel.id}
                            name={panel.name}
                            city={panel.city}
                            rating={panel.rating}
                        />

                    </div>

                ))}

            </div>

        </div>
    );
}

export default Search;
import PanelCard from "./PanelCard";

function FeaturedPanelBeaters() {

    const businesses = [
        {
            name: "ABC Panel Beaters",
            city: "Johannesburg",
            rating: "4.9"
        },
        {
            name: "Elite Auto Body",
            city: "Pretoria",
            rating: "4.8"
        },
        {
            name: "Durban Collision Centre",
            city: "Durban",
            rating: "4.7"
        }
    ];

    return (

        <section className="container py-5">

            <div className="text-center mb-5">
                <h2 className="fw-bold">
                    Featured Panel Beaters
                </h2>
            </div>

            <div className="row">

                {businesses.map((business, index) => (

                    <div className="col-md-4 mb-4" key={index}>

                        <PanelCard
                            name={business.name}
                            city={business.city}
                            rating={business.rating}
                        />

                    </div>

                ))}

            </div>

        </section>

    );
}

export default FeaturedPanelBeaters;
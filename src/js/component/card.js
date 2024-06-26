import React, { useState } from "react";
import { Link } from "react-router-dom";

// Example: Importing Bootstrap Icons CSS (adjust the URL as needed)


export const Card = ({ item, category }) => {
    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
    };

    return (
        <div className="card" style={{ width: "18rem", position: "relative" }}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">.......</p>
                <Link to={"/detail-view/"+category+"/"+item.uid} className="btn btn-primary" style={{ marginRight: "10px" }}>Details</Link>
                <button onClick={toggleFavorite} className="btn btn-link" style={{ position: "absolute", bottom: "10px", right: "10px" }}>
                    {isFavorite ? (
                        <i className="bi bi-star-fill text-warning"></i>
                    ) : (
                        <i className="bi bi-star text-warning"></i>
                    )}
                </button>
            </div>
        </div>
    );
};

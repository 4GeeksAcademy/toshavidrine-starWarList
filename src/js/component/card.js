import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Card = ({ item, category }) => {
    const { store, actions } = useContext(Context);
    const isFavorite = store.favorites.some(fav => fav.uid === item.uid);

    const toggleFavorite = () => {
        if (isFavorite) {
            actions.removeFavorites(item);
        } else {
            actions.addFavorites(item.name,item.uid,category);
        }
    };

    return (
        <div className="card" style={{ width: "18rem", position: "relative" }}>
            <img 
                src="https://st.depositphotos.com/2420147/2658/i/450/depositphotos_26587843-stock-photo-spaceship-interior-center-view.jpg" 
                className="card-img-top" 
                alt="Star Wars" 
            />
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
</p>
                <Link to={`/detail-view/${category}/${item.uid}`} className="btn btn-primary" style={{ marginRight: "10px" }}>Details</Link>
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

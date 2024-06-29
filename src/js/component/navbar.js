import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
    const { store } = useContext(Context);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src="https://seeklogo.com/images/S/star-wars-logo-886FACEAFF-seeklogo.com.png" alt="Star Wars Logo" className="logo" />
                   
                </Link>
                <div className="ml-auto">
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Favorites
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                {store.favorites.length > 0 ? (
                                    store.favorites.map((favorite, index) => (
                                        <li key={index}>
                                            <Link className="dropdown-item" to={"/detail-view/" + favorite.type + "/" + favorite.uid}>
                                                {favorite.name}
                                            </Link>
                                        </li>
                                    ))
                                ) : (
                                    <li>
                                        <span className="dropdown-item">No favorites added</span>
                                    </li>
                                )}
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

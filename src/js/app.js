import React from "react";
import "./index.css"; // Ensure you import the CSS file
import injectContext from "./AppContext"; // Adjust the import path if necessary

const App = () => {
    return (
        <div className="page-background">
            <div className="logo-container">
                <img src="......." alt="Star Wars Logo" className="star-wars-logo" />
            </div>
            <h1>Welcome to Star Wars App</h1>
            {/* Your app's main content */}
        </div>
    );
};

export default injectContext(App); // Wrap App with the context provider

import React from 'react';
import { Link } from 'react-router-dom';

const Error404 = () => {
    return (
        <div className="error-container">
            <div className="error-content">
                <div className="error-image">
                    <img src="path-to-your-404-image.svg" alt="404 Error" />
                </div>
                <h1 className="error-title">Oops! Page Not Found</h1>
                <p className="error-description">Sorry, the page you're looking for doesn't exist.</p>
                <Link to="/" className="error-button">
                    Back to Home
                </Link>
            </div>
        </div>
    );
};

export default Error404;

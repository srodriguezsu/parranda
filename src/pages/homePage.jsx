import React from 'react';
import './homePage.css'; // Assuming you have a CSS file for styling

const HomePage = () => {
    return (
        <div>
            <h1 className="main-titulo">Parranda Navideña</h1>
            <img
                src="/public/pesebre.svg"
                alt="Christmas Tree"
                className="absolute left-10 top-20 w-40 h-auto"
            />
        </div>
    );
};

export default HomePage;
import React from 'react';
import Header from "../components/header/index.jsx";

const NotFound = () => {
    return (
        <div>
            <Header pageTitle={"404"} />
            <h1>No pudimos encontrar lo que buscabas</h1>
        </div>
    );
};

export default NotFound;
import React from 'react';
import Header from "../components/header/index.jsx";

const NotFound = () => {
    return (
        <div>
            <Header pageTitle={"404"} />
            <main>
                <h2>No pudimos encontrar lo que buscabas</h2>
            </main>

        </div>
    );
};

export default NotFound;
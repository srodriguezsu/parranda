import React from 'react';
import Header from "../../components/header/index.jsx";

import ListRecetas from "./listRecetas.jsx";
import FormReceta from "./formReceta.jsx";
import './index.css';

const Index = () => {
    return (
        <>
            <Header pageTitle={"Sabores de Diciembre"}/>
            <main className="recetas-container">
                <FormReceta />
                <ListRecetas/>
            </main>
        </>
    );
};

export default Index;
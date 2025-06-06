import React, {useEffect, useState} from 'react';
import Header from "../../components/header/index.jsx";

import ListRecetas from "./listRecetas.jsx";
import FormReceta from "./formReceta.jsx";
import './index.css';

const Index = () => {

    return (
        <div>
            <Header pageTitle={"Sabores de Diciembre"}/>
            <div className="recetas-container">
                <FormReceta />
                <ListRecetas/>
            </div>

        </div>
    );
};

export default Index;
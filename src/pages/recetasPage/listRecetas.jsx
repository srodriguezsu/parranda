import React, {useEffect, useState} from 'react';
import {getRecipes} from "../../services/recetasService.js";
import CardReceta from "./cardReceta.jsx";
import './listRecetas.css';

const ListRecetas = () => {
    const [recetas, setRecetas] = useState([]);

    const fetchRecetas = async () => {
        const recipes = await getRecipes()
        setRecetas(recipes);
    };

    useEffect(() => {
        fetchRecetas().then();
    }, []);

    return (
        <div>
            <h2 className="title">Recetas de la comunidad</h2>

            <div className="recetas-list">
                {recetas.map((receta, index) => <CardReceta receta={receta} key={index}/> )}
            </div>
        </div>
    );
};

export default ListRecetas;
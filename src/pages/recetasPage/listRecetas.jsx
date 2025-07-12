import React, { useEffect, useState } from 'react';
import { getRecipes } from "../../services/recetasService.js";
import CardReceta from "./cardReceta.jsx";
import './listRecetas.css';

const ListRecetas = ({recetas, isLoading}) => {
    // Estado para almacenar las recetas




    if (isLoading) {
        return (
            <div className="list-recetas-container">
                <h2>Cargando recetas...</h2>
            </div>
        );
    }

    return (
        // Contenedor de la lista de recetas
        <div className="list-recetas-container">
            {/* Título de la lista */}
            <h2 className="title">Recetas de la comunidad</h2>

            {/* Lista de recetas */}
            <div className="recetas-list">
                {/* Mapeo de las recetas y renderizado de tarjetas */}
                {recetas.map((receta, index) => (
                    <CardReceta receta={receta} key={index} />
                ))}
            </div>
        </div>
    );
};

export default ListRecetas;
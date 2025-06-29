import React, { useEffect, useState } from 'react';
import { getRecipes } from "../../services/recetasService.js";
import CardReceta from "./cardReceta.jsx";
import './listRecetas.css';

const ListRecetas = () => {
    // Estado para almacenar las recetas
    const [recetas, setRecetas] = useState([]);

    // Función para obtener las recetas
    const fetchRecetas = async () => {
        // Llamada al servicio de recetas
        const recipes = await getRecipes();
        // Actualización del estado con las recetas obtenidas
        setRecetas(recipes);
    };

    // Efecto para obtener las recetas al montar el componente
    useEffect(() => {
        // Llamada a la función de obtención de recetas
        fetchRecetas().then();
    }, []);

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
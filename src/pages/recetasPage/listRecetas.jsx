import React from 'react';
import CardReceta from "./cardReceta.jsx";
import './listRecetas.css';

const ListRecetas = ({ recetas, isLoading, onAction }) => {

    if (isLoading) {
        return (
            <div className="list-recetas-container">
                <h2>Cargando recetas...</h2>
            </div>
        );
    }

    return (
        <div className="list-recetas-container">
            <h2 className="title">Recetas de la comunidad</h2>

            <div className="recetas-list">
                {recetas.map((receta, index) => (
                    <CardReceta 
                        receta={receta} 
                        key={index} 
                        onAction={onAction} 
                    />
                ))}
            </div>
        </div>
    );
};

export default ListRecetas;

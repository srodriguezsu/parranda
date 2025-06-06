import React from 'react';
import './cardReceta.css';

const CardReceta = ({ receta }) => {
    return (
        <div className="card-receta">
            <img src={receta.imagen} alt={receta.nombre} className="receta-image" />
            <div className="receta-content">
                <h3 className="receta-title">{receta.nombre}</h3>
                <p className="receta-author">Por: {receta.autor}</p>
                <p className="receta-rating">{receta.valoracion} <i className="fas fa-star"></i> </p>
                <button className="receta-button">Ver más</button>
            </div>
        </div>
    );
};

export default CardReceta;
import React, { useState } from 'react';
import './cardReceta.css';

const CardReceta = ({ receta }) => {
    const [isOverlayVisible, setIsOverlayVisible] = useState(false);

    const toggleOverlay = () => setIsOverlayVisible(!isOverlayVisible);

    return (
        <div className="card-receta">
            <img src={receta.imagen} alt={receta.nombre} className="receta-image" />
            <div className="receta-content">
                <h3 className="receta-title">{receta.nombre}</h3>
                <p className="receta-author">Por: {receta.autor}</p>
                <p className="receta-rating">{receta.valoracion} <i className="fas fa-star"></i></p>
                <button className="receta-button" onClick={toggleOverlay}>
                    Ver más
                </button>
            </div>
            {isOverlayVisible && (
                <div className="card-overlay">
                    <div className="overlay-content">
                        <h3>Instrucciones {receta.nombre}</h3>
                        <p>{receta.instrucciones}</p>
                        <button className="receta-button" onClick={toggleOverlay}>
                            Cerrar
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CardReceta;
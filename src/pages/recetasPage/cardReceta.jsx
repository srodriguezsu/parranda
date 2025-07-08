import React, { useState } from 'react';
import './cardReceta.css';
import {API_URL} from "../../services/recetasService.js";

const CardReceta = ({ receta }) => {
    const [isOverlayVisible, setIsOverlayVisible] = useState(false);

    const toggleOverlay = () => setIsOverlayVisible(!isOverlayVisible);
// TODO: add the functionality to like a recipe
    return (
        <div className="card-receta">
            <img src={API_URL + '/' + receta.imagen_url} alt={receta.titulo} className="receta-image" />
            <div className="receta-content">
                <h3 className="receta-title">{receta.titulo}</h3>
                <p className="receta-author">Por: {receta.nombre_autor}</p>
                <p className="receta-rating">{receta.valoracion} <i className="fas fa-star"></i></p>
                <button className="receta-button" onClick={toggleOverlay}>
                    Ver más
                </button>
            </div>
            {isOverlayVisible && (
                <div className="card-overlay">
                    <div className="overlay-content">
                        <h3>Instrucciones {receta.titulo}</h3>
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
import React, { useState } from 'react';
import './cardReceta.css';
import {API_URL} from "../../services/recetasService.js";
import {useNavigate} from "react-router-dom";

const CardReceta = ({ receta }) => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');


// TODO: add the functionality to like a recipe
    return (
        <div className="card-receta">
            <img src={API_URL + '/' + receta.imagen_url} alt={receta.titulo} className="receta-image" />
            <div className="receta-content">
                <h3 className="receta-title">{receta.titulo}</h3>
                <p className="receta-author">Por: {receta.nombre_autor}</p>
                <p className="receta-rating">{receta.valoracion} <i className="fas fa-star"></i></p>
                <div>
                    <button className="receta-button" onClick={()=>navigate("/receta/" + receta.id)}>
                        Ver más
                    </button>
                    {
                        token ? (
                            <>
                                <button className="receta-button like-button" onClick={() => alert('Funcionalidad de me gusta aún no implementada')}>
                                    <i className="fas fa-thumbs-down" style={{ transform: 'scaleX(-1)' }}></i>
                                </button>
                                <button className="receta-button like-button" onClick={() => alert('Funcionalidad de me gusta aún no implementada')}>
                                    <i className="fas fa-thumbs-up"></i>
                                </button>
                            </>

                        ) : null
                    }

                </div>

            </div>
        </div>
    );
};

export default CardReceta;
import React, {useEffect, useState} from 'react';
import './cardReceta.css';
import {API_URL, dislikeReceta, likeReceta} from "../../services/recetasService.js";
import {useNavigate} from "react-router-dom";

const CardReceta = ({ receta }) => {

    const navigate = useNavigate();
    const token = localStorage.getItem('token');



    const onLike = async () => {
        try {
            const response = await likeReceta(receta.id, token);
            alert(response.message);
            // Aquí podrías actualizar el estado de la receta si es necesario
            // setReceta(response.receta);
            console.log(response);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    const onDislike = async () => {
        try {
            const response = await dislikeReceta(receta.id, token);
            alert(response.message);
            // Aquí podrías actualizar el estado de la receta si es necesario
            setReceta(response.receta);
            console.log(response);
        } catch (error) {
            console.error('Error:', error);
        }
    }
    return (
        <div className="card-receta">
            <img src={API_URL + '/' + receta?.imagen_url} alt={receta?.titulo} className="receta-image" />
            <div className="receta-content">
                <h3 className="receta-title">{receta?.titulo}</h3>
                <p className="receta-author">Por: {receta?.nombre_autor}</p>
                <p className="receta-rating">

                    {Array.from({ length: 5 }, (_, i) => {
                        const show = i < receta?.valoracion ? '' : '-o';
                        return(
                        <i
                            key={i}
                            className={`fas fa-heart${show}`}
                            style={{margin: 1}}
                        ></i>
                    )})}
                </p>
                <div>
                    <button className="receta-button" onClick={()=>navigate("/receta/" + receta?.id)}>
                        Ver más
                    </button>
                    {
                        token ? (
                            <>
                                <button className="receta-button like-button" onClick={onDislike}>
                                    <i className="fas fa-thumbs-down" style={{ transform: 'scaleX(-1)' }}></i>
                                </button>
                                <button className="receta-button like-button" onClick={onLike}>
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
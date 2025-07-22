import React, {useEffect, useState} from 'react';
import './cardReceta.css';
import {API_URL, dislikeReceta, likeReceta} from "../../services/recetasService.js";
import {useNavigate} from "react-router-dom";

const CardReceta = ({ receta }) => {

    const [currentReceta, setReceta] = useState(receta);
    const navigate = useNavigate();
    const token = localStorage.getItem('token');



    const onLike = async () => {
        try {
            const response = await likeReceta(receta.id, token);
            alert(response.message);
            // Aquí podrías actualizar el estado de la receta si es necesario
            setReceta(response.receta);
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
                {currentReceta.mi_like}
                <p className="receta-rating">
                    {Array.from({ length: 5 }, (_, i) => {
                        let iconClass = 'fas fa-heart';
                        let color = 'lightgray'; // neutro

                        if (currentReceta?.valoracion > 0 && i < currentReceta.valoracion) {
                            color = 'red'; // likes
                        } else if (currentReceta?.valoracion < 0 && i < Math.abs(currentReceta.valoracion)) {
                            color = 'gray'; // dislikes
                        }

                        return (
                            <i
                                key={i}
                                className={iconClass}
                                style={{ color, margin: 1 }}
                            ></i>
                        );
                    })}
                </p>


                <div>
                    <button className="receta-button" onClick={()=>navigate("/receta/" + receta?.id)}>
                        Ver más
                    </button>
                    {
                        token ? (
                            <>
                                <button className="receta-button like-button" onClick={onDislike}>
                                    <i className="fas fa-thumbs-down" style={{ transform: 'scaleX(-1)', color: currentReceta.mi_like === -1 ? 'grey' : undefined }}></i>
                                </button>
                                <button className="receta-button like-button"  onClick={onLike}>
                                    <i className="fas fa-thumbs-up" style={{ color: currentReceta.mi_like === 1 ? 'grey' : undefined }}></i>
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
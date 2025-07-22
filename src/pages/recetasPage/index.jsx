import React, {useEffect, useState} from 'react';
import Header from "../../components/header/index.jsx";
import { likeReceta, dislikeReceta} from '../../services/recetasService.js';
import ListRecetas from "./listRecetas.jsx";
import FormReceta from "./formReceta.jsx";
import './index.css';
import {getRecipes} from "../../services/recetasService.js";

const Index = () => {
    const token = localStorage.getItem("token");
    const [recetas, setRecetas] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedReceta, setSelectedReceta] = useState(null);
    const [actionType, setActionType] = useState(null); // 'like' o 'dislike'

    const mensajes = {
        like: '¿Deseas agregar esta receta a tus favoritos?',
        dislike: '¿Deseas eliminar esta receta de tus favoritos?',
        likeAgain: 'Ya has dado like a esta receta',
        dislikeAgain: 'Ya has dado dislike a esta receta'
    }

    const mensajes2 = {
        like: '¿Estás seguro de que deseas dar like a esta receta?',
        dislike: '¿Estás seguro de que deseas dar dislike a esta receta?',
        likeAgain: 'Ya has dado like a esta receta',
        dislikeAgain: 'Ya has dado dislike a esta receta'
    }

    const openModal = (receta, action) => {
        //if (action === 'like' && receta.mi_like === 1) return;
        //if (action === 'dislike' && receta.mi_like === -1) return;
        if (action === 'like' && receta.mi_like === 1) {
            setActionType("likeAgain");
        }

        else if (action === 'dislike' && receta.mi_like === -1) {
            setActionType("dislikeAgain");
        }
        else {
            setActionType(action);
        }
        setSelectedReceta(receta);
    };

    const closeModal = () => {
        setSelectedReceta(null);
        setActionType(null);
    };

    // Función para obtener las recetas
    const fetchRecetas = async () => {
        setIsLoading(true);
        // Llamada al servicio de recetas
        const recipes = await getRecipes(token);
        // Actualización del estado con las recetas obtenidas
        setRecetas(recipes);
        setIsLoading(false);
    };

    // Efecto para obtener las recetas al montar el componente
    useEffect(() => {
        // Llamada a la función de obtención de recetas
        fetchRecetas().then();
    }, []);

    return (
        <>
            <Header pageTitle={"Sabores de Diciembre"}/>
            <main className="recetas-container">
                <FormReceta onRecetaAgregada={nuevaReceta => setRecetas(prev => [nuevaReceta, ...prev])} />
                <ListRecetas recetas={recetas} isLoading={isLoading} onAction={(receta, action) => openModal(receta, action)} />
            </main>

            {selectedReceta && (
    <div className="modal-overlay">
        <div className="modal-content">
            <h3>{mensajes[actionType]}</h3>
            <p>
                {mensajes2[actionType]}
            </p>
            <div className="modal-buttons">
                <button
                    className="btn-confirmar"
                    onClick={async () => {
                        try {
                            if (actionType === 'like' || actionType === 'likeAgain') {
                                await likeReceta(selectedReceta.id, token);
                            } else {
                                await dislikeReceta(selectedReceta.id, token);
                            }
                            fetchRecetas();
                        } catch (e) {
                            console.error(e);
                        }
                        closeModal();
                    }}
                >
                    Sí, Confirmar
                </button>
                <button className="btn-cancelar" onClick={closeModal}>Cancelar</button>
            </div>
        </div>
    </div>
)}

        </>
    );
};

export default Index;
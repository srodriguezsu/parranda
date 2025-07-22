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

    const openModal = (receta, action) => {
    setSelectedReceta(receta);
    setActionType(action);
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
            <h3>{actionType === 'like' ? 'Dar like?' : 'Dar dislike?'}</h3>
            <p>
                {actionType === 'like'
                    ? '¿Estás seguro de que deseas dar like a esta receta?'
                    : '¿Estás seguro de que deseas dar dislike a esta receta?'}
            </p>
            <div className="modal-buttons">
                <button
                    className="btn-confirmar"
                    onClick={async () => {
                        try {
                            if (actionType === 'like') {
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
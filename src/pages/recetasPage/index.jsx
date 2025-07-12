import React, {useEffect, useState} from 'react';
import Header from "../../components/header/index.jsx";

import ListRecetas from "./listRecetas.jsx";
import FormReceta from "./formReceta.jsx";
import './index.css';
import {getRecipes} from "../../services/recetasService.js";

const Index = () => {
    const [recetas, setRecetas] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // Función para obtener las recetas
    const fetchRecetas = async () => {
        setIsLoading(true);
        // Llamada al servicio de recetas
        const recipes = await getRecipes();
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
                <ListRecetas recetas={recetas} isLoading={isLoading} />
            </main>
        </>
    );
};

export default Index;
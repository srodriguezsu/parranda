import React, {useState} from 'react';
import Header from "../../components/header/index.jsx";
import {useNavigate, useParams} from "react-router-dom";

const EditarRecetaPage = () => {
    const token = localStorage.getItem("token");
    const navigate = useNavigate();
    const {id} = useParams();
    if (!token) {
        return (
            <div>
                <Header pageTitle="Editar Receta" />
                <p>Por favor, inicia sesión para editar la receta.</p>
                <button onClick={()=>navigate('/login')}>Iniciar sesión</button>
            </div>
        );
    }

    return (
        <div>
            <Header pageTitle="Editar Receta" />
        </div>
    );
};

export default EditarRecetaPage;
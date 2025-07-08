import React, {useState} from 'react';
import Header from "../../components/header/index.jsx";
import {useNavigate, useParams} from "react-router-dom";

const EditarRecetaPage = () => {
    const token = localStorage.getItem("token");
    const navigate = useNavigate();
    const {id} = useParams();

    // TODO finish the editing and deleting recipe functionality
    return (
        <div>
            <Header pageTitle="Editar Receta" />
        </div>
    );
};

export default EditarRecetaPage;
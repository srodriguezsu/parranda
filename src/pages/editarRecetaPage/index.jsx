import React, { useEffect, useState } from 'react';
import './index.css';
import Header from "../../components/header/index.jsx";
import { useNavigate, useParams } from "react-router-dom";
import { getRecipeById, updateRecipeById, deleteRecipe } from "../../services/recetasService.js";
import {API_URL} from "../../services/recetasService.js";

const EditarRecetaPage = () => {
    const token = localStorage.getItem("token");
    const navigate = useNavigate();
    const { id } = useParams();

    const [receta, setReceta] = useState(null);
    const [editando, setEditando] = useState(false);
    const [borrando, setBorrando] = useState(false);
    // Estado inicial del formulario
    const [formData, setFormData] = useState({
        titulo: '',
        instrucciones: '',
        imagen: '',
    });

    const fetchReceta = async (id) => {
        try {
            console.log("Obteniendo receta con ID:", id);
            const recetaObtenida = await getRecipeById(id);
            setReceta(recetaObtenida);
            setFormData({
                titulo: recetaObtenida.titulo || '',
                instrucciones: recetaObtenida.instrucciones || '',
            });
        } catch (error) {
            console.error("Error al obtener la receta:", error);
        }
    };

    useEffect(() => {
        fetchReceta(id);
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const formDataToSend = new FormData();
        
        formDataToSend.append('titulo', formData.titulo);
        formDataToSend.append('instrucciones', formData.instrucciones);

        
        if (formData.imagen) {
            formDataToSend.append('imagen', formData.imagen);
        }

        await updateRecipeById(id, formDataToSend, token);
        alert("Receta actualizada correctamente");
        setEditando(false);
        fetchReceta(id);
    } catch (error) {
        console.error("Error al actualizar receta:", error);
        alert("Hubo un problema al actualizar la receta");
    }
};


    const handleDelete = async () => {
        try {
            await deleteRecipe(id, token);
            alert("Receta eliminada correctamente");
            navigate('/recetas');
        } catch (error) {
            console.error("Error al eliminar receta:", error);
            alert("Hubo un problema al eliminar la receta");
        }
    };

    const handleImageChange = (e) => {
        setFormData({ ...formData, imagen: e.target.files[0] });
    };

    if (!receta) {
        return (
            <>
                <Header pageTitle="Cargando receta..." />
                <div className="cargando-container">

                    <p className="cargando-texto">Por favor, espera mientras se carga la receta.</p>
                </div>
            </>

        );
    }

    return (
        <>
            <Header pageTitle={receta.titulo} />
            <div className="pagina-editar-receta">

                {!editando ? (
                    <div className="vista-receta">
                        <h2 className="titulo-receta">{receta.titulo}</h2>
                        <p className="instrucciones-label"><strong>Instrucciones:</strong></p>
                        <p className="instrucciones-texto">{receta.instrucciones}</p>
                        <img src={API_URL + '/' + receta.imagen_url} alt={receta.titulo} className="recipe-image" />
                        

                        {token && (
                            <div className="botones-edicion">
                                <button className="btn-editar" onClick={() => setEditando(true)}>Editar Receta</button>
                                <button className="btn-borrar" onClick={() => setBorrando(true)}>Borrar Receta</button>
                            </div>
                        )}
                    </div>
                ) : (
                    <form className="formulario-edicion" onSubmit={handleSubmit}>
                        <div className="campo-formulario">
                            <label className="etiqueta-formulario">Título:</label>
                            <input
                                className="input-formulario"
                                type="text"
                                name="titulo"
                                value={formData.titulo}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="campo-formulario">
                            <label className="etiqueta-formulario">Instrucciones:</label>
                            <textarea
                                className="textarea-formulario"
                                name="instrucciones"
                                value={formData.instrucciones}
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            <label htmlFor="imagen">Imagen:</label>
                            <input
                                type="file"
                                id="imagen"
                                name="imagen"
                                accept="image/*"
                                onChange={handleImageChange}
                            />
                        </div>

                        <button className="btn-guardar" type="submit">Guardar Cambios</button>
                        <button className="btn-cancelar" type="button" onClick={() => setEditando(false)}>
                            Cancelar
                        </button>
                    </form>
                )}

                {borrando && (
                    <div className="modal-overlay">
                        <div className="modal-content">
                            <h3>¿Eliminar receta?</h3>
                            <p>¿Estás seguro de que deseas eliminar esta receta? Esta acción no se puede deshacer.</p>
                            <div className="modal-buttons">
                                <button className="btn-confirmar" onClick={handleDelete}>Sí, eliminar</button>
                                <button className="btn-cancelar" onClick={() => setBorrando(false)}>Cancelar</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>

    );
};

export default EditarRecetaPage;

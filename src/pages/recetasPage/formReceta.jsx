import React, { useState } from 'react';
import './formReceta.css';
import {useNavigate} from "react-router-dom";
import {createRecipe} from "../../services/recetasService.js";

const FormReceta = ({onRecetaAgregada}) => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const [mensajeExito, setMensajeExito] = useState('');
    const [mensajeError, setMensajeError] = useState('');

    // Estado inicial del formulario
    const [formData, setFormData] = useState({
        titulo: '',
        instrucciones: '',
        imagen: '',
    });

    // Función para manejar cambios en los campos de texto
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Función para manejar cambios en la imagen
    const handleImageChange = (e) => {
        setFormData({ ...formData, imagen: e.target.files[0] });
    };

    // Función para manejar el envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!token) {
            alert("Por favor, inicia sesión para guardar la receta.");
            navigate('/login');
            return;
        }
        try {

            const formDataToSend = new FormData();
            formDataToSend.append('titulo', formData.titulo);
            formDataToSend.append('instrucciones', formData.instrucciones);
            formDataToSend.append('imagen', formData.imagen);

            const data = await createRecipe(formDataToSend, token).catch((error) => {
                if (error.response.status === 401) {
                    alert('Por favor, inicia sesión para guardar la receta.');
                    localStorage.removeItem('token');
                    localStorage.removeItem('user');
                    navigate('/login');
                }
            });
            if (onRecetaAgregada) {
                onRecetaAgregada(data);
            }
            setMensajeExito('¡Registro exitoso!');
            setMensajeError(null);
            setFormData({
                titulo: '',
                instrucciones: '',
                imagen: '',
            })

        } catch (error) {
            console.error('Error al guardar receta:', error.response?.data || error.message);
            setMensajeError('Hubo un error al guardar receta. Intenta de nuevo.');
            setMensajeExito(null);
        }



    };

    if (!token) {
        return (
            <div className="form-receta-container">


                <div className="form-receta">
                    <h3>Por favor, inicia sesión para compartir una receta</h3>
                    <button onClick={() => navigate('/login')}>Iniciar Sesión</button>
                </div>

            </div>
        );
    }


    // Renderizado del componente
    return (
        // Contenedor del formulario
        <div className="form-receta-container">
            {/* Mensaje de éxito */}
            {mensajeExito && <div className="mensaje-exito">{mensajeExito}</div>}
            {/* Mensaje de error */}
            {mensajeError && <div className="mensaje-error">{mensajeError}</div>}
            {/* Título del formulario */}
            <h2 className="title">Comparte tu receta</h2>
            {/* Formulario */}
            <form className="form-receta" onSubmit={handleSubmit}>
                {/* Campo de nombre de la receta */}
                <div>
                    <input
                        type="text"
                        id="titulo"
                        name="titulo"
                        placeholder="titulo de la receta"
                        value={formData.titulo}
                        onChange={handleChange}
                        required
                    />
                </div>
                {/* Campo de instrucciones de la receta */}
                <div>
          <textarea
              id="instrucciones"
              name="instrucciones"
              placeholder="Escribe las instrucciones de la receta"
              value={formData.instrucciones}
              onChange={handleChange}
              required
          />
                </div>
                {/* Campo de imagen de la receta */}
                <div>
                    <label htmlFor="imagen">Imagen:</label>
                    <input
                        type="file"
                        id="imagen"
                        name="imagen"
                        accept="image/*"
                        onChange={handleImageChange}
                        required
                    />
                </div>
                {/* Botón de envío */}
                <button type="submit">Guardar Receta</button>
            </form>
        </div>
    );
};


export default FormReceta;
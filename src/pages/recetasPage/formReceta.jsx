import React, { useState } from 'react';
import './formReceta.css';

const FormReceta = ({ onSubmit }) => {
    // Estado inicial del formulario
    const [formData, setFormData] = useState({
        nombre: '',
        instrucciones: '',
        autor: '',
        imagen: null,
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
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Receta guardada exitosamente");
        onSubmit(formData);
    };

    // Renderizado del componente
    return (
        // Contenedor del formulario
        <div className="form-receta-container">
            {/* Título del formulario */}
            <h2 className="title">Comparte tu receta</h2>
            {/* Formulario */}
            <form className="form-receta" onSubmit={handleSubmit}>
                {/* Campo de nombre de la receta */}
                <div>
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        placeholder="Nombre de la receta"
                        value={formData.nombre}
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
                {/* Campo de autor de la receta */}
                <div>
                    <input
                        type="text"
                        id="autor"
                        name="autor"
                        placeholder="Autor de la receta"
                        value={formData.autor}
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
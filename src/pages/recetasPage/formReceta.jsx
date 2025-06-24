import React, { useState } from 'react';
import './formReceta.css';

const FormReceta = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        nombre: '',
        instrucciones: '',
        autor: '',
        imagen: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleImageChange = (e) => {
        setFormData({ ...formData, imagen: e.target.files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Receta guardada exitosamente");
        onSubmit(formData);
    };

    return (
        <div className="form-receta-container">
            <h2 className="title">Comparte tu receta</h2>
            <form className="form-receta" onSubmit={handleSubmit}>
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
                <button type="submit">Guardar Receta</button>
            </form>

        </div>

    );
};

export default FormReceta;
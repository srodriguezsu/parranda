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
        onSubmit(formData);
    };

    return (
        <form className="form-receta" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="nombre">Nombre:</label>
                <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="instrucciones">Instrucciones:</label>
                <textarea
                    id="instrucciones"
                    name="instrucciones"
                    value={formData.instrucciones}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="autor">Autor:</label>
                <input
                    type="text"
                    id="autor"
                    name="autor"
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
    );
};

export default FormReceta;
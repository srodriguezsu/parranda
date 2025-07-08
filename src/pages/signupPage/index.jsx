import React, { useState } from 'react';
import Header from "../../components/header";
import './index.css';
import { signup } from '../../services/authService.js';

const SignUp = () => {
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [mensajeExito, setMensajeExito] = useState('');
    const [mensajeError, setMensajeError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const usuario = {
            titulo: nombre,
            email: correo,
            password: contrasena
        };

        try {
            const data = await signup(usuario);
            console.log('Usuario registrado:', data);
            setMensajeExito('¡Registro exitoso!');
            setMensajeError('');
            setNombre('');
            setCorreo('');
            setContrasena('');
        } catch (error) {
            console.error('Error al registrarse:', error.response?.data || error.message);
            setMensajeError('Hubo un error al registrarse. Intenta de nuevo.');
            setMensajeExito('');
        }
    };

    return (
        <div>
            <Header pageTitle={"Formulario de Registro"} />

            <form onSubmit={handleSubmit} className="signup-form">
                <label htmlFor="nombre">Nombre</label>
                <input
                    type="text"
                    id="nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    required
                />

                <label htmlFor="correo">Correo electrónico</label>
                <input
                    type="email"
                    id="correo"
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                    required
                />

                <label htmlFor="contrasena">Contraseña</label>
                <input
                    type="password"
                    id="contrasena"
                    value={contrasena}
                    onChange={(e) => setContrasena(e.target.value)}
                    required
                />

                <button type="submit">Registrarse</button>

                {/* Mensajes de éxito o error */}
                {mensajeExito && <p className="mensaje-exito">{mensajeExito}</p>}
                {mensajeError && <p className="mensaje-error">{mensajeError}</p>}
            </form>
        </div>
    );
};

export default SignUp;

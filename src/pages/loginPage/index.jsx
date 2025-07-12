import React, { useState } from 'react';
import Header from "../../components/header";
import './index.css';
import {login} from "../../services/authService.js";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const [correo, setCorreo] = useState('');
    const [contrasena, setContrasena] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Aquí puedes hacer una petición POST a tu backend para autenticar
        await login({email: correo, password: contrasena})
            .then(res => {
                localStorage.setItem('token', res.token);
                navigate('/recetas');
            })
            .catch(err => {
                alert('Error al iniciar sesión. Verifica tus credenciales.');
                console.log(err)
            });
        ;
        console.log('Iniciando sesión con:', correo, contrasena);
    };

    return (
        <div>
            <Header pageTitle={"Formulario de Inicio de Sesión"} />

            <form onSubmit={handleSubmit} className="login-form">
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

                <button type="submit">Iniciar Sesión</button>
                <p>¿No tienes cuenta? <a href="#" onClick={() => navigate('/signup')}>Regístrate aquí</a></p>
            </form>
        </div>
    );
};

export default Login;

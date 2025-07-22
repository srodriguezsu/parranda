import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';
import {getSelf} from "../../services/authService.js";

const Index = ({ pageTitle }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    const handleLogout = () => {
        localStorage.removeItem('token');
        setUser(null);
    }


    const handleComeback = () => {
        const path = window.location.pathname;
        if (/^\/receta\/[^/]+$/.test(path)) {
            navigate(-1);
        } else {
            navigate("/");
        }
    }

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token && !user) {
            getSelf(token)
                .then(data => {
                    setUser(data.user);
                })
                .catch(err => {
                    localStorage.removeItem('token');
                });
        }
    }, [])

    return (
        <header className="header-container">
            <button
                onClick={handleComeback}
                className="back-button"
            >
                <i className="fas fa-arrow-left"></i>
            </button>
            <h1>{pageTitle}</h1>
            <div className="user-info">
                {user ? (
                    <div className="user-dropdown">
                        <span
                            className="bienvenidaText user-dropdown__name"
                            tabIndex={0}
                        >
                            Bienvenido, {user.nombre}
                        </span>
                        <button
                            className="btn-logout user-dropdown__logout"
                            onClick={handleLogout}
                            tabIndex={-1}
                        >
                            Cerrar sesión
                        </button>
                    </div>

                )
                    :(
                        <span className="iniciarText" onClick={ () => navigate('/login')}> Iniciar sesion </span>
                    )
                }
            </div>
        </header>
    );
};

export default Index;
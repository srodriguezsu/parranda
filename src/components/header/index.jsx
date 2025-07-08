import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';
import {getSelf} from "../../services/authService.js";

const Index = ({ pageTitle }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(() => {
        const storedUser = localStorage.getItem('user');
        return storedUser ? JSON.parse(storedUser) : null;
    });

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token && !user) {
            getSelf(token)
                .then(data => {
                    console.log("fetching user data", data);
                    localStorage.setItem('user', JSON.stringify(data.user));
                    setUser(data.user);
                })
                .catch(err => {
                    localStorage.removeItem('token');
                    localStorage.removeItem('user');
                });
        }
    }, [])


    return (
        <header className="header-container">
            <button
                onClick={() => navigate('/')}
                className="back-button"
            >
                <i className="fas fa-arrow-left"></i>
            </button>
            <h1>{pageTitle}</h1>
            <div className="user-info">
                {user ? (
                    <span className="bienvenidaText"> Bienvenido, {user.nombre}</span>
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
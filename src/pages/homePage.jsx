import React from 'react';
import './homePage.css';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="main-container">

            <h1 className="main-titulo">Parranda Navideña</h1>

            <img
                className="suelo-image"
                src="/src/assets/suelo.png"
                alt="Suelo"

            />

            <img
                className="arbol-image"
                src="/src/assets/Arbol.svg"
                alt="Arbol de Navidad"

            />

            <img
                className="puerta-image"
                src="/src/assets/Puerta_abierta.svg"
                alt="Puerta Abierta"

            />
            <img
                className="main-image"
                src="/src/assets/Sofa.svg"
                alt="Soafa"

            />
            <img
                className="main-image"
                src="/src/assets/Pesebre.svg"
                alt="Pesebre"

            />
            <img
                className="main-image"
                src="/src/assets/Sonido.svg"
                alt="Sonido"

            />


            <div className="mesa-con-comida">
                <img
                    className="main-image"
                    src="/src/assets/Comida.svg"
                    alt="Comida"

                />
                <img
                    className="main-image"
                    src="/src/assets/Mesa.svg"
                    alt="Mesa"

                />

            </div>


        </div>
    );
};

export default HomePage;
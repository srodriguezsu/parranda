import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

const Index = () => {
    return (
        <div className="grid-layout">
            {/* Sección del Árbol de Navidad */}
            <div className="item arbol">
                <img
                    className="arbol-image"
                    src="/src/assets/Arbol.svg"
                    alt="Arbol de Navidad"
                />
            </div>

            {/* Sección de la Puerta con enlace a Juegos y Rituales */}
            <div className="item puerta">
                <Link to="/juegos-y-rituales" className="puerta-image">
                    <img
                        className="puerta-image"
                        src="/src/assets/Puerta_abierta.svg"
                        alt="Puerta Abierta"
                    />
                </Link>
            </div>

            {/* Sección del Sofá con el título principal */}
            <div className="item sofa">
                <h1 className="main-titulo">Parranda Navideña</h1>
                <img
                    className="sofa-image"
                    src="/src/assets/Sofa.svg"
                    alt="Sofá"
                />
            </div>

            {/* Sección del Pesebre con enlace a Novenas */}
            <div className="item pesebre">
                <Link to="/novenas" className="pesebre-image">
                    <img
                        src="/src/assets/Pesebre.svg"
                        alt="Pesebre"
                    />
                </Link>
            </div>

            {/* Sección del Equipo de Sonido con enlace al Salón de Parrandas */}
            <div className="item sonido">
                <Link to="/salon-de-parrandas" className="sonido-image">
                    <img
                        src="/src/assets/Sonido.svg"
                        alt="Equipo de Sonido"
                    />
                </Link>
            </div>

            {/* Sección de la Mesa con Comida con enlace a Recetas */}
            <div className="item mesa-con-comida">
                <Link to="/recetas" className="comida-image">
                    <img
                        src="/src/assets/Comida.svg"
                        alt="Comida"
                    />
                </Link>
                <img
                    className="mesa-image"
                    src="/src/assets/Mesa.svg"
                    alt="Mesa"
                />
            </div>

            {/* Sección del Café */}
            <div className="item cafe">
                <img
                    className="cafe-image"
                    src="/src/assets/cafe-aguila-roja.svg"
                    alt="Sello rojo"
                />
            </div>
        </div>
    );
};

export default Index;

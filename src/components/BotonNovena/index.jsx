import React from 'react';
import './index.css';

const BotonNovena = ({ texto, onClick, ancho = 'auto' }) => {
    return (
        <button
            className="boton-novena"
            onClick={onClick}
            style={{ width: ancho }}
        >
            {texto}
        </button>
    );
};

export default BotonNovena;

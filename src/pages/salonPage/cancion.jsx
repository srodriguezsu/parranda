import React from 'react';
import './Cancion.css';

const Cancion = ({ nombre, artista, audioSrc}) => {
    return (
        
        <div className="cancion">
            <h3>{nombre}</h3>
            <h3>{artista}</h3>
        </div>
    );
};

export default Cancion;
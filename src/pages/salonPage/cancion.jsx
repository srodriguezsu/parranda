import React from 'react';
import './Cancion.css';

const Cancion = ({ nombre, artista, audioSrc, onSelect }) => {
    const handleClick = () => {
        if (onSelect) onSelect({ nombre, artista, audioSrc });
    };

    return (
        <div className="cancion" onClick={handleClick}>
            <h3>{nombre} - {artista}</h3>
        </div>
    );
};

export default Cancion;
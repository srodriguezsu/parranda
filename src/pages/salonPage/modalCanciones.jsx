import React from 'react';
import Cancion from './cancion.jsx';
import './modal.css';

// Componente ModalCanciones que muestra una lista de canciones en un modal
const ModalCanciones = ({ cancionesIzq, cancionesDer, onSelect }) => {

    // Unimos las canciones de ambos lados en un solo array
  const todas = [...cancionesIzq, ...cancionesDer];

  return (
    <div className="modal-fondo">
      <div className="modal-contenido">
        <button className="btnCerrar" onClick={() => onSelect(null)}>X</button>
        <h2>Lista de Canciones</h2>
        <div className="listaCancionesModal">
            {/* Mapeamos las canciones para crear un componente Cancion por cada una */}
          {todas.map((c, i) => (
            <Cancion
              key={i}
              nombre={c.titulo}
              artista={c.artista}
              audioSrc={c.audioSrc}
              onSelect={() => onSelect(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModalCanciones;
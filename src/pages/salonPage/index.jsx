import React, { useState, useEffect } from 'react';
import Header from "../../components/header/index.jsx";
import Cancion from './cancion.jsx';
import Reproductor from './reproductor';
import ModalCanciones from './modalCanciones.jsx';
import './index.css';

// Listas de canciones, tanto las que irán a la izquierda como a la derecha
const listaCancionesIzq = [
  { nombre: "Cariñito", artista: "Rodolfo Aicardi", audioSrc: "src/assets/canciones/CARIÑITO - RODOLFO AICARDI.mp3" },
  { nombre: "El Ausente", artista: "Pastor López", audioSrc: "src/assets/canciones/EL AUSENTE - PASTOR LOPEZ.mp3" },
  { nombre: "Aguila Roja", artista: "Comercial 3D Navidad", audioSrc: "src/assets/canciones/Aguila Roja comercial 3d Navidad.mp3" },
  { nombre: "Cariñito", artista: "Rodolfo Aicardi", audioSrc: "src/assets/canciones/CARIÑITO - RODOLFO AICARDI.mp3" },
  { nombre: "El Ausente", artista: "Pastor López", audioSrc: "src/assets/canciones/EL AUSENTE - PASTOR LOPEZ.mp3" },
  { nombre: "Aguila Roja", artista: "Comercial 3D Navidad", audioSrc: "src/assets/canciones/Aguila Roja comercial 3d Navidad.mp3" },
  { nombre: "Cariñito", artista: "Rodolfo Aicardi", audioSrc: "src/assets/canciones/CARIÑITO - RODOLFO AICARDI.mp3" },
  { nombre: "El Ausente", artista: "Pastor López", audioSrc: "src/assets/canciones/EL AUSENTE - PASTOR LOPEZ.mp3" },
  { nombre: "Aguila Roja", artista: "Comercial 3D Navidad", audioSrc: "src/assets/canciones/Aguila Roja comercial 3d Navidad.mp3" },
  { nombre: "Cariñito", artista: "Rodolfo Aicardi", audioSrc: "src/assets/canciones/CARIÑITO - RODOLFO AICARDI.mp3" },
];

const listaCancionesDer = [
  { nombre: "Cariñito", artista: "Rodolfo Aicardi", audioSrc: "src/assets/canciones/CARIÑITO - RODOLFO AICARDI.mp3" },
  { nombre: "El Ausente", artista: "Pastor López", audioSrc: "src/assets/canciones/EL AUSENTE - PASTOR LOPEZ.mp3" },
  { nombre: "Aguila Roja", artista: "Comercial 3D Navidad", audioSrc: "src/assets/canciones/Aguila Roja comercial 3d Navidad.mp3" },
  { nombre: "Cariñito", artista: "Rodolfo Aicardi", audioSrc: "src/assets/canciones/CARIÑITO - RODOLFO AICARDI.mp3" },
  { nombre: "El Ausente", artista: "Pastor López", audioSrc: "src/assets/canciones/EL AUSENTE - PASTOR LOPEZ.mp3" },
  { nombre: "Aguila Roja", artista: "Comercial 3D Navidad", audioSrc: "src/assets/canciones/Aguila Roja comercial 3d Navidad.mp3" },
  { nombre: "Cariñito", artista: "Rodolfo Aicardi", audioSrc: "src/assets/canciones/CARIÑITO - RODOLFO AICARDI.mp3" },
  { nombre: "El Ausente", artista: "Pastor López", audioSrc: "src/assets/canciones/EL AUSENTE - PASTOR LOPEZ.mp3" },
  { nombre: "Aguila Roja", artista: "Comercial 3D Navidad", audioSrc: "src/assets/canciones/Aguila Roja comercial 3d Navidad.mp3" },
  { nombre: "Cariñito", artista: "Rodolfo Aicardi", audioSrc: "src/assets/canciones/CARIÑITO - RODOLFO AICARDI.mp3" },  
];

// Lista de canciones combinada para que el reproductor pueda acceder a todas
const listaCanciones = [...listaCancionesIzq, ...listaCancionesDer];

// Componente principal de la página del salón de parrandas
const ParrandasPage = () => {
  // Estado para manejar si la pantalla es móvil o no
  const [esMovil, setEsMovil] = useState(window.innerWidth < 1060);
  const [mostrarModal, setMostrarModal] = useState(false);

  // Efecto para actualizar el estado de esMovil al cambiar el tamaño de la ventana
  useEffect(() => {
    const handleResize = () => setEsMovil(window.innerWidth < 1060);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Estado para manejar el índice de la canción actual
  const [indiceActual, setIndiceActual] = useState(0);
  const cancionActual = listaCanciones[indiceActual];

  return (
    <div>
      <Header pageTitle={"Salón de Parrandas"} />

      <main>
        {/* Si es móvil, mostramos un botón para ver las canciones y el reproductor */}
        {esMovil ? (
          <>
            <button className="btnMostrarCanciones" onClick={() => setMostrarModal(true)}>
              Ver Canciones
            </button>

            {/* Componente reproductor que muestra la canción actual y permite navegar entre canciones */}
            <Reproductor
              cancion={cancionActual}
              siguiente={() => setIndiceActual((prev) => (prev + 1) % listaCanciones.length)}
              anterior={() => setIndiceActual((prev) => (prev - 1 + listaCanciones.length) % listaCanciones.length)}
            />

            {/* Modal que muestra las canciones disponibles */}
            {mostrarModal && (
              <ModalCanciones
                cancionesIzq={listaCancionesIzq}
                cancionesDer={listaCancionesDer}
                onSelect={(i) => {
                  if (i !== null) setIndiceActual(i);
                  setMostrarModal(false);
                }}
              />
            )}
          </>
        ) : (
          <>
            {/* Si no es móvil, mostramos las canciones a la izquierda y derecha del reproductor */}
            <div className="cancionesIzq">
              {listaCancionesIzq.map((c, i) => (
                <Cancion
                  key={`izq-${i}`}
                  nombre={c.nombre}
                  artista={c.artista}
                  audioSrc={c.audioSrc}
                  onSelect={() => setIndiceActual(i)}
                />
              ))}
            </div>

            {/* Componente reproductor que muestra la canción actual y permite navegar entre canciones */}
            <Reproductor
              cancion={cancionActual}
              siguiente={() => setIndiceActual((prev) => (prev + 1) % listaCanciones.length)}
              anterior={() => setIndiceActual((prev) => (prev - 1 + listaCanciones.length) % listaCanciones.length)}
            />

            <div className="cancionesDer">
              {listaCancionesDer.map((c, i) => (
                <Cancion
                  key={`der-${i}`}
                  nombre={c.nombre}
                  artista={c.artista}
                  audioSrc={c.audioSrc}
                  onSelect={() => setIndiceActual(listaCancionesIzq.length + i)}
                />
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default ParrandasPage;

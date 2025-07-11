import React, { useState, useEffect } from 'react';
import Header from "../../components/header/index.jsx";
import Cancion from './cancion.jsx';
import Reproductor from './reproductor';
import ModalCanciones from './modalCanciones.jsx';
import './index.css';
import { getCanciones } from '../../services/salonService';


const ParrandasPage = () => {

  const [loading, setLoading] = useState(true);

  // Estado para manejar si la pantalla es móvil o no
  const [esMovil, setEsMovil] = useState(window.innerWidth < 1060);
  const [mostrarModal, setMostrarModal] = useState(false);

  // Efecto para actualizar el estado de esMovil al cambiar el tamaño de la ventana
  useEffect(() => {
    const handleResize = () => setEsMovil(window.innerWidth < 1060);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 🟢 Estado para guardar las canciones
  const [listaCanciones, setListaCanciones] = useState([]);

  // 🔁 useEffect para cargar las canciones al montar el componente
  useEffect(() => {
  const cargarCanciones = async () => {
    try {
      const data = await getCanciones();
      setListaCanciones(data);
    } catch (error) {
      console.error('Error al obtener canciones:', error);
    } finally {
      setLoading(false); // <- Cuando termina (con éxito o error), quitamos el "cargando"
    }
  };

  cargarCanciones();
  }, []);

  const mitad = Math.ceil(listaCanciones.length / 2);
  const listaCancionesIzq = listaCanciones.slice(0, mitad);
  const listaCancionesDer = listaCanciones.slice(mitad);

  // Estado para manejar el índice de la canción actual
  const [indiceActual, setIndiceActual] = useState(0);
  const cancionActual = listaCanciones[indiceActual];

  if (loading) {
  return (
    <div className="loading">
      <Header pageTitle={"Salón de Parrandas"} />
      <p style={{ textAlign: "center", marginTop: "2rem" }}>Cargando canciones...</p>
    </div>
  );}

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
                  nombre={c.titulo}
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
                  nombre={c.titulo}
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
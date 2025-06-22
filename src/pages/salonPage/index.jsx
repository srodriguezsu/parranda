import React, { useState } from 'react';
import Header from "../../components/header/index.jsx";
import Cancion from './cancion.jsx';
import Reproductor from './reproductor';
import './index.css';

const listaCancionesIzq = [
  { nombre: "Cariñito", artista: "Rodolfo Aicardi", audioSrc: "src/assets/canciones/CARIÑITO - RODOLFO AICARDI.mp3" },
  { nombre: "El Ausente", artista: "Pastor López", audioSrc: "src/assets/canciones/EL AUSENTE - PASTOR LOPEZ.mp3" },
  { nombre: "Cariñito", artista: "Rodolfo Aicardi", audioSrc: "src/assets/canciones/CARIÑITO - RODOLFO AICARDI.mp3" },
  { nombre: "El Ausente", artista: "Pastor López", audioSrc: "src/assets/canciones/EL AUSENTE - PASTOR LOPEZ.mp3" },
  { nombre: "Cariñito", artista: "Rodolfo Aicardi", audioSrc: "src/assets/canciones/CARIÑITO - RODOLFO AICARDI.mp3" },
  { nombre: "El Ausente", artista: "Pastor López", audioSrc: "src/assets/canciones/EL AUSENTE - PASTOR LOPEZ.mp3" },
  { nombre: "Cariñito", artista: "Rodolfo Aicardi", audioSrc: "src/assets/canciones/CARIÑITO - RODOLFO AICARDI.mp3" },
  { nombre: "El Ausente", artista: "Pastor López", audioSrc: "src/assets/canciones/EL AUSENTE - PASTOR LOPEZ.mp3" },
  { nombre: "Cariñito", artista: "Rodolfo Aicardi", audioSrc: "src/assets/canciones/CARIÑITO - RODOLFO AICARDI.mp3" },
  { nombre: "El Ausente", artista: "Pastor López", audioSrc: "src/assets/canciones/EL AUSENTE - PASTOR LOPEZ.mp3" },
  { nombre: "Cariñito", artista: "Rodolfo Aicardi", audioSrc: "src/assets/canciones/CARIÑITO - RODOLFO AICARDI.mp3" },
  { nombre: "El Ausente", artista: "Pastor López", audioSrc: "src/assets/canciones/EL AUSENTE - PASTOR LOPEZ.mp3" },
  { nombre: "Cariñito", artista: "Rodolfo Aicardi", audioSrc: "src/assets/canciones/CARIÑITO - RODOLFO AICARDI.mp3" }
];

const listaCancionesDer = [
  { nombre: "Cariñito", artista: "Rodolfo Aicardi", audioSrc: "src/assets/canciones/CARIÑITO - RODOLFO AICARDI.mp3" },
  { nombre: "El Ausente", artista: "Pastor López", audioSrc: "src/assets/canciones/EL AUSENTE - PASTOR LOPEZ.mp3" },
  { nombre: "Cariñito", artista: "Rodolfo Aicardi", audioSrc: "src/assets/canciones/CARIÑITO - RODOLFO AICARDI.mp3" },
  { nombre: "El Ausente", artista: "Pastor López", audioSrc: "src/assets/canciones/EL AUSENTE - PASTOR LOPEZ.mp3" },
  { nombre: "Cariñito", artista: "Rodolfo Aicardi", audioSrc: "src/assets/canciones/CARIÑITO - RODOLFO AICARDI.mp3" },
  { nombre: "El Ausente", artista: "Pastor López", audioSrc: "src/assets/canciones/EL AUSENTE - PASTOR LOPEZ.mp3" },
  { nombre: "Cariñito", artista: "Rodolfo Aicardi", audioSrc: "src/assets/canciones/CARIÑITO - RODOLFO AICARDI.mp3" },
  { nombre: "El Ausente", artista: "Pastor López", audioSrc: "src/assets/canciones/EL AUSENTE - PASTOR LOPEZ.mp3" },
  { nombre: "Cariñito", artista: "Rodolfo Aicardi", audioSrc: "src/assets/canciones/CARIÑITO - RODOLFO AICARDI.mp3" },
  { nombre: "El Ausente", artista: "Pastor López", audioSrc: "src/assets/canciones/EL AUSENTE - PASTOR LOPEZ.mp3" },
  { nombre: "Cariñito", artista: "Rodolfo Aicardi", audioSrc: "src/assets/canciones/CARIÑITO - RODOLFO AICARDI.mp3" },
  { nombre: "El Ausente", artista: "Pastor López", audioSrc: "src/assets/canciones/EL AUSENTE - PASTOR LOPEZ.mp3" },
  { nombre: "Cariñito", artista: "Rodolfo Aicardi", audioSrc: "src/assets/canciones/CARIÑITO - RODOLFO AICARDI.mp3" }
];

const listaCanciones = [...listaCancionesIzq, ...listaCancionesDer];

const ParrandasPage = () => {
  const [indiceActual, setIndiceActual] = useState(0);
  const cancionActual = listaCanciones[indiceActual];

  return (
    <div>
      <Header pageTitle={"Salón de Parrandas"} />

      <main>
        <div className='cancionesIzq'>
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

        <Reproductor
          cancion={cancionActual}
          siguiente={() => setIndiceActual((prev) => (prev + 1) % listaCanciones.length)}
          anterior={() => setIndiceActual((prev) => (prev - 1 + listaCanciones.length) % listaCanciones.length)}
        />

        <div className='cancionesDer'>
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
      </main>
    </div>
  );
};

export default ParrandasPage;
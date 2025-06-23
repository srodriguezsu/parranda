import React, { useRef, useState, useEffect } from 'react';
import { FaBackward, FaPlay, FaForward, FaPause } from 'react-icons/fa';
import './reproductor.css';

// Componente Reproductor que maneja la reproduccion de canciones
const Reproductor = ({ cancion, siguiente, anterior }) => {
  const audioRef = useRef(null);

    // Estados para manejar la reproduccion, tiempo actual y duracion
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(1);

    // Funcion que permite alternar entre reproducir y pausar la cancion
  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

    // Efecto para actualizar el tiempo actual y la duracion de la cancion
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const setMeta = () => setDuration(audio.duration);

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", setMeta);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", setMeta);
    };
  }, []);

    // Efecto para cargar y reproducir la cancion seleccionada
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load();
      audioRef.current.play();
      setIsPlaying(true);
    }
  }, [cancion]);

    // Formatea el tiempo en minutos y segundos
  const formatTime = (time) => {
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  };

    // Calcula la posicion del cursor en la barra de progreso
  const cursorPos = (currentTime / duration) * 100;

  return (
    <div className='reproductor'>
      <div className='display'>
        <h1 className='nombreCancion'>{cancion.nombre}</h1>
        <h2 className='artista'>{cancion.artista}</h2>
      </div>
      
      <audio ref={audioRef} src={cancion.audioSrc} preload="metadata" />

      <div className='controls'>
        <button className='btnPrev' onClick={anterior}>
            <FaBackward size={45} color="#666439" />
        </button>
        <button className='btnPlay' onClick={togglePlayPause}>
          {isPlaying ? <FaPause size={60} color="#666439" /> : <FaPlay size={60} color="#666439" />}
        </button>
        <button className='btnNext' onClick={siguiente}>
          <FaForward size={45} color="#666439" />
        </button>
      </div>

      <div className='progress-bar'>
        <span>{formatTime(currentTime)}</span>
        <div className="barra">
          <div className="cursor" style={{ left: `${cursorPos}%` }}></div>
        </div>
        <span>{formatTime(duration)}</span>
      </div>

      <div className='parlante'></div>
    </div>
  );
};

export default Reproductor;

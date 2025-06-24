import React from 'react';
import './index.css';
import { useState, useRef } from 'react';
import { FaBackward, FaPlay, FaForward, FaPause } from 'react-icons/fa';

const ReproductorVillancicos = () => {
    // Lista de canciones
    const songs = [
        { title: "Antón", path: "src/assets/villancicos/Antón, Villancico Animado - Mundo Canticuentos.mp3" },
        { title: "Los peces en el rio", path: "src/assets/villancicos/Los Peces En El Río, Villancico Animado - Mundo Canticuentos [yfpBMrJZt1Q].mp3" },
        { title: "Mi burrito sabanero", path: "src/assets/villancicos/Mi Burrito Sabanero, Juana – Mundo Canticuentos.mp3" },
        { title: "Tutaina", path: "src/assets/villancicos/Tutaina, Villancico Animado - Mundo Canticuentos.mp3" },
        { title: "Ven a nuestras almas", path: "src/assets/villancicos/VEN A NUESTRAS ALMAS-  VILLANCICO TRADICIONAL.mp3" },
    ];

    // Estados para controlar la canción actual y si se está reproduciendo
    const [currentSong, setCurrentSong] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    // Referencia al objeto Audio
    const audioRef = useRef(new Audio(songs[currentSong].path));

    // Función para reproducir la canción
    const playSong = () => {
        audioRef.current.play();
        setIsPlaying(true);
    };

    // Función para pausar la canción
    const pauseSong = () => {
        audioRef.current.pause();
        setIsPlaying(false);
    };

    // Función para cambiar de canción
    const skipSong = (direction) => {
        audioRef.current.pause();
        let newIndex = currentSong + direction;

        if (newIndex < 0) {
            newIndex = songs.length - 1; // Ir al final si se pasa al principio
        } else if (newIndex >= songs.length) {
            newIndex = 0; // Ir al principio si se pasa al final
        }

        setCurrentSong(newIndex);
        audioRef.current = new Audio(songs[newIndex].path);
        if (isPlaying) audioRef.current.play(); // Reproducir si estaba reproduciendo
    };

    return (
        <div className="reproductor-container">
            <h3>{songs[currentSong].title}</h3>
            <div className="controles">
                <button className="control-btn" onClick={() => skipSong(-1)}>
                    <FaBackward />
                </button>
                {isPlaying ? (
                    <button className="control-btn play" onClick={pauseSong}>
                        <FaPause />
                    </button>
                ) : (
                    <button className="control-btn play" onClick={playSong}>
                        <FaPlay />
                    </button>
                )}
                <button className="control-btn" onClick={() => skipSong(1)}>
                    <FaForward />
                </button>
            </div>
        </div>
    );
};

export default ReproductorVillancicos;
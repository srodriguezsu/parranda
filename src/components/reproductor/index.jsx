import React, { useState, useEffect, useRef } from 'react';
import './index.css';
import { FaBackward, FaPlay, FaForward, FaPause } from 'react-icons/fa';
import { getVillancicos } from "../../services/villancicosService";

const ReproductorVillancicos = () => {
    const [listaVillancicos, setListaVillancicos] = useState([]);
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [loading, setLoading] = useState(true);
    const audioRef = useRef(null);

    useEffect(() => {
        const cargarVillancicos = async () => {
            try {
                const data = await getVillancicos();
                const villancicosConUrl = data.map(c => ({
                    ...c,
                    url: `http://localhost:3456/uploads/audios/${encodeURIComponent(c.url)}`
                }));
                setListaVillancicos(villancicosConUrl);
            } catch (error) {
                console.error('Error al obtener villancicos:', error);
            } finally {
                setLoading(false);
            }
        };

        cargarVillancicos();
    }, []);

    useEffect(() => {
        if (listaVillancicos.length === 0) return;

        // Reemplazar el audio cuando cambia la canción actual
        if (audioRef.current) {
            audioRef.current.pause();
        }

        audioRef.current = new Audio(listaVillancicos[currentSongIndex].url);
        if (isPlaying) {
            audioRef.current.play();
        }

        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
            }
        };
    }, [currentSongIndex, listaVillancicos]);

    const playSong = () => {
        if (audioRef.current) {
            audioRef.current.play();
            setIsPlaying(true);
        }
    };

    const pauseSong = () => {
        if (audioRef.current) {
            audioRef.current.pause();
            setIsPlaying(false);
        }
    };

    const skipSong = (direction) => {
        if (listaVillancicos.length === 0) return;

        let newIndex = currentSongIndex + direction;

        if (newIndex < 0) {
            newIndex = listaVillancicos.length - 1;
        } else if (newIndex >= listaVillancicos.length) {
            newIndex = 0;
        }

        setCurrentSongIndex(newIndex);
    };

    if (loading) return <p>Cargando villancicos...</p>;
    if (listaVillancicos.length === 0) return <p>No hay villancicos disponibles.</p>;

    return (
        <div className="reproductor-container">
            <h3>{listaVillancicos[currentSongIndex].titulo}</h3>
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
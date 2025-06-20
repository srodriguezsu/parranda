import React from 'react';
import Header from "../../components/header/index.jsx";
import Cancion from './cancion.jsx';
import { FaBackward, FaPlay, FaForward } from 'react-icons/fa';
import './index.css';

const ParrandasPage = () => {
    return (
        <div>
            <Header pageTitle={"Salón de Parrandas"}/>

            <main>
                <div className='cancionesIzq'>
                    <Cancion nombre="Canción 1" artista="Artista 1" audioSrc="ruta/a/audio1.mp3" />
                    <Cancion nombre="Canción 2" artista="Artista 2" audioSrc="ruta/a/audio2.mp3" />
                    <Cancion nombre="Canción 3" artista="Artista 3" audioSrc="ruta/a/audio3.mp3" />
                    
                </div>

                <div className='reproductor'>
                    <div className='display'>
                        <h1 className='nombreCancion'>Nombre canción</h1>
                        <h2 className='artista'>Nombre artista</h2>
                    </div>

                    <div className='controls'>
                        <button className='btnPrev'><FaBackward size={45} color="#666439"/></button>
                        <button className='btnPlay'><FaPlay size={60} color="#666439"/></button>
                        <button className='btnNext'><FaForward size={45} color="#666439"/></button>
                    </div>

                    <div className='progress-bar'>
                        <audio className='audio' controls>
                            <source src="ruta/a/audio.mp3" type="audio/mpeg" />
                            Tu navegador no soporta la reproducción de audio.
                        </audio>
                    </div>
                

                    <div className='parlante'></div>

                </div>

                <div className='cancionesDer'>                    
                    <Cancion nombre="Canción 1" artista="Artista 1" audioSrc="ruta/a/audio1.mp3" />
                    <Cancion nombre="Canción 2" artista="Artista 2" audioSrc="ruta/a/audio2.mp3" />
                    <Cancion nombre="Canción 3" artista="Artista 3" audioSrc="ruta/a/audio3.mp3" />
                </div>

            </main>
        </div>
    );
};

export default ParrandasPage;
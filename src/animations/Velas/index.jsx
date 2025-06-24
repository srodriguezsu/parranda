import React, { useEffect, useState } from 'react';
import './index.css';

const CandleRitual = () => {
    // Estado para controlar las velas encendidas
    const [litCandles, setLitCandles] = useState([]);

    // Colores de las velas
    const candleColors = [
        '#ff0000', // Rojo
        '#ff7f00', // Naranja
        '#d5d52a', // Amarillo
        'rgba(0,255,0,0.65)', // Verde
        '#006fff', // Azul
        '#5f05a2', // Índigo
        '#9400d3'  // Violeta
    ];

    // Efecto para encender las velas
    useEffect(() => {
        // Intervalo para encender las velas
        const interval = setInterval(() => {
            if (litCandles.length === candleColors.length) {
                // Si todas las velas están encendidas, apagarlas después de 1 segundo
                setTimeout(() => setLitCandles([]), 1000);
                return;
            }
            // Encender la siguiente vela
            setLitCandles(prev => [...prev, litCandles.length]);
        }, 800); // Intervalo de 800ms

        // Limpiar el intervalo cuando el componente se desmonta
        return () => clearInterval(interval);
    }, [litCandles]); // Dependencia de litCandles

    // Renderizado del componente
    return (
        <div className="ritual-container">
            <div className="altar">
                {/* Fila superior de velas */}
                <div className="candle-row top-row">
                    {candleColors.slice(0, 4).map((color, index) => (
                        <Candle key={index} color={color} isLit={litCandles.includes(index)} />
                    ))}
                </div>

                {/* Fila inferior de velas */}
                <div className="candle-row bottom-row">
                    {candleColors.slice(4).map((color, index) => (
                        <Candle key={index+4} color={color} isLit={litCandles.includes(index+4)} />
                    ))}
                </div>
            </div>
            <div className="ritual-circle"></div>
        </div>
    );
};

// Componente Candle
const Candle = ({ color, isLit }) => (
    <div className="candle-container" style={{ '--candle-color': color }}>
        <div className="candle">
            <div className="wax"></div>
            <div className="wick"></div>
            <div className={`flame ${isLit ? 'lit' : ''}`}></div>
            <div className="glow"></div>
        </div>
        <div className="candle-holder"></div>
    </div>
);

export default CandleRitual;
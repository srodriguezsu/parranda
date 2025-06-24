import React, { useEffect, useState } from 'react';
import './index.css';

const CandleRitual = () => {
    const [litCandles, setLitCandles] = useState([]);
    const candleColors = [
        '#ff0000', // red
        '#ff7f00', // orange
        '#d5d52a', // yellow
        'rgba(0,255,0,0.65)', // green
        '#006fff', // blue
        '#5f05a2', // indigo
        '#9400d3'  // violet
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            if (litCandles.length === candleColors.length) {
                setTimeout(() => setLitCandles([]), 1000);
                return;
            }
            setLitCandles(prev => [...prev, litCandles.length]);
        }, 800);

        return () => clearInterval(interval);
    }, [litCandles]);

    return (
        <div className="ritual-container">
            <div className="altar">
                {/* Top candles */}
                <div className="candle-row top-row">
                    {candleColors.slice(0, 4).map((color, index) => (
                        <Candle key={index} color={color} isLit={litCandles.includes(index)} />
                    ))}
                </div>

                {/* Bottom candles */}
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
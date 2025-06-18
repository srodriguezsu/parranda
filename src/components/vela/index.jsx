import React, { useState } from 'react';
import './index.css';

const Index = () => {
    const [isLit, setIsLit] = useState(false);

    const toggleCandle = () => {
        setIsLit(!isLit);
    };

    return (
        <div className="candle-container" onClick={toggleCandle}>
            <div className="candle">
                <div className="candle-body"></div>
                <div className="candle-wick"></div>
                {isLit && (
                    <>
                        <div className="flame"></div>
                        <div className="glow"></div>
                        <div className="flicker"></div>
                    </>
                )}
            </div>
            <div className="candle-base"></div>
        </div>
    );
};

export default Index;
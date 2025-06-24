import React, { useState, useEffect } from 'react';
import './index.css';

const Uvas = () => {
    const [currentGrape, setCurrentGrape] = useState(0);
    const [wishVisible, setWishVisible] = useState(false);
    const [showGrapes, setShowGrapes] = useState(true);
    const [animationActive, setAnimationActive] = useState(true);

    useEffect(() => {
        if (!animationActive) return;

        const grapeInterval = setInterval(() => {
            setCurrentGrape(prev => {
                if (prev >= 11) {
                    clearInterval(grapeInterval);
                    setShowGrapes(false);
                    setWishVisible(true);
                    return prev;
                }
                return prev + 1;
            });
        }, 800);

        return () => clearInterval(grapeInterval);
    }, [animationActive]);

    useEffect(() => {
        if (!wishVisible) return;

        const wishTimer = setTimeout(() => {
            setWishVisible(false);
            setShowGrapes(true);
            setCurrentGrape(0);
            setAnimationActive(prev => !prev); // Toggle to trigger restart
        }, 2000);

        return () => clearTimeout(wishTimer);
    }, [wishVisible]);

    // Force restart when animationActive changes
    useEffect(() => {
        if (!animationActive) {
            const restartTimer = setTimeout(() => {
                setAnimationActive(true);
            }, 50);
            return () => clearTimeout(restartTimer);
        }
    }, [animationActive]);

    return (
        <div className="ritual-container">
            <div className="face">
                <div className="eyes">
                    <div className="eye"></div>
                    <div className="eye"></div>
                </div>
                <div className="mouth"></div>
            </div>

            {showGrapes && (
                <div className="grapes-container">
                    {Array.from({ length: 12 }).map((_, index) => (
                        <div
                            key={index}
                            className={`grape ${index <= currentGrape ? 'eaten' : ''}`}
                            style={{ '--i': index }}
                        />
                    ))}
                </div>
            )}

            {wishVisible && (
                <div className="wish-animation">
                    <div className="wish-star">★</div>
                    <div className="wish-text">Deseo pedido</div>
                </div>
            )}
        </div>
    );
};

export default Uvas;
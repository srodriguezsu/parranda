import React, { useState, useEffect } from 'react';
import './index.css';

const Uvas = () => {
    // Estados para controlar la uva actual, la visibilidad del deseo y la animación
    const [currentGrape, setCurrentGrape] = useState(0);
    const [wishVisible, setWishVisible] = useState(false);
    const [showGrapes, setShowGrapes] = useState(true);
    const [animationActive, setAnimationActive] = useState(true);

    // Efecto para animar las uvas
    useEffect(() => {
        if (!animationActive) return; // No hacer nada si la animación no está activa

        // Intervalo para comer las uvas
        const grapeInterval = setInterval(() => {
            setCurrentGrape(prev => {
                if (prev >= 11) {
                    // Si se han comido todas las uvas, detener el intervalo y mostrar el deseo
                    clearInterval(grapeInterval);
                    setShowGrapes(false);
                    setWishVisible(true);
                    return prev;
                }
                return prev + 1; // Comer la siguiente uva
            });
        }, 800); // Intervalo de 800ms

        // Limpiar el intervalo cuando el componente se desmonta
        return () => clearInterval(grapeInterval);
    }, [animationActive]); // Dependencia de animationActive

    // Efecto para mostrar y ocultar el deseo
    useEffect(() => {
        if (!wishVisible) return; // No hacer nada si el deseo no es visible

        // Temporizador para ocultar el deseo y reiniciar la animación
        const wishTimer = setTimeout(() => {
            setWishVisible(false);
            setShowGrapes(true);
            setCurrentGrape(0);
            setAnimationActive(prev => !prev); // Alternar animationActive para reiniciar la animación
        }, 2000); // Temporizador de 2s

        // Limpiar el temporizador cuando el componente se desmonta
        return () => clearTimeout(wishTimer);
    }, [wishVisible]); // Dependencia de wishVisible

    // Efecto para reiniciar la animación
    useEffect(() => {
        if (!animationActive) {
            // Temporizador para reactivar la animación después de un breve retraso
            const restartTimer = setTimeout(() => {
                setAnimationActive(true);
            }, 50); // Temporizador de 50ms

            // Limpiar el temporizador cuando el componente se desmonta
            return () => clearTimeout(restartTimer);
        }
    }, [animationActive]); // Dependencia de animationActive

    // Renderizado del componente
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
        </div>
    );
};

export default Uvas;
import React from 'react';
import './index.css';

const Index = () => {
    return (
        <div className="toast-container">
            <div className="champagne-glass left-glass">
                <div className="glass-top"></div>
                <div className="liquid"></div>
                <div className="bubbles">
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                </div>
                <div className="stem"></div>
                <div className="base"></div>
            </div>

            <div className="champagne-glass right-glass">
                <div className="glass-top"></div>
                <div className="liquid"></div>
                <div className="bubbles">
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                </div>
                <div className="stem"></div>
                <div className="base"></div>
            </div>
        </div>
    );
};

export default Index;
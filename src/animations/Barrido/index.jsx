import React from 'react';
import './index.css';

const Index = () => {


    return (
        <div className="broom-container">
            <div className="broom">
                <div className="broom-handle"></div>
                <div className="broom-head"></div>
            </div>
            <div className="dust-particles">
                {[...Array(20)].map((_, i) => (
                    <div key={i} className="dust-particle" style={{
                        left: `${Math.random() * 100}%`,
                        bottom: `${10 + Math.random() * 20}px`,
                        opacity: Math.random() * 0.7 + 0.3,
                        animationDelay: `${Math.random() * 0.5}s`
                    }}></div>
                ))}
            </div>
        </div>
    );
};

export default Index;
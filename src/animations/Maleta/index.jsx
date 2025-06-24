import React from 'react';
import './index.css';

const WalkingAnimation = () => {
    return (
        <div className="street-scene">
            <div className="person">
                <div className="head"></div>
                <div className="body"></div>
                <div className="arm left-arm"></div>
                <div className="arm right-arm"></div>
                <div className="leg leftleg"></div>
                <div className="leg rightleg"></div>
                <div className="suitcase"></div>
            </div>
        </div>
    );
};

export default WalkingAnimation;
import React from 'react';
import './index.css';

const UnderwearLuck = () => {
    return (
        <div className="underwear-container">
            <div className="underwear">
                <div className="waistband"></div>
                <div className="left-leg"></div>
                <div className="right-leg"></div>
                <div className="glow-effect"></div>
            </div>
            <div className="sparkles">
                {[...Array(8)].map((_, i) => <div key={i} className="sparkle"></div>)}
            </div>
        </div>
    );
};

export default UnderwearLuck;
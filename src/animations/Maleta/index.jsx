import React from 'react';
import './index.css';

const SuitcaseAnimation = () => {
    return (
        <div className="ritual-container">
            <div className="suitcase">
                <div className="handle"></div>
                <div className="body">
                    <div className="pocket"></div>
                    <div className="strap"></div>
                    <div className="wheels">
                        <div className="wheel"></div>
                        <div className="wheel"></div>
                    </div>
                </div>
            </div>
            <div className="ground"></div>
        </div>
    );
};

export default SuitcaseAnimation;
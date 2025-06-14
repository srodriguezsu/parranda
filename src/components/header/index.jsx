import React from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

const Index = ({ pageTitle }) => {
    const navigate = useNavigate();

    return (
        <header className="header-container">
            <button
                onClick={() => navigate('/')}
                className="back-button"
            >
                <i className="fas fa-arrow-left"></i>
            </button>
            <h1>{pageTitle}</h1>
        </header>
    );
};

export default Index;
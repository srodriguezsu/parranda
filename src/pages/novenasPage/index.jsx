import React, { useState } from 'react';
import Header from "../../components/header/index.jsx";
import Vela from "../../components/vela/index.jsx";
import BotonNovena from "../../components/BotonNovena/index.jsx";
import ReproductorVillancicos from '../../components/reproductor/index.jsx';
import oraciones from './oraciones.json';
import './index.css';

const Modal = ({ show, onClose, content }) => {
    if (!show) return null;
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-button" onClick={onClose}>X</button>
                <p>{content}</p>
            </div>
        </div>
    );
};

const Index = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState("");

    const openModal = (key) => {
        const content = oraciones[key] || "Oración no encontrada"; // Fallback if the key is not found
        setModalContent(content);
        setModalOpen(true);
    };

    const closeModal = () => setModalOpen(false);

    return (
        <div>
            <Header pageTitle={"Novenas de Aguinaldos"} />
            <div className="novenas-layout">
                <div className="velas-izquierda-triangulo">
                    <Vela className="vela-centro" />
                    <div className="velas-base">
                        <Vela className="vela-izquierda" />
                        <Vela className="vela-derecha" />
                    </div>
                </div>

                <div className="contenido-central">
                    <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
                        <BotonNovena texto="Oración para todos los días" ancho="90%" onClick={() => openModal("Oración para todos los días")} />
                    </div>

                    <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
                        <BotonNovena texto="Avemaría" onClick={() => openModal("Avemaría")} />
                        <BotonNovena texto="Padrenuestro" onClick={() => openModal("Padrenuestro")} />
                        <BotonNovena texto="Gloria" onClick={() => openModal("Gloria")} />
                    </div>

                    <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
                        {[...Array(9)].map((_, i) => (
                            <BotonNovena key={i} texto={`Día ${i + 1}`} onClick={() => openModal(`Día ${i + 1}`)} />
                        ))}
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <BotonNovena texto="Oración a la Santísima Virgen" ancho="90%" onClick={() => openModal("Oración a la Santísima Virgen")} />
                        <BotonNovena texto="Oración a San José" ancho="90%" onClick={() => openModal("Oración a San José")} />
                        <BotonNovena texto="Oración al Niño Jesús" ancho="90%" onClick={() => openModal("Oración al Niño Jesús")} />
                        <BotonNovena texto="Aspiraciones para la venida del Niño Dios" ancho="90%" onClick={() => openModal("Aspiraciones para la venida del Niño Dios")} />
                    </div>
                </div>

                <div className="columna-derecha">
                    <ReproductorVillancicos />
                    <div className="velas-base">
                        <Vela className="vela-izquierda" />
                        <Vela className="vela-derecha" />
                    </div>
                </div>
            </div>

            <Modal show={modalOpen} onClose={closeModal} content={modalContent} />
        </div>
    );
};

export default Index;

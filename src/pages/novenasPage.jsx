import React from 'react';

import Header from "../components/header";
import Vela from "../components/vela/index.jsx";
import BotonNovena from "../components/BotonNovena/index.jsx";
import ReproductorVillancicos from '../components/reproductor/index.jsx';
import './novenasPage.css';

const NovenasPage = () => {
    return (
        <div>
            <Header pageTitle={"Novenas de Aguinaldos"}/>
            <div className="novenas-layout">
                <div className="velas-izquierda-triangulo">
                    <Vela className="vela-centro" />
                    <div className="velas-base">
                        <Vela className="vela-izquierda" />
                        <Vela className="vela-derecha" />
                    </div>
                </div>

                <div className="contenido-central">
                    <div className="contenido-central">

                        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
                        <BotonNovena texto="Oración para todos los días" ancho="90%" />
                        </div>

                        <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
                            <BotonNovena texto="Avemaría" />
                            <BotonNovena texto="Padrenuestro" />
                            <BotonNovena texto="Gloria" />
                        </div>

                        <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
                        {[...Array(9)].map((_, i) => (
                        <BotonNovena key={i} texto={`Día ${i + 1}`} />
                        ))}
                        </div>

                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <BotonNovena texto="Oración a la Santísima Virgen" ancho="90%" />
                        <BotonNovena texto="Oración a San José" ancho="90%" />
                        <BotonNovena texto="Oración al Niño Jesús" ancho="90%" />
                        <BotonNovena texto="Aspiraciones para la venida del Niño Dios" ancho="90%" />
                        </div>
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

        </div>
    );
};

export default NovenasPage;
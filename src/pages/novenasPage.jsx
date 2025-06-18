import React from 'react';

import Header from "../components/header";
import Vela from "../components/vela/index.jsx";

const NovenasPage = () => {
    return (
        <div>
            <Header pageTitle={"Novenas de Aguinaldos"}/>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center', height: '100vh' }}>
                <Vela/>
                <Vela/>
                <Vela/>

                <Vela/>
                <Vela/>
                <Vela/>
            </div>

        </div>
    );
};

export default NovenasPage;
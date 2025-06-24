import React from 'react';
import Header from "../../components/header/index.jsx";
import './index.css';
import Uvas from "../../animations/Uvas/index.jsx";
import Barrido from "../../animations/Barrido/index.jsx";
import Velas from "../../animations/Velas/index.jsx"
import Amarilla from "../../animations/Amarilla/index.jsx";
import Champagne from "../../animations/champagne/index.jsx";
import Maleta from "../../animations/Maleta/index.jsx";



const rituales = [
  {
    id: 1,
    nombre: "12 Uvas",
    descripcion: "Come 12 uvas a medianoche pidiendo un deseo por cada una.",
    imagen: "/src/assets/frame_1.svg",
    animation: <Uvas />,
  },
  {
    id: 2,
    nombre: "Maleta de viajes",
    descripcion: "Da una vuelta a la cuadra con una maleta para atraer viajes.",
    imagen: "/src/assets/frame_1.svg",
    animation: <Maleta/>,


  },
  {
    id: 3,
    nombre: "Ropa interior amarilla",
    descripcion: "Usa ropa interior amarilla para atraer prosperidad.",
    imagen: "/src/assets/frame_1.svg",
    animation: <Amarilla/>,
  },
  { id: 4,
    nombre: "Barrido de casa",
    descripcion: "Barre la casa para sacar las malas energías del año viejo.",
    imagen: "/src/assets/frame_1.svg",
    animation: <Barrido/>
  },
  { id: 5,
    nombre: "Brindis con champán",        
    descripcion: "Brinda con champán a la medianoche para celebrar el nuevo año.",
    imagen: "/src/assets/frame_1.svg",
    animation: <Champagne/>
  },
  { id: 6,
    nombre: "Velas de colores", 
    descripcion: "Enciende velas de diferentes colores para atraer diversas energías.",
    imagen: "/src/assets/frame_1.svg",
    animation: <Velas/>
  },
  // Agrega más rituales aquí...
];

const index = () => {
    return (
    <div>
      <Header pageTitle={"Juegos y Rituales de Año Nuevo"} />
      <div className="rituales-container">
         <div className="tarjetas-grid">
            {rituales.map((ritual) => (
                <div className="tarjeta-ritual" key={ritual.id}>
                    <div className="lado-izquierdo">
                      {ritual.animation}

                </div>
                  <div className="lado-derecho">

                    <h3>{ritual.nombre}</h3>
                    <p>{ritual.descripcion}</p>
                    <button>Ver más</button>
                  </div>
                </div>
            ))}
         </div>
      </div>
    </div>
    );
};

export default index;
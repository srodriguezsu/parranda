import React from 'react';
import Header from "../components/header/index.jsx";
import './juegosPage.css';

const rituales = [
  {
    id: 1,
    nombre: "12 Uvas",
    descripcion: "Come 12 uvas a medianoche pidiendo un deseo por cada una.",
    imagen: "/src/assets/frame_1.svg",
  },
  {
    id: 2,
    nombre: "Maleta de viajes",
    descripcion: "Da una vuelta a la cuadra con una maleta para atraer viajes.",
    imagen: "/src/assets/frame_1.svg",
  },
  {
    id: 3,
    nombre: "Ropa interior amarilla",
    descripcion: "Usa ropa interior amarilla para atraer prosperidad.",
    imagen: "/src/assets/frame_1.svg",
  },
  { id: 4,
    nombre: "Barrido de casa",
    descripcion: "Barre la casa para sacar las malas energías del año viejo.",
    imagen: "/src/assets/frame_1.svg",
  },
  { id: 5,
    nombre: "Brindis con champán",        
    descripcion: "Brinda con champán a la medianoche para celebrar el nuevo año.",
    imagen: "/src/assets/frame_1.svg",
  },
  { id: 6,
    nombre: "Velas de colores", 
    descripcion: "Enciende velas de diferentes colores para atraer diversas energías.",
    imagen: "/src/assets/frame_1.svg",
  },
  // Agrega más rituales aquí...
];

const JuegosPage = () => {
    return (
    <div>
      <Header pageTitle={"Juegos y Rituales de Año Nuevo"} />
      <div className="rituales-container">
         <div className="tarjetas-grid">
            {rituales.map((ritual) => (
                <div className="tarjeta-ritual" key={ritual.id}>
                    <div className="lado-izquierdo">
                    <img src={ritual.imagen} alt={ritual.nombre} className="imagen-ritual" />
                    <div className="contenedor-boton">
                      <button className="btn-vermas">Ver más</button>
                    </div>
                </div>
                <div className="lado-derecho">
                <h3>{ritual.nombre}</h3>
                 <p>{ritual.descripcion}</p>
                </div>
            </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default JuegosPage;
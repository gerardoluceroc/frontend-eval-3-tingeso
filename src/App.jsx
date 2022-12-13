import { Box } from "@chakra-ui/react";
import { MenuBarra } from "./components/MenuBarra";
import ImageSlider from "./components/ImageSlider";
import Footer  from "./components/Footer";
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
import { MenuPage } from "./components/MenuPage";
import { HomePage } from "./components/HomePage";
import { CarritoPage } from "./components/CarritoPage/CarritoPage";
import { useState } from "react";

export function App() {

  const [largoCarritoDeCompras, setLargoCarritoDeCompras] = useState(0);
  const [carritoDeCompras, setCarritoDeCompras] = useState([]);
  console.log("Estoy en APP y el largo del carrito de compras es:",largoCarritoDeCompras);
  console.log("Estoy en APP y el carrito de compras es:",carritoDeCompras);
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/Menu" element={<MenuPage carritoDeCompras={carritoDeCompras} actualizarLargoCarritoDeCompras={(largo)=>{setLargoCarritoDeCompras(largo)}} actualizarCarritoDeCompras={(carro)=>{setCarritoDeCompras(carro)}} />} />
        <Route path="/Carrito" element={<CarritoPage carritoDeCompras={carritoDeCompras} actualizarLargoCarritoDeCompras={(largo)=>{setLargoCarritoDeCompras(largo)}} actualizarCarritoDeCompras={(carro)=>{setCarritoDeCompras(carro)}}/>}/>
      </Routes>

        
    </>
  );
}



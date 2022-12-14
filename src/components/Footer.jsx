import React from "react";
import "./Footer.css";
import {Link} from "react-router-dom"
import { Box, IconButton, Text } from "@chakra-ui/react";
import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icon'
import { FaPizzaSlice } from "react-icons/fa";

function Footer() {
  const linkStyle = {
    textDecoration: "none",
    color: "black",
  };

  return (
    <div className="footer">
      <div className="footer_row">
        <ul>
          <Link to="/" style={linkStyle}>
            <li>Home</li>
          </Link>
          <Link to="/bikes" style={linkStyle}>
            <li>Servicio Al Cliente</li>
          </Link>
          <Link to="/about" style={linkStyle}>
            <li>Legal</li>
          </Link>
          <Link to="/contact" style={linkStyle}>
            <li>Siguenos</li>
          </Link>
        </ul>
      </div>
      <div className="footer_cols">
        <div className="footer_col">
          <h3>Nuestros Servicios</h3>
          <Link to={"/Menu"}>
          <a>
            Menú
          </a>
          </Link>
          <a href="https://www.google.com/">
            Consultar Pedido
          </a>
          <a href="https://www.google.com/">
            Localizador de Tiendas
          </a>
        </div>
        <div className="footer_col">
          <h3>Ayuda</h3>
          <a href="https://www.google.com/">
            Preguntas Frecuentes
          </a>
          <a href="https://www.google.com/">
            Contacto
          </a>
        </div>
        <div className="footer_col">
          <a href="https://www.google.com/">
            Término y Condiciones
          </a>
          <a href="https://www.google.com/">
            Política de Privacidad
          </a>
        </div>
        <div className="footer_col">
          <h3>Redes Sociales</h3>
          <a href="https://www.facebook.com/">
           Facebook        
          </a>
          <a href="https://twitter.com/">
            Twitter
          </a>
          <a href="https://www.instagram.com/">
            Instagram
          </a>
        </div>
      </div>
      <br />
      <br />
      <p id="footer_cp_text">&copy;pizzahouse.com &nbsp; 2022</p>
    </div>
  );
}

export default Footer;
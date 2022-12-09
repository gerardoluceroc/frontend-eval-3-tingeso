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
          <a href="https://www.trekbikes.com/us/en_US/bikes/mountain-bikes/electric-mountain-bikes/e-caliber/e-caliber-9-9-xx1-axs/p/34710/?colorCode=bluedark_blue">
            Menú
          </a>
          <a href="https://www.trekbikes.com/us/en_US/bikes/mountain-bikes/cross-country-mountain-bikes/supercaliber/supercaliber-9-8-gx-axs/p/35195/?colorCode=red_black">
            Arma Tu Pizza
          </a>
          <a href="https://www.trekbikes.com/us/en_US/bikes/mountain-bikes/trail-mountain-bikes/slash/slash-9-8-gx-axs/p/35192/?colorCode=grey">
            Consultar Pedido
          </a>
          <a href="https://www.trekbikes.com/us/en_US/bikes/road-bikes/performance-road-bikes/%C3%A9monda/%C3%A9monda-slr/%C3%A9monda-slr-6-etap/p/35022/?colorCode=bluedark_red">
            Localizador de Tiendas
          </a>
        </div>
        <div className="footer_col">
          <h3>Ayuda</h3>
          <a href="https://www.trekbikes.com/us/en_US/bikes/hybrid-bikes/electric-hybrid-bikes/verve/verve-2/p/28299/?colorCode=blue">
            Preguntas Frecuentes
          </a>
          <a href="https://www.trekbikes.com/us/en_US/bikes/mountain-bikes/electric-mountain-bikes/e-caliber/e-caliber-9-6/p/34353/?colorCode=greydark_black">
            Contacto
          </a>
        </div>
        <div className="footer_col">
          <a href="https://www.trekbikes.com/us/en_US/bikes/mountain-bikes/cross-country-mountain-bikes/marlin/marlin-5/p/34587/?colorCode=greenvisibility_teal">
            Término y Condiciones
          </a>
          <a href="https://www.trekbikes.com/us/en_US/bikes/mountain-bikes/downhill-mountain-bikes/session/session-9-x01/p/34625/?colorCode=bluedark_blue">
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
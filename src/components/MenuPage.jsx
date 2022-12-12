import { Box, Button, Container, Flex, HStack, Image, Spacer, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Footer from "./Footer";
import { MenuBarra } from "./MenuBarra";
import pizzaAmericanaImagen from "../assets/pizza americana.jpg"
import { BsFillCartFill } from "react-icons/bs";
import { ArmaTuPizzaItem, PizzaAmericana, PizzaBBQChicken, PizzaCampesina, PizzaHawaiana, PizzaMechadaBBQ, PizzaVeganQueen } from "./PizzaItem";
import { CatalogoPizzas } from "./CatalogoPizzas";
import { CatalogoBebidas } from "./CatalogoBebidas";
import { CatalogoSalsas } from "./CatalogoSalsas";
import { CatalogoAcompañamientos } from "./CatalogoAcompañamientos";

export function MenuPage(){
    const [carritoBebidas, setCarritoBebidas] = useState([]);
    const [largoCarritoBebidas, setLargoCarritoBebidas] = useState(carritoBebidas.length);

    const [carritoSalsas, setCarritoSalsas] = useState([]);
    const [largoCarritoSalsas, setLargoCarritoSalsas] = useState(carritoSalsas.length);

    const [carritoAcompañamientos, setCarritoAcompañamientos] = useState([]);
    const [largoCarritoAcompañamientos, setLargoCarritoAcompañamientos] = useState(carritoSalsas.length);

    const [carritoPizzas, setCarritoPizzas] = useState([]);
    const [largoCarritoPizzas, setLargoCarritoPizzas] = useState(carritoPizzas.length);


    return(
        
        <> 
            <Box bgColor={'lightsalmon'}>
                <MenuBarra 
                largoCarritoBebidas = {largoCarritoBebidas} carritoBebidas={carritoBebidas}
                largoCarritoSalsas = {largoCarritoSalsas} carritoSalsas={carritoSalsas}
                largoCarritoAcompañamientos = {largoCarritoAcompañamientos} carritoAcompañamientos ={carritoAcompañamientos}
                largoCarritoPizzas = {largoCarritoPizzas} carritoPizzas ={carritoPizzas}
                />
                <Stack direction={"column"} spacing={5}>
                    <Container maxWidth={"full"}>
                        <Container>
                            <Text 
                            align={"center"}
                            fontSize={"70px"}
                            as='b'
                            color={"ivory"} >
                                Pizzas
                            </Text>
                        </Container>
                        <CatalogoPizzas actualizarCarritoPadre = {(carrito) => {setCarritoPizzas(carrito)}} actualizarLargoCarritoPadre={(largo)=>{setLargoCarritoPizzas(largo)}}/>
                    </Container>

                    <Container maxWidth={"full"}>
                        <Container>
                            <Text 
                            align={"center"}
                            fontSize={"55px"}
                            as='b'
                            color={"ivory"} >
                                Acompañamientos
                            </Text>
                        </Container>
                        <CatalogoAcompañamientos actualizarCarritoPadre = {(carrito) => {setCarritoAcompañamientos(carrito)}} actualizarLargoCarritoPadre={(largo)=>{setLargoCarritoAcompañamientos(largo)}}/>
                    </Container>

                    <Container maxWidth={"full"}>
                        <Container>
                            <Text 
                            align={"center"}
                            fontSize={"70px"}
                            as='b'
                            color={"ivory"} >
                                Salsas
                            </Text>
                        </Container>
                        <CatalogoSalsas actualizarCarritoPadre = {(carrito) => {setCarritoSalsas(carrito)}} actualizarLargoCarritoPadre={(largo)=>{setLargoCarritoSalsas(largo)}}/>
                    </Container>

                    <Container maxWidth={"full"}>
                        <Container>
                            <Text 
                            align={"center"}
                            fontSize={"70px"}
                            as='b'
                            color={"ivory"} >
                                Bebestibles
                            </Text>
                        </Container>
                        <CatalogoBebidas actualizarCarritoPadre = {(carrito) => {setCarritoBebidas(carrito)}} actualizarLargoCarritoPadre={(largo)=>{setLargoCarritoBebidas(largo)}}/>
                    </Container>


                    <Footer/>
                </Stack>
                
            </Box>


        </>
    )
}
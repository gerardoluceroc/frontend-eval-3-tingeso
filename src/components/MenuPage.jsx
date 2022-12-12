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

    useEffect(()=>{
        console.log("Estoy en menu page dentro del use effect, largo carrito bebidas ess:",largoCarritoBebidas);

    },[largoCarritoBebidas])

    const lala = () => {console.log("Estoy en el menu y actualmente el carro esss: ",carritoBebidas);}


    return(
        
        <>  <Button onClick={()=>{lala()}}>LALA</Button>
            <Box bgColor={'lightsalmon'}>
                <MenuBarra largoCarritoBebidas = {largoCarritoBebidas} carritoBebidas={carritoBebidas}/>
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
                        <CatalogoPizzas/>
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
                        <CatalogoAcompañamientos/>
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
                        <CatalogoSalsas/>
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
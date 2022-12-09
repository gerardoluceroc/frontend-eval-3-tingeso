import { Box, Button, Container, Flex, HStack, Image, Spacer, Stack, Text } from "@chakra-ui/react";
import Footer from "./Footer";
import { MenuBarra } from "./MenuBarra";
import pizzaAmericanaImagen from "../assets/pizza americana.jpg"
import { BsFillCartFill } from "react-icons/bs";
import { ArmaTuPizzaItem, PizzaAmericana, PizzaBBQChicken, PizzaCampesina, PizzaHawaiana, PizzaMechadaBBQ, PizzaVeganQueen } from "./PizzaItem";
import { CatalogoPizzas } from "./CatalogoPizzas";
import { CatalogoBebidas } from "./CatalogoBebidas";

export function MenuPage(){
    return(
        
        <>  
            <Box bgColor={'lightsalmon'}>
                <MenuBarra/>
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
                            fontSize={"70px"}
                            as='b'
                            color={"ivory"} >
                                Bebestibles
                            </Text>
                        </Container>
                        <CatalogoBebidas/>
                    </Container>


                </Stack>
                <Footer/>
                
            </Box>


        </>
    )
}
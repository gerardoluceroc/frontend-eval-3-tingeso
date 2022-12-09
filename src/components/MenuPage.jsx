import { Box, Button, Container, Flex, HStack, Image, Spacer, Stack, Text } from "@chakra-ui/react";
import Footer from "./Footer";
import { MenuBarra } from "./MenuBarra";
import pizzaAmericanaImagen from "../assets/pizza americana.jpg"
import { BsFillCartFill } from "react-icons/bs";
import { ArmaTuPizzaItem, PizzaAmericana, PizzaBBQChicken, PizzaCampesina, PizzaHawaiana, PizzaMechadaBBQ, PizzaVeganQueen } from "./PizzaItem";
import { CatalogoPizzas } from "./CatalogoPizzas";

export function MenuPage(){
    return(
        
        <>  
            <Box bgColor={'lightsalmon'}>
                <MenuBarra/>
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
                <Footer/>
                
            </Box>


        </>
    )
}
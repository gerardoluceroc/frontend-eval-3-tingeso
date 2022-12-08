import { Box, Button, Flex, HStack, Image, Spacer, Stack, Text } from "@chakra-ui/react";
import Footer from "./Footer";
import { MenuBarra } from "./MenuBarra";
import pizzaAmericanaImagen from "../assets/pizza americana.jpg"
import { BsFillCartFill } from "react-icons/bs";
import { PizzaAmericana, PizzaBBQChicken } from "./PizzaItem";

export function MenuPage(){
    return(
        
        <>  
            <Box bgColor={'lightsalmon'} h={739}>
                <MenuBarra/>
                <HStack direction='row' spacing={10}>
                    <PizzaAmericana/>
                    <PizzaBBQChicken/>               

            
                    
                    



                </HStack>
                
            </Box>
            <Footer/>
        </>
    )
}
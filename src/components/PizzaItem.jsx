import { Box, Button, Image, Stack, Text } from "@chakra-ui/react";
import { BsFillCartFill } from "react-icons/bs";
import pizzaAmericanaImagen from "../assets/pizza americana.jpg"
import pizzaBBQChickenImagen from "../assets/pizza BBQ Chicken.jpeg"

export function PizzaAmericana(){
    return(

        <Box bgColor={'oldlace'} borderRadius='35px' overflow={"hidden"} borderWidth="10px" borderColor={"ivory"}>
            <Stack spacing={2}>
                <Image 
                    src={pizzaAmericanaImagen} 
                    boxSize="200px"
                    borderRadius='330px'
                    w={"366"}
                    h={"200"}
                />
                <Text 
                align="center"
                fontSize="25px"
                casing={"uppercase"}
                decoration={"underline dotted"}
                >
                    Americana
                </Text>

                <Text 
                align={"center"}
                fontSize={"15px"} >
                    Jamon, Carne, Salchica y Pepperoni
                </Text>

                <Box
                as={Button}
                bgColor={'wheat'}
                color="lightsalmon"
                rightIcon={<BsFillCartFill/>}>
                    <Text fontSize={"20px"}>Agregar</Text>
                </Box>

                        
            </Stack>
         </Box>


    )





    



}

















export function PizzaBBQChicken(){
    return(

        <Box bgColor={'oldlace'} borderRadius='35px' overflow={"hidden"} borderWidth="10px" borderColor={"ivory"}>
            <Stack spacing={2}>
                <Image 
                    src={pizzaBBQChickenImagen} 
                    boxSize="200px"
                    borderRadius='330px'
                    w={"366"}
                    h={"200"}
                />
                <Text 
                align="center"
                fontSize="25px"
                casing={"uppercase"}
                decoration={"underline dotted"}
                >
                    BBQ Chicken
                </Text>

                <Text 
                align={"center"}
                fontSize={"15px"} >
                    Salsa BBQ, Pollo y Cebolla
                </Text>

                <Box
                as={Button}
                bgColor={'wheat'}
                color="lightsalmon"
                rightIcon={<BsFillCartFill/>}>
                    <Text fontSize={"20px"}>Agregar</Text>
                </Box>

                        
            </Stack>
         </Box>


    )





    



}
import { Box, Button, Container, Image, Stack, Text } from "@chakra-ui/react";
import { BsFillCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import pizzaAmericanaImagen from "../assets/pizza americana.jpg"
import pizzaCampesinaImagen from "../assets/pizza campesina.jpg"
import chickenPoppersImagen from "../assets/Chiken Poppers.jpg"
import palitosAjosImagen from "../assets/palitos de ajo y queso.jpg"
import pepsi350Imagen from "../assets/pepsi-350cc-lata.jpg"
import pepsi1LImagen from "../assets/pepsi 1,5.jpeg"

export function PizzaAmericanaHome(props){
    return(
        <Link to={"/Menu"}>
        <Box bgColor={'oldlace'} borderRadius='35px' overflow={"hidden"} borderWidth="10px" borderColor={"ivory"} boxSize="400px">
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
                fontSize="20px"
                casing={"uppercase"}
                decoration={"underline dotted"}
                >
                  Pizza Americana
                </Text>

                <Text 
                
                align="center"
                fontSize="13px"
                >
                  Jamon, Carne, Salchica y Pepperoni
                </Text>

                <Text
                
                align={"center"}
                fontSize={"15px"}
                as={'b'}>
                    $14750
                
                </Text>

                
                <Container>
                <Box
                as={Text}
                
                >
                    <Text align={"center"}>Pide Aquí</Text>
                </Box>
                </Container>

                        
            </Stack>
         </Box>
         </Link>


    )
}






















export function PizzaCampesinaHome(props){
    return(
        <Link to={"/Menu"}>
        <Box bgColor={'oldlace'} borderRadius='35px' overflow={"hidden"} borderWidth="10px" borderColor={"ivory"} boxSize="400px">
            <Stack spacing={2}>
                <Image 
                    
                    src={pizzaCampesinaImagen} 
                    boxSize="200px"
                    borderRadius='330px'
                    w={"366"}
                    h={"200"}
                />
                <Text 
                 
                align="center"
                fontSize="20px"
                casing={"uppercase"}
                decoration={"underline dotted"}
                >
                  Pizza Campesina
                </Text>

                <Text 
                
                align="center"
                fontSize="13px"
                >
                  Pollo, Champiñones, Pimenton
                </Text>

                <Text
                
                align={"center"}
                fontSize={"15px"}
                as={'b'}>
                    $14750
                
                </Text>

                
                <Container>
                <Box
                as={Text}
                
                >
                    <Text align={"center"}>Pide Aquí</Text>
                </Box>
                </Container>

                        
            </Stack>
         </Box>
         </Link>


    )
}



























export function ChickenPoppersHome(props){
    return(
        <Link to={"/Menu"}>
        <Box bgColor={'oldlace'} borderRadius='35px' overflow={"hidden"} borderWidth="10px" borderColor={"ivory"} boxSize="400px">
            <Stack spacing={2}>
                <Image 
                    
                    src={chickenPoppersImagen} 
                    boxSize="200px"
                    borderRadius='330px'
                    w={"366"}
                    h={"200"}
                />
                <Text 
                 
                align="center"
                fontSize="20px"
                casing={"uppercase"}
                decoration={"underline dotted"}
                >
                  Chicken Poppers
                </Text>

                <Text 
                
                align="center"
                fontSize="13px"
                >
                  12 deliciosos trozos de pechuga de pollo apanados, horneados y acompañados de salsa BBQ.
                </Text>

                <Text
                
                align={"center"}
                fontSize={"15px"}
                as={'b'}>
                    $5390
                
                </Text>

                
                <Container>
                <Box
                as={Text}
                
                >
                    <Text align={"center"}>Pide Aquí</Text>
                </Box>
                </Container>

                        
            </Stack>
         </Box>
         </Link>


    )
}







export function PalitosAjoHome(props){
    return(
        <Link to={"/Menu"}>
        <Box bgColor={'oldlace'} borderRadius='35px' overflow={"hidden"} borderWidth="10px" borderColor={"ivory"} boxSize="400px">
            <Stack spacing={2}>
                <Image 
                    
                    src={palitosAjosImagen} 
                    boxSize="200px"
                    borderRadius='330px'
                    w={"366"}
                    h={"200"}
                />
                <Text 
                 
                align="center"
                fontSize="20px"
                casing={"uppercase"}
                decoration={"underline dotted"}
                >
                  Palitos de Ajo
                </Text>

                <Text 
                
                align="center"
                fontSize="13px"
                >
                  10 palitos de pan horneados cubiertos con salsa de ajo y acompañada de 2 cups de salsas de tomate.
                </Text>

                <Text
                
                align={"center"}
                fontSize={"15px"}
                as={'b'}>
                    $4290
                
                </Text>

                
                <Container>
                <Box
                as={Text}
                
                >
                    <Text align={"center"}>Pide Aquí</Text>
                </Box>
                </Container>

                        
            </Stack>
         </Box>
         </Link>


    )
}


































export function Pepsi350Home(props){
    return(
        <Link to={"/Menu"}>
        <Box bgColor={'oldlace'} borderRadius='35px' overflow={"hidden"} borderWidth="10px" borderColor={"ivory"} boxSize="400px">
            <Stack spacing={2}>
                <Image 
                    
                    src={pepsi350Imagen} 
                    boxSize="200px"
                    borderRadius='330px'
                    w={"366"}
                    h={"200"}
                />
                <Text 
                 
                align="center"
                fontSize="20px"
                casing={"uppercase"}
                decoration={"underline dotted"}
                >
                  Pepsi 350 cc
                </Text>


                <Text
                
                align={"center"}
                fontSize={"15px"}
                as={'b'}>
                    $1490
                
                </Text>

                
                <Container>
                <Box
                as={Text}
                
                >
                    <Text align={"center"}>Pide Aquí</Text>
                </Box>
                </Container>

                        
            </Stack>
         </Box>
         </Link>


    )
}
























export function Pepsi1LHome(props){
    return(
        <Link to={"/Menu"}>
        <Box bgColor={'oldlace'} borderRadius='35px' overflow={"hidden"} borderWidth="10px" borderColor={"ivory"} boxSize="400px">
            <Stack spacing={2}>
                <Image 
                    
                    src={pepsi1LImagen} 
                    boxSize="200px"
                    borderRadius='330px'
                    w={"366"}
                    h={"200"}
                />
                <Text 
                 
                align="center"
                fontSize="20px"
                casing={"uppercase"}
                decoration={"underline dotted"}
                >
                  Pepsi 1.5 L
                </Text>


                <Text
                
                align={"center"}
                fontSize={"15px"}
                as={'b'}>
                    $2990
                
                </Text>

                
                <Container>
                <Box
                as={Text}
                
                >
                    <Text align={"center"}>Pide Aquí</Text>
                </Box>
                </Container>

                        
            </Stack>
         </Box>
         </Link>


    )
}















































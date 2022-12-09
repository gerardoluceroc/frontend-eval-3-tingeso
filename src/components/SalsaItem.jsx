import { Box, Button, Image, Stack, Text } from "@chakra-ui/react";
import { BsFillCartFill } from "react-icons/bs";
import salsaBBQImagen from "../assets/salsa bbq.jpg"
import salsaGarlicImagen from "../assets/salsa ajo garlic.jpg"
import salsaTomateImagen from "../assets/salsa tomate.jpg"
import salsaMielImagen from "../assets/salsa miel.jpg"

export function SalsaBBQ(){
    return(

        <Box bgColor={'oldlace'} borderRadius='35px' overflow={"hidden"} borderWidth="10px" borderColor={"ivory"} boxSize="400px">
            <Stack spacing={2}>
                <Image 
                    src={salsaBBQImagen} 
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
                  Salsa BBQ
                </Text>

                <Text 
                align="center"
                fontSize="13px"
                >
                  Combinación dulce y ahumada, complemento perfecto para disfrutar tus Chicken Poppers.
                </Text>

                <Text
                align={"center"}
                fontSize={"15px"}
                as={'b'}>
                    $600
                
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























export function SalsaGarlic(){
    return(

        <Box bgColor={'oldlace'} borderRadius='35px' overflow={"hidden"} borderWidth="10px" borderColor={"ivory"} boxSize="400px">
            <Stack spacing={2}>
                <Image 
                    src={salsaGarlicImagen} 
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
                  Salsa Garlic
                </Text>

                <Text 
                align="center"
                fontSize="13px"
                >
                  Salsa de ajo cremosa y con un toque de sabor inigualable es el complemento perfecto para cualquiera de nuestra pizzas.
                </Text>

                <Text
                align={"center"}
                fontSize={"15px"}
                as={'b'}>
                    $600
                
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
























export function SalsaMiel(){
    return(

        <Box bgColor={'oldlace'} borderRadius='35px' overflow={"hidden"} borderWidth="10px" borderColor={"ivory"} boxSize="400px">
            <Stack spacing={2}>
                <Image 
                    src={salsaMielImagen} 
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
                  Salsa Miel
                </Text>

                <Text 
                align="center"
                fontSize="13px"
                >
                  Deliciosa salsa con sabor a miel.
                </Text>

                <Text
                align={"center"}
                fontSize={"15px"}
                as={'b'}>
                    $600
                
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


























export function SalsaTomate(){
    return(

        <Box bgColor={'oldlace'} borderRadius='35px' overflow={"hidden"} borderWidth="10px" borderColor={"ivory"} boxSize="400px">
            <Stack spacing={2}>
                <Image 
                    src={salsaTomateImagen} 
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
                  Salsa de Tomate
                </Text>

                <Text 
                align="center"
                fontSize="13px"
                >
                  Nuestra salsa de tomate natural combina a la perfección con los palitos de ajo.
                </Text>

                <Text
                align={"center"}
                fontSize={"15px"}
                as={'b'}>
                    $600
                
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





































































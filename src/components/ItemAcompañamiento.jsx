import { Box, Button, Image, Stack, Text } from "@chakra-ui/react";
import { BsFillCartFill } from "react-icons/bs";
import palitosAjosImagen from "../assets/palitos de ajo y queso.jpg"
import cheesyVeggiesImagen from "../assets/Cheesy Veggies.jpg"
import alitasPolloImagen from "../assets/Alitas de Pollo.jpg"
import chickenPoppersImagen from "../assets/Chiken Poppers.jpg"

export function PalitosAjo(){
    return(

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
                  Palitos de Ajo y Queso
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
                    $4.290
                
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
























export function CheesyVeggies(){
    return(

        <Box bgColor={'oldlace'} borderRadius='35px' overflow={"hidden"} borderWidth="10px" borderColor={"ivory"} boxSize="400px">
            <Stack spacing={2}>
                <Image 
                    src={cheesyVeggiesImagen} 
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
                  Cheesy Veggies
                </Text>

                <Text 
                align="center"
                fontSize="13px"
                >
                  Tus palitos de queso mozzarella de siempre, ahora acompañados de un vegetal o shot a tu elección
                </Text>

                <Text
                align={"center"}
                fontSize={"15px"}
                as={'b'}>
                    $5.690
                
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






















export function ChickenPoppers(){
    return(

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
                    $5.390
                
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




















export function AlitasPollo(){
    return(

        <Box bgColor={'oldlace'} borderRadius='35px' overflow={"hidden"} borderWidth="10px" borderColor={"ivory"} boxSize="400px">
            <Stack spacing={2}>
                <Image 
                    src={alitasPolloImagen} 
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
                  Alitas de Pollo
                </Text>

                <Text 
                align="center"
                fontSize="13px"
                >
                  8 deliciosas alitas de pollo americanas acompañadas de cups de salsa BBQ.
                </Text>

                <Text
                align={"center"}
                fontSize={"15px"}
                as={'b'}>
                    $5.290
                
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



















































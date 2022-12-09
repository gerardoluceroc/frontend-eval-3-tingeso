import { Box, Button, Image, Stack, Text } from "@chakra-ui/react";
import { BsFillCartFill } from "react-icons/bs";
import pepsi350Imagen from "../assets/pepsi-350cc-lata.jpg"
import pepsi1LImagen from "../assets/pepsi 1,5.jpeg"
import pepsiLight350Imagen from "../assets/pepsi light 350.png"
import pepsiLight1LImagen from "../assets/pepsi light 1,5.jpg"
import fanta350Imagen from "../assets/FANTA-350CC-LATA.jpg"
import fanta1LImagen from "../assets/fanta 1,5.jpg"
import Cachantun500SinGasImagen from "../assets/cachantun 500 sin gas.jpg"
import Cachantun500ConGasImagen from "../assets/cachantun 500 con gas.jpg"
import JugoWatts1LDuraznoImagen from "../assets/watts-durazno 1,5.jpeg"
import JugoWatts1LPiñaImagen from "../assets/watts-piña-1,5.png"

export function Pepsi350(){
    return(

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
                    $1.490
                
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
































export function Pepsi1L(){
    return(

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
                    $2.990
                
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

















export function PepsiLight350(){
    return(

        <Box bgColor={'oldlace'} borderRadius='35px' overflow={"hidden"} borderWidth="10px" borderColor={"ivory"} boxSize="400px">
            <Stack spacing={2}>
                <Image 
                    src={pepsiLight350Imagen} 
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
                    Pepsi Light 350 cc
                </Text>

                <Text
                align={"center"}
                fontSize={"15px"}
                as={'b'}>
                    $1.490
                
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



























export function PepsiLight1L(){
    return(

        <Box bgColor={'oldlace'} borderRadius='35px' overflow={"hidden"} borderWidth="10px" borderColor={"ivory"} boxSize="400px">
            <Stack spacing={2}>
                <Image 
                    src={pepsiLight1LImagen} 
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
                    Pepsi Light 1.5 L
                </Text>

                <Text
                align={"center"}
                fontSize={"15px"}
                as={'b'}>
                    $2.990
                
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
















export function Fanta350(){
    return(

        <Box bgColor={'oldlace'} borderRadius='35px' overflow={"hidden"} borderWidth="10px" borderColor={"ivory"} boxSize="400px">
            <Stack spacing={2}>
                <Image 
                    src={fanta350Imagen} 
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
                    Fanta 350 cc
                </Text>

                <Text
                align={"center"}
                fontSize={"15px"}
                as={'b'}>
                    $1.490
                
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

















export function Fanta1L(){
    return(

        <Box bgColor={'oldlace'} borderRadius='35px' overflow={"hidden"} borderWidth="10px" borderColor={"ivory"} boxSize="400px">
            <Stack spacing={2}>
                <Image 
                    src={fanta1LImagen} 
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
                    Fanta 1.5 L
                </Text>

                <Text
                align={"center"}
                fontSize={"15px"}
                as={'b'}>
                    $2.990
                
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




















export function Cachantun500SinGas(){
    return(

        <Box bgColor={'oldlace'} borderRadius='35px' overflow={"hidden"} borderWidth="10px" borderColor={"ivory"} boxSize="400px">
            <Stack spacing={2}>
                <Image 
                    src={Cachantun500SinGasImagen} 
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
                    Cachantun Sin Gas 500 cc 
                </Text>

                <Text
                align={"center"}
                fontSize={"15px"}
                as={'b'}>
                    $1.190
                
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

























export function Cachantun500ConGas(){
    return(

        <Box bgColor={'oldlace'} borderRadius='35px' overflow={"hidden"} borderWidth="10px" borderColor={"ivory"} boxSize="400px">
            <Stack spacing={2}>
                <Image 
                    src={Cachantun500ConGasImagen} 
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
                    Cachantun Con Gas 500 cc 
                </Text>

                <Text
                align={"center"}
                fontSize={"15px"}
                as={'b'}>
                    $1.190
                
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























export function JugoWatts1LDurazno(){
    return(

        <Box bgColor={'oldlace'} borderRadius='35px' overflow={"hidden"} borderWidth="10px" borderColor={"ivory"} boxSize="400px">
            <Stack spacing={2}>
                <Image 
                    src={JugoWatts1LDuraznoImagen} 
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
                  Jugo Watts 1.5 L Durazno 
                </Text>

                <Text
                align={"center"}
                fontSize={"15px"}
                as={'b'}>
                    $2.290
                
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


















export function JugoWatts1LPiña(){
    return(

        <Box bgColor={'oldlace'} borderRadius='35px' overflow={"hidden"} borderWidth="10px" borderColor={"ivory"} boxSize="400px">
            <Stack spacing={2}>
                <Image 
                    src={JugoWatts1LPiñaImagen} 
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
                  Jugo Watts 1.5 L Piña
                </Text>

                <Text
                align={"center"}
                fontSize={"15px"}
                as={'b'}>
                    $2.290
                
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





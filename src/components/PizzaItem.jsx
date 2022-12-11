import { Box, Button, Container, Flex, HStack, Image, Link, LinkBox, LinkOverlay, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, StackDivider, Text, useDisclosure, useRadio, useRadioGroup } from "@chakra-ui/react";
import { BsFillCartFill } from "react-icons/bs";
import { FaPizzaSlice } from "react-icons/fa";
import pizzaAmericanaImagen from "../assets/pizza americana.jpg"
import pizzaBBQChickenImagen from "../assets/pizza BBQ Chicken.jpeg"
import pizzaCampesinaImagen from "../assets/pizza campesina.jpg"
import pizzaHawaianaImagen from "../assets/pizza hawaina.jpg"
import pizzaMechadaBBQImagen from "../assets/pizza mechada BBQ.png"
import pizzaVeganQueenImagen from "../assets/pizza vegan queen.png"
import pizzaPersonalizadaImagen from "../assets/pizza personalizada.png"
import PizzaCordilleranaImagen from "../assets/pizza la cordillerana.jpg"
import pizzaSuperPepperoniImagen from "../assets/pizza super pepperoni.jpg"
import { OpcionesBotones } from "./ButtonOptionGroup";

export function PizzaAmericana(){
    return(

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

                <Text
                align={"center"}
                fontSize={"15px"}
                as={'b'}>
                    $14.750    
                </Text>

                <Box
                as={Button}
                onClick={()=>{const textoBoton = document.getElementById("textoBotonPizzaAmericana");
                            textoBoton.textContent="Agregado Al Carrito!";
                            setTimeout(()=>{textoBoton.textContent="Agregar"}, 700)}}
                bgColor={'wheat'}
                color="lightsalmon"
                rightIcon={<BsFillCartFill/>}>
                    <Text id="textoBotonPizzaAmericana" fontSize={"20px"}>Agregar</Text>
                </Box>

                        
            </Stack>
         </Box>


    )





    



}

















export function PizzaBBQChicken(){
    return(

        <Box bgColor={'oldlace'} borderRadius='35px' overflow={"hidden"} borderWidth="10px" borderColor={"ivory"} boxSize="400px">
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
                    Salsa BBQ, Pollo y Cebolla Morada
                </Text>

                <Text
                align={"center"}
                fontSize={"15px"}
                as={'b'}>
                    $14.750
                
                </Text>

                <Box
                as={Button}
                onClick={()=>{const textoBoton = document.getElementById("textoBotonPizzaBBQChicken");
                            textoBoton.textContent="Agregado Al Carrito!";
                            setTimeout(()=>{textoBoton.textContent="Agregar"}, 700)}}
                bgColor={'wheat'}
                color="lightsalmon"
                rightIcon={<BsFillCartFill/>}>
                    <Text id="textoBotonPizzaBBQChicken" fontSize={"20px"}>Agregar</Text>
                </Box>

                        
            </Stack>
         </Box>


    )





    



}



































export function PizzaCampesina(){
    return(

        <Box bgColor={'oldlace'} borderRadius='35px' overflow={"hidden"} borderWidth="10px" borderColor={"ivory"} boxSize="400px">
            <Stack spacing={2}>
                <Image 
                    src={pizzaCampesinaImagen} 
                    boxSize="200px"
                    borderRadius='50px'
                    w={"366"}
                    h={"200"}
                    
                />
                <Text 
                align="center"
                fontSize="25px"
                casing={"uppercase"}
                decoration={"underline dotted"}
                >
                    Campesina
                </Text>

                <Text 
                align={"center"}
                fontSize={"15px"} >
                    Pollo, Champiñones, Pimenton
                </Text>

                <Text
                align={"center"}
                fontSize={"15px"}
                as={'b'}>
                    $14.750
                
                </Text>

                <Box
                as={Button}
                onClick={()=>{const textoBoton = document.getElementById("textoBotonPizzaCampesina");
                            textoBoton.textContent="Agregado Al Carrito!";
                            setTimeout(()=>{textoBoton.textContent="Agregar"}, 700)}}
                bgColor={'wheat'}
                color="lightsalmon"
                rightIcon={<BsFillCartFill/>}>
                    <Text id="textoBotonPizzaCampesina" fontSize={"20px"}>Agregar</Text>
                </Box>

                        
            </Stack>
         </Box>


    )

}





export function PizzaHawaiana(){
    return(

        <Box bgColor={'oldlace'} borderRadius='35px' overflow={"hidden"} borderWidth="10px" borderColor={"ivory"} boxSize="400px">
            <Stack spacing={2}>
                <Image 
                    src={pizzaHawaianaImagen} 
                    boxSize="200px"
                    borderRadius='300px'
                    w={"366"}
                    h={"200"}
                    
                />
                <Text 
                align="center"
                fontSize="25px"
                casing={"uppercase"}
                decoration={"underline dotted"}
                >
                    Hawaiana
                </Text>

                <Text 
                align={"center"}
                fontSize={"15px"} >
                    Pollo, Jamon, Piña
                </Text>

                <Text
                align={"center"}
                fontSize={"15px"}
                as={'b'}>
                    $12.750
                
                </Text>

                <Box
                as={Button}
                onClick={()=>{const textoBoton = document.getElementById("textoBotonPizzaHawaiana");
                            textoBoton.textContent="Agregado Al Carrito!";
                            setTimeout(()=>{textoBoton.textContent="Agregar"}, 700)}}
                bgColor={'wheat'}
                color="lightsalmon"
                rightIcon={<BsFillCartFill/>}>
                    <Text id="textoBotonPizzaHawaiana" fontSize={"20px"}>Agregar</Text>
                </Box>

                        
            </Stack>
         </Box>


    )

}































export function PizzaMechadaBBQ(){
    return(

        <Box bgColor={'oldlace'} borderRadius='35px' overflow={"hidden"} borderWidth="10px" borderColor={"ivory"} boxSize="400px">
            <Stack spacing={2}>
                <Image 
                    src={pizzaMechadaBBQImagen} 
                    boxSize="200px"
                    borderRadius='300px'
                    w={"366"}
                    h={"200"}
                    
                />
                <Text 
                align="center"
                fontSize="25px"
                casing={"uppercase"}
                decoration={"underline dotted"}
                >
                    Mechada BBQ
                </Text>

                <Text 
                align={"center"}
                fontSize={"15px"} >
                    Carne Mechada, Tomate, Cebolla
                </Text>

                <Text
                align={"center"}
                fontSize={"15px"}
                as={'b'}>
                    $15.750
                
                </Text>

                <Box
                as={Button}
                onClick={()=>{const textoBoton = document.getElementById("textoBotonPizzaMechadaBBQ");
                            textoBoton.textContent="Agregado Al Carrito!";
                            setTimeout(()=>{textoBoton.textContent="Agregar"}, 700)}}
                bgColor={'wheat'}
                color="lightsalmon"
                rightIcon={<BsFillCartFill/>}>
                    <Text id="textoBotonPizzaMechadaBBQ" fontSize={"20px"}>Agregar</Text>
                </Box>

                        
            </Stack>
         </Box>


    )

}


























export function PizzaVeganQueen(){
    return(

        <Box bgColor={'oldlace'} borderRadius='35px' overflow={"hidden"} borderWidth="10px" borderColor={"ivory"} boxSize="400px">
            <Stack spacing={2}>
                <Image 
                    src={pizzaVeganQueenImagen} 
                    boxSize="200px"
                    borderRadius='300px'
                    w={"366"}
                    h={"200"}
                    
                />
                <Text 
                align="center"
                fontSize="25px"
                casing={"uppercase"}
                decoration={"underline dotted"}
                >
                    Vegan Queen
                </Text>

                <Text 
                align={"center"}
                fontSize={"15px"} >
                    Champiñón, Pimenton, Cebolla Morada, Choclo,Tomate y Aceitunas
                </Text>

                <Text
                align={"center"}
                fontSize={"15px"}
                as={'b'}>
                    $14.750
                
                </Text>

                <Box
                as={Button}
                onClick={()=>{const textoBoton = document.getElementById("textoBotonPizzaVeganQueen");
                            textoBoton.textContent="Agregado Al Carrito!";
                            setTimeout(()=>{textoBoton.textContent="Agregar"}, 700)}}
                bgColor={'wheat'}
                color="lightsalmon"
                rightIcon={<BsFillCartFill/>}>
                    <Text id="textoBotonPizzaVeganQueen" fontSize={"20px"}>Agregar</Text>
                </Box>

                        
            </Stack>
         </Box>


    )

}














export function PizzaCordillerana(){
    return(

        <Box bgColor={'oldlace'} borderRadius='35px' overflow={"hidden"} borderWidth="10px" borderColor={"ivory"} boxSize="400px">
            <Stack spacing={2}>
                <Image 
                    src={PizzaCordilleranaImagen} 
                    boxSize="200px"
                    borderRadius='300px'
                    w={"366"}
                    h={"200"}
                    
                />
                <Text 
                align="center"
                fontSize="25px"
                casing={"uppercase"}
                decoration={"underline dotted"}
                >
                    La Cordillerana
                </Text>

                <Text 
                align={"center"}
                fontSize={"15px"} >
                    Delicioso chorizo, carne, pimentón y cebolla
                </Text>

                <Text
                align={"center"}
                fontSize={"15px"}
                as={'b'}>
                    $14.750
                
                </Text>

                <Box
                as={Button}
                onClick={()=>{const textoBoton = document.getElementById("textoBotonPizzaCordillerana");
                            textoBoton.textContent="Agregado Al Carrito!";
                            setTimeout(()=>{textoBoton.textContent="Agregar"}, 700)}}
                bgColor={'wheat'}
                color="lightsalmon"
                rightIcon={<BsFillCartFill/>}>
                    <Text id="textoBotonPizzaCordillerana" fontSize={"20px"}>Agregar</Text>
                </Box>

                        
            </Stack>
         </Box>


    )

}





















export function PizzaSuperPepperoni(){
    return(

        <Box bgColor={'oldlace'} borderRadius='35px' overflow={"hidden"} borderWidth="10px" borderColor={"ivory"} boxSize="400px">
            <Stack spacing={2}>
                <Image 
                    src={pizzaSuperPepperoniImagen} 
                    boxSize="200px"
                    borderRadius='300px'
                    w={"366"}
                    h={"200"}
                    
                />
                <Text 
                align="center"
                fontSize="25px"
                casing={"uppercase"}
                decoration={"underline dotted"}
                >
                    Super Pepperoni
                </Text>

                <Text 
                align={"center"}
                fontSize={"15px"} >
                    Extra queso mozzarella, doble pepperoni.
                </Text>

                <Text
                align={"center"}
                fontSize={"15px"}
                as={'b'}>
                    $14.750
                
                </Text>

                <Box
                as={Button}
                onClick={()=>{const textoBoton = document.getElementById("textoBotonPizzaSuperPepperoni");
                            textoBoton.textContent="Agregado Al Carrito!";
                            setTimeout(()=>{textoBoton.textContent="Agregar"}, 700)}}
                bgColor={'wheat'}
                color="lightsalmon"
                rightIcon={<BsFillCartFill/>}>
                    <Text id="textoBotonPizzaSuperPepperoni" fontSize={"20px"}>Agregar</Text>
                </Box>

                        
            </Stack>
         </Box>


    )

}

































export function ArmaTuPizzaItem(){

    const { isOpen, onOpen, onClose } = useDisclosure();

    const opcionesTamañoMasa = ["Familiar", "Extra Grande", "Mediana"]
    const opcionesTipoMasa = ["Tradicional", "Normal", "Delgada"]
    const opcionesSalsaBase = ["Salsa Regular", "Poca Salsa", "Extra Salsa"]
    const opcionesCantidadSalsa = ["Salsa Tomate", "Salsa BBQ", "Salsa Alfredo", "Sin Salsa"]
    const opcionesCantidadQuedo = ["Mozzarella Base", "Sin Mozzarella", "Poca Mozzarella", "Extra Mozzarella"]
    const opcionesShot = ["Shot de BBQ", "Shot de Pesto", "Sin Shots"]
    const opcionesCarnes = ["Carne", "Carne Mechada", "Pepperoni", "Salchicha", "Jamón", "Pollo", "Tocino"]
    const opcionesVegetales = ["Aceitunas", "Choclo", "Piña", "Cebolla", "Pimentón", "Tomate", "Champiñones"]
    const opcionesTiposQueso = ["Gouda", "Mozzarella"]

    


    
    
    return(
        
        <Box bgColor={'oldlace'} borderRadius='35px' overflow={"hidden"} borderWidth="10px" borderColor={"ivory"} boxSize="400px">

            <Modal closeOnOverlayClick={false} size={"3xl"}isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />

                <ModalContent>
                    <Stack direction={"column"} spacing={6}>
                        <ModalHeader fontSize={"35"}>Arma Tu Pizza</ModalHeader>
                    
                        <ModalCloseButton />
                    
                        <ModalBody pb={8}>
                            <Stack direction={"column"} spacing={5} divider={<StackDivider borderColor='gray.200' />}>
                                <Box>
                                    <Stack direction={"column"} spacing={3}>
                                        <Text
                                        as='b'
                                        fontSize={"md"}>
                                            Tamaño Y Tipo de Pizzaa
                                        </Text>
                                        <OpcionesBotones id="IDOpcionesTamañoMasa" opciones={opcionesTamañoMasa}/>
                                        {console.log("probando el console.log ", OpcionesBotones.options)}
                                        <OpcionesBotones opciones={opcionesTipoMasa}/>

                                        <Text
                                        as='b'
                                        fontSize={"md"}>
                                            Salsa Base
                                        </Text>                                    
                                        <OpcionesBotones opciones={opcionesSalsaBase}/>

                                        <Text
                                        as='b'
                                        fontSize={"md"}>
                                            Cantidad de Salsa
                                        </Text>                                    
                                        <OpcionesBotones opciones={opcionesCantidadSalsa}/>

                                        <Text
                                        as='b'
                                        fontSize={"md"}>
                                            Cantidad de Queso
                                        </Text>                                    
                                        <OpcionesBotones opciones={opcionesCantidadQuedo}/>
                                    </Stack>
                                </Box>


                                <Box>
                                    <Stack direction={"column"} spacing={3}>

                                        <Text
                                            as='b'
                                            fontSize={"md"}>
                                                Shots
                                        </Text>                                    
                                        <OpcionesBotones opciones={opcionesShot}/>

                                        <Text
                                        as='b'
                                        fontSize={"md"}>
                                            Carnes
                                        </Text>                                    
                                        <OpcionesBotones opciones={opcionesCarnes}/>

                                        <Text
                                        as='b'
                                        fontSize={"md"}>
                                            Vegetales
                                        </Text>                                    
                                        <OpcionesBotones opciones={opcionesVegetales}/>

                                        <Text
                                        as='b'
                                        fontSize={"md"}>
                                            Tipo de Queso
                                        </Text>                                    
                                        <OpcionesBotones opciones={opcionesTiposQueso}/>

                                    </Stack>

                            


                                </Box>

                            </Stack>
                            
                        </ModalBody>
                    </Stack>

                    <ModalFooter>
                        <Button rightIcon={<BsFillCartFill/>} bgColor={"tomato"} color="oldlace" mr={3} colorScheme={"orange"}>
                            Agregar
                        </Button>
                        <Button colorScheme={"gray"} bgColor={"gray"} color="oldlace" onClick={onClose}>Cancelar</Button>
                    </ModalFooter>
                </ModalContent>
                
           </Modal>


            <Stack spacing={2}>
                <Image 
                    src={pizzaPersonalizadaImagen} 
                    boxSize="200px"
                    borderRadius='300px'
                    w={"366"}
                    h={"200"}
                    
                />
                <Text 
                align="center"
                fontSize="25px"
                casing={"uppercase"}
                decoration={"underline dotted"}
                >
                    Personalizada
                </Text>

                <Text 
                align={"center"}
                fontSize={"15px"} >
                    Arma tu propia pizza con los ingredientes que tú quieras
                </Text>

                    <Box
                    as={Button}
                    onClick={onOpen}
                    bgColor={'wheat'}
                    color="lightsalmon"
                    rightIcon={<FaPizzaSlice/>}>
                        
                        <Text fontSize={"20px"}>Arma Tu Pizza</Text>

                    </Box>

                        
            </Stack>
         </Box>


    )

}



















































































































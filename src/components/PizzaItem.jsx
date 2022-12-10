import { Box, Button, Container, Flex, HStack, Image, Link, LinkBox, LinkOverlay, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, StackDivider, Text, useDisclosure } from "@chakra-ui/react";
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
                bgColor={'wheat'}
                color="lightsalmon"
                rightIcon={<BsFillCartFill/>}>
                    <Text fontSize={"20px"}>Agregar</Text>
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
                bgColor={'wheat'}
                color="lightsalmon"
                rightIcon={<BsFillCartFill/>}>
                    <Text fontSize={"20px"}>Agregar</Text>
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
                bgColor={'wheat'}
                color="lightsalmon"
                rightIcon={<BsFillCartFill/>}>
                    <Text fontSize={"20px"}>Agregar</Text>
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
                bgColor={'wheat'}
                color="lightsalmon"
                rightIcon={<BsFillCartFill/>}>
                    <Text fontSize={"20px"}>Agregar</Text>
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
                bgColor={'wheat'}
                color="lightsalmon"
                rightIcon={<BsFillCartFill/>}>
                    <Text fontSize={"20px"}>Agregar</Text>
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
                bgColor={'wheat'}
                color="lightsalmon"
                rightIcon={<BsFillCartFill/>}>
                    <Text fontSize={"20px"}>Agregar</Text>
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
                bgColor={'wheat'}
                color="lightsalmon"
                rightIcon={<BsFillCartFill/>}>
                    <Text fontSize={"20px"}>Agregar</Text>
                </Box>

                        
            </Stack>
         </Box>


    )

}

































export function ArmaTuPizzaItem(){

    const { isOpen, onOpen, onClose } = useDisclosure();

    
    
    return(
        
        <Box bgColor={'oldlace'} borderRadius='35px' overflow={"hidden"} borderWidth="10px" borderColor={"ivory"} boxSize="400px">

            <Modal closeOnOverlayClick={false} size={"xl"}isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />

                <ModalContent>
                    <Stack direction={"column"} spacing={6}>
                        <ModalHeader fontSize={"35"}>Arma Tu Pizza</ModalHeader>
                    
                        <ModalCloseButton />
                    
                        <ModalBody pb={8}>
                            <Stack direction={"column"} spacing={5} divider={<StackDivider borderColor='gray.200' />}>
                                <Box>
                                    <Stack direction={"column"} spacing={1}>
                                        <Text
                                        as='b'
                                        fontSize={"md"}>
                                            Tamaño Y Tipo de Pizza
                                        </Text>

                                        <HStack spacing={2}>
                                            <Button>
                                                Familiar
                                            </Button>

                                        </HStack>
                                       
                                    </Stack>
                                </Box>
                                <Text>Bro</Text>

                            </Stack>
                            Footer
                        </ModalBody>
                    </Stack>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3}>
                            Save
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
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
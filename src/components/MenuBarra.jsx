import {
    Menu,
    MenuButton,
    Button,
    IconButton,
    Box,
    Flex,
    Text,
    Image,
    Stack,
    HStack,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    useDisclosure,
    StackDivider,
} from '@chakra-ui/react'

import {FaCircle, FaUserAlt} from "react-icons/fa";
import {BsFillCartFill} from "react-icons/bs";
import {BiStoreAlt} from "react-icons/bi"
import {FaPizzaSlice} from "react-icons/fa"

import logoPizza from '../assets/pizza-house-transparente.png'
import { Link } from 'react-router-dom';
import { OpcionesBotones } from './ButtonOptionGroup';
{/* Componente Relacionado con el menu de la página*/}
export function MenuBarra() {
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

    let cantidadItems = 2;


  return (
    <>

    <Flex bg='oldlace' w='100%' p={1} color='white'>

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
    


      <Menu>
        <HStack spacing={'7px'}>
        <Link to={"/"}>
          <IconButton icon={<Image src={logoPizza} boxSize='130px'></Image>} colorScheme={'oldlace'} px={'5'} py={'10'}/>
        </Link>

        <Link to={"/Menu"}>
          <Box as={Button} colorScheme={'blackAlpha'} px={'5'} py={'9'} bgColor='lightsalmon' color='orange' variant='ghost'>
            <Text fontSize='2xl' color='oldlace'>Menú</Text>
          </Box>
        </Link>


          <Box as={Button} onClick={onOpen} colorScheme={'blackAlpha'} px={'5'} py={'9'} bgColor='lightsalmon' color='orange' variant='ghost'>
            <Text fontSize='2xl' color='oldlace'>Arma Tu Pizza</Text>
          </Box>

        
        <Box as={Button} colorScheme={'blackAlpha'} px={'5'} py={'9'} bgColor='lightsalmon' color='oldlace' variant='ghost' rightIcon={<FaPizzaSlice/>}>
          <Text fontSize='2xl' color='oldlace'>Consultar Pedido</Text>
        </Box>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={390}>

          <Box as={Button} colorScheme={'blackAlpha'} px={'5'} py={'9'} bgColor='lightsalmon' color='oldlace' variant='ghost' rightIcon={<BiStoreAlt size={25}/>}>
            <Text fontSize='2xl' color='oldlace'>Locales</Text>
          </Box>

          <Box as={Button} colorScheme={'blackAlpha'} px={'5'} py={'9'} bgColor='lightsalmon' color='oldlace' variant='ghost' rightIcon={<FaUserAlt />}>
            <Text fontSize='2xl' color='oldlace'>Iniciar Sesión</Text>
          </Box>

        </Stack>
        
        <Link to={"/Carrito"}>
        <Box as={Button} colorScheme={'blackAlpha'} px={'3'} py={'9'} bgColor='lightsalmon' color='oldlace' variant='ghost' rightIcon={<><BsFillCartFill/><Text>({cantidadItems})</Text></>}>
            <Text fontSize='2xl' color='oldlace'>Carrito</Text>
        </Box>
        </Link>
        </HStack>



        

      </Menu>

      

      


    </Flex>


    
      
        
    </>
  );
}

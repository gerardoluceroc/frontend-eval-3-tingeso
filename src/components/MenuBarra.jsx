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
} from '@chakra-ui/react'

import {FaUserAlt} from "react-icons/fa";
import {BsFillCartFill} from "react-icons/bs";
import {BiStoreAlt} from "react-icons/bi"
import {FaPizzaSlice} from "react-icons/fa"

import logoPizza from '../assets/pizza-house-transparente.png'
import { Link } from 'react-router-dom';
{/* Componente Relacionado con el menu de la página*/}
export function MenuBarra() {
  return (
    <>

    <Flex bg='oldlace' w='100%' p={1} color='white'>
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

        <Box as={Button} colorScheme={'blackAlpha'} px={'5'} py={'9'} bgColor='lightsalmon' color='orange' variant='ghost'>
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
        

        <Box as={Button} colorScheme={'blackAlpha'} px={'5'} py={'9'} bgColor='lightsalmon' color='oldlace' variant='ghost' rightIcon={<BsFillCartFill/>}>
            <Text fontSize='2xl' color='oldlace'>Carrito</Text>
        </Box>
        </HStack>



        

      </Menu>

      

      


    </Flex>


    
      
        
    </>
  );
}

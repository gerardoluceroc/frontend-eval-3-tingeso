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
} from '@chakra-ui/react'

import {FaUserAlt} from "react-icons/fa";
import {BsFillCartFill} from "react-icons/bs";
import {BiStoreAlt} from "react-icons/bi"

import logoPizza from '../assets/pizza-house-transparente.png'
export function MenuBarra() {
  return (
    <>

    <Flex bg='oldlace' w='100%' p={1} color='white'>
      <Menu>
      
        <IconButton icon={<Image src={logoPizza} boxSize='130px'></Image>} colorScheme={'oldlace'} px={'5'} py={'10'}/>

        <MenuButton as={Button} colorScheme={'blackAlpha'} px={'5'} py={'9'} bgColor='lightsalmon' color='orange' variant='ghost'>
          <Text fontSize='2xl' color='oldlace'>Menú</Text>
        </MenuButton>

        <MenuButton as={Button} colorScheme={'blackAlpha'} px={'5'} py={'9'} bgColor='lightsalmon' color='orange' variant='ghost'>
          <Text fontSize='2xl' color='oldlace'>Arma Tu Pizza</Text>
        </MenuButton>
        
        <MenuButton as={Button} colorScheme={'blackAlpha'} px={'5'} py={'9'} bgColor='lightsalmon' color='orange' variant='ghost'>
          <Text fontSize='2xl' color='oldlace'>Consultar Pedido</Text>
        </MenuButton>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={400}>

          <MenuButton as={Button} colorScheme={'blackAlpha'} px={'5'} py={'9'} bgColor='lightsalmon' color='oldlace' variant='ghost' rightIcon={<BiStoreAlt size={25}/>}>
            <Text fontSize='2xl' color='oldlace'>Locales</Text>
          </MenuButton>

          <MenuButton as={Button} colorScheme={'blackAlpha'} px={'5'} py={'9'} bgColor='lightsalmon' color='oldlace' variant='ghost' rightIcon={<FaUserAlt />}>
            <Text fontSize='2xl' color='oldlace'>Iniciar Sesión</Text>
          </MenuButton>

        </Stack>

        <MenuButton as={Button} colorScheme={'blackAlpha'} px={'5'} py={'9'} bgColor='lightsalmon' color='oldlace' variant='ghost' rightIcon={<BsFillCartFill/>}>
            <Text fontSize='2xl' color='oldlace'>Carrito</Text>
          </MenuButton>

        

        

      </Menu>

      

      


    </Flex>


    
      
        
    </>
  );
}

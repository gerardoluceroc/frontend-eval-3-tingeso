import {
    Box,
    Flex,
    Heading,
    HStack,
    Link,
    Stack,
    Text,
    useColorModeValue as mode,
  } from '@chakra-ui/react'
  import * as React from 'react'
import { useEffect } from 'react'
import { MenuBarra } from '../MenuBarra'
  import { CartItem } from './CartItem'
  import { CartOrderSummary } from './CartOrderSummary'
  import { cartData } from './_data'
  
  export function CarritoPage(props){ 

      console.log("Estoy en carrito page y el carrito de compras es:",props.carritoDeCompras);


    return(

    <>
    <MenuBarra 
                largoCarritoBebidas = {[]} carritoBebidas={props.carritoDeCompras}
                largoCarritoSalsas = {[]} carritoSalsas={[]}
                largoCarritoAcompañamientos = {[]} carritoAcompañamientos ={[]}
                largoCarritoPizzas = {[]} carritoPizzas ={[]}
                actualizarLargoCarritoDeCompras={(largo)=>{props.actualizarLargoCarritoDeCompras(largo)}}
                actualizarCarritoDeCompras={(carro)=>{props.actualizarCarritoDeCompras(carro)}}

                />
    {/*<MenuBarra/>*/}
    <Box
      maxW={{
        base: '3xl',
        lg: '7xl',
      }}
      mx="auto"
      px={{
        base: '4',
        md: '8',
        lg: '12',
      }}
      py={{
        base: '6',
        md: '8',
        lg: '12',
      }}
    >
      <Stack
        direction={{
          base: 'column',
          lg: 'row',
        }}
        align={{
          lg: 'flex-start',
        }}
        spacing={{
          base: '8',
          md: '16',
        }}
      >
        <Stack
          spacing={{
            base: '8',
            md: '10',
          }}
          flex="2"
        >
          <Heading fontSize="2xl" fontWeight="extrabold">
            Shopping Cart (3 items)
          </Heading>
  
          <Stack spacing="6">
            {cartData.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
          </Stack>
        </Stack>
  
        <Flex direction="column" align="center" flex="1">
          <CartOrderSummary />
          <HStack mt="6" fontWeight="semibold">
            <p>o</p>
            <Link to={"/Menu"} color={mode('blue.500', 'blue.200')}>Continuar Comprando</Link>
          </HStack>
        </Flex>
      </Stack>
    </Box>
    </>
    )
}




export function nose(props){
  return(
    <Text color="red" >Hola</Text>
  )
}
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

      let carritosDeCompras = props.carritoDeCompras;
      let cantidadItems = carritosDeCompras.length;
      let carritoComprasArreglado = [];
      let keysCarrito = [];

      for(let i=0;i<cantidadItems;i++){
        if(keysCarrito.includes(carritosDeCompras[i]['name']) === false){

          let cantidadRepeticiones = 0;
          let itemParaAgregar = {cantidad : 0};
          
          for(let j=0; j<cantidadItems; j++){
            if(carritosDeCompras[i]['name'] === carritosDeCompras[j]['name']){
              cantidadRepeticiones = cantidadRepeticiones+1;
            }
          }

          keysCarrito.push(carritosDeCompras[i]['name']);
          itemParaAgregar['cantidad'] = cantidadRepeticiones;
          itemParaAgregar = Object.assign(carritosDeCompras[i],itemParaAgregar);
          carritoComprasArreglado.push(itemParaAgregar);


        }
      }

      console.log("EL CARRITO DE COMPRAS ARREGLADO ES:",carritoComprasArreglado);



    return(

    <>
    <Box bgColor={"lightsalmon"}>
    <MenuBarra 
                largoCarritoBebidas = {[]} carritoBebidas={carritosDeCompras}
                largoCarritoSalsas = {[]} carritoSalsas={[]}
                largoCarritoAcompañamientos = {[]} carritoAcompañamientos ={[]}
                largoCarritoPizzas = {[]} carritoPizzas ={[]}
                actualizarLargoCarritoDeCompras={(largo)=>{props.actualizarLargoCarritoDeCompras(largo)}}
                actualizarCarritoDeCompras={(carro)=>{props.actualizarCarritoDeCompras(carro)}}

                />
    {/*<MenuBarra/>*/}
    <Box
      bgColor={"oldlace"}
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
            Carrito De Compras ({cantidadItems} items)
          </Heading>
  
          <Stack spacing="6">
            {carritoComprasArreglado.map((item) => (
              <CartItem key={item.name} {...item} />
            ))}
          </Stack>
        </Stack>
  
        <Flex direction="column" align="center" flex="1">
          <CartOrderSummary carritoDeCompras = {carritosDeCompras} />
          <HStack mt="6" fontWeight="semibold">
            <p>o</p>
            <Link to={"/Menu"} color={"coral"}>Continuar Comprando</Link>
          </HStack>
        </Flex>
      </Stack>
    </Box>
    </Box>
    </>
    )
}




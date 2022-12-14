import {
  Box,
    Button,
    Flex,
    Heading,
    Link,
    Select,
    Stack,
    Text,
    useColorModeValue as mode,
  } from '@chakra-ui/react'
  import * as React from 'react'
import { useState } from 'react'
  import { FaArrowRight } from 'react-icons/fa'
  import { formatPrice } from './PriceTag'
  const OrderSummaryItem = (props) => {
    const { label, value, children, indicarPropina, actualizarPropina } = props
    return (
      <Flex justify="space-between" fontSize="sm">
        <Text fontWeight="medium" color={mode('gray.600', 'gray.400')}>
          {label}

          {indicarPropina ? <Select onChange={()=>{actualizarPropina();}} id="seleccionPropina"  px={1} py={0.5}>
                              <option id="opcion0%">0%</option>
                              <option id="opcion5%">5%</option>
                              <option id="opcion10%">10%</option>
                              <option id="opcion15%">15%</option>
                            </Select> : <></>}
        
        </Text>

        
        
        {value ? <Text fontWeight="medium">{value}</Text> : children}
      </Flex>
    )
  }
  
  export const CartOrderSummary = (props) => {
    let carro = props.carritoDeCompras;
    let cantidadItems = carro.length;
    let costoEnvio = 2000

    const [cantidadPropina, setCantidadPropina] = useState(0);
    const [opcion0Porciento, setOpcion0Porciento] = useState(false);
    const [opcion5Porciento, setOpcion5Porciento] = useState(false);
    const [opcion10Porciento, setOpcion10Porciento] = useState(false);
    const [opcion15Porciento, setOpcion15Porciento] = useState(false);

    let precioTotalArticulos = 0;
    for(let i=0;i<cantidadItems;i++){
      precioTotalArticulos = precioTotalArticulos + parseInt(carro[i]['price'].substr(1));
    }

      React.useEffect(()=>{
        setOpcion0Porciento(document.getElementById("opcion0%"));
        setOpcion5Porciento(document.getElementById("opcion5%"));
        setOpcion10Porciento(document.getElementById("opcion10%"));
        setOpcion15Porciento(document.getElementById("opcion15%"));
      
      },[])

      function actualizarPropina(){
        console.log("cambio alguna opcion");
        if(opcion0Porciento.selected){
          setCantidadPropina(precioTotalArticulos*0);
        }
        else if(opcion5Porciento.selected){
          setCantidadPropina(precioTotalArticulos*0.05);
        }  
        else if(opcion10Porciento.selected){
          setCantidadPropina(precioTotalArticulos*0.1);
        } 
        else if(opcion15Porciento.selected){
          setCantidadPropina(precioTotalArticulos*0.15);
        }        
      }


    return (

      <Stack spacing="8" borderWidth="3px" borderColor={"lightsalmon"} rounded="lg" padding="8" width="full">
        <Heading size="md">Resumen del Pedido</Heading>
  
        <Stack spacing="6">

          
          <OrderSummaryItem label="Total Parcial" value={"$".concat(precioTotalArticulos)} />

          <OrderSummaryItem label="Costo de Envío" value= {"$".concat(costoEnvio)}>
          </OrderSummaryItem>

          
          <OrderSummaryItem id="costoPropina"  label="Propina" value={"$".concat(cantidadPropina)} indicarPropina={true} actualizarPropina={()=>{actualizarPropina()}}>      
          </OrderSummaryItem>


          <Flex justify="space-between">
            <Text fontSize="lg" fontWeight="semibold">
              Total
            </Text>
            <Text fontSize="xl" fontWeight="extrabold">
              {"$".concat(precioTotalArticulos+costoEnvio+cantidadPropina)}
            </Text>
          </Flex>
        </Stack>
        <Button bgColor={"lightsalmon"} colorScheme="orange" size="lg" fontSize="md" rightIcon={<FaArrowRight />}>
          Proceder Al Pago
        </Button>
      </Stack>

    )
  }
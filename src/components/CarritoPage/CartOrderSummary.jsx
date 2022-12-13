import {
    Button,
    Flex,
    Heading,
    Link,
    Stack,
    Text,
    useColorModeValue as mode,
  } from '@chakra-ui/react'
  import * as React from 'react'
  import { FaArrowRight } from 'react-icons/fa'
  import { formatPrice } from './PriceTag'
  const OrderSummaryItem = (props) => {
    const { label, value, children } = props
    return (
      <Flex justify="space-between" fontSize="sm">
        <Text fontWeight="medium" color={mode('gray.600', 'gray.400')}>
          {label}
        </Text>
        {value ? <Text fontWeight="medium">{value}</Text> : children}
      </Flex>
    )
  }
  
  export const CartOrderSummary = (props) => {
    let carro = props.carritoDeCompras;
    let cantidadItems = carro.length;
    let costoEnvio = 2000
    let cantidadPropina = 0;

    
    let precioTotalArticulos = 0;
    for(let i=0;i<cantidadItems;i++){
      precioTotalArticulos = precioTotalArticulos + parseInt(carro[i]['price'].substr(1));
    }
    return (
      <Stack spacing="8" borderWidth="3px" borderColor={"lightsalmon"} rounded="lg" padding="8" width="full">
        <Heading size="md">Resumen del Pedido</Heading>
  
        <Stack spacing="6">
          <OrderSummaryItem label="Total Parcial" value={"$".concat(precioTotalArticulos)} />

          <OrderSummaryItem label="Costo de Envío" value= {"$".concat(costoEnvio)}>
          </OrderSummaryItem>

          <OrderSummaryItem label="Propina" value={"$".concat(cantidadPropina)}>
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
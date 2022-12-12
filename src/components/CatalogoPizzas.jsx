import { Box, Container, Flex, HStack, Spacer, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { ArmaTuPizzaItem, PizzaAmericana, PizzaBBQChicken, PizzaCampesina, PizzaCordillerana, PizzaHawaiana, PizzaMechadaBBQ, PizzaSuperPepperoni, PizzaVeganQueen } from "./PizzaItem";

export function CatalogoPizzas(props){
    //Listado de articulos que tiene el carrito
    const [listadoArticulosCarrito, setListadoArticulosCarrito] = useState([]);


    //Funcion que agrega un articulo al carrito
    function agregarArticuloACarrito(listadoArticulosCarrito,setListadoArticulosCarrito,articuloCatalogo, actualizarCarritoPadre,actualizarLargoCarritoPadre){
        let listadoActualizado = [];
        
        listadoActualizado = listadoArticulosCarrito;
        listadoActualizado.push(articuloCatalogo);
        setListadoArticulosCarrito(listadoActualizado);
        actualizarCarritoPadre(listadoActualizado);
        actualizarLargoCarritoPadre(listadoActualizado.length);
    }
    return(

        <Container maxWidth={"max"} >
            
            <Stack direction={"column"} spacing="5">
            <HStack spacing={10}>          
            <PizzaAmericana agregarArticulo={(articuloParaAgregar) => agregarArticuloACarrito(listadoArticulosCarrito,setListadoArticulosCarrito,articuloParaAgregar,props.actualizarCarritoPadre,props.actualizarLargoCarritoPadre)} 
            />
            <PizzaBBQChicken agregarArticulo={(articuloParaAgregar) => agregarArticuloACarrito(listadoArticulosCarrito,setListadoArticulosCarrito,articuloParaAgregar,props.actualizarCarritoPadre,props.actualizarLargoCarritoPadre)} 
            />
            <PizzaCampesina agregarArticulo={(articuloParaAgregar) => agregarArticuloACarrito(listadoArticulosCarrito,setListadoArticulosCarrito,articuloParaAgregar,props.actualizarCarritoPadre,props.actualizarLargoCarritoPadre)} 
            />
            </HStack>

            <HStack spacing={10}> 
            <PizzaHawaiana agregarArticulo={(articuloParaAgregar) => agregarArticuloACarrito(listadoArticulosCarrito,setListadoArticulosCarrito,articuloParaAgregar,props.actualizarCarritoPadre,props.actualizarLargoCarritoPadre)} 
            /> 
            <PizzaMechadaBBQ agregarArticulo={(articuloParaAgregar) => agregarArticuloACarrito(listadoArticulosCarrito,setListadoArticulosCarrito,articuloParaAgregar,props.actualizarCarritoPadre,props.actualizarLargoCarritoPadre)} 
            />   
            <PizzaVeganQueen agregarArticulo={(articuloParaAgregar) => agregarArticuloACarrito(listadoArticulosCarrito,setListadoArticulosCarrito,articuloParaAgregar,props.actualizarCarritoPadre,props.actualizarLargoCarritoPadre)} 
            />
            </HStack>
            <HStack spacing={10}> 
            <PizzaCordillerana agregarArticulo={(articuloParaAgregar) => agregarArticuloACarrito(listadoArticulosCarrito,setListadoArticulosCarrito,articuloParaAgregar,props.actualizarCarritoPadre,props.actualizarLargoCarritoPadre)} 
            /> 
            <PizzaSuperPepperoni agregarArticulo={(articuloParaAgregar) => agregarArticuloACarrito(listadoArticulosCarrito,setListadoArticulosCarrito,articuloParaAgregar,props.actualizarCarritoPadre,props.actualizarLargoCarritoPadre)} 
            />   
            <ArmaTuPizzaItem/>
            </HStack>
            </Stack>        

        </Container>



    )
}
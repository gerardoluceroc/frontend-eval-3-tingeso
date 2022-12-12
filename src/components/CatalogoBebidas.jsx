import { Container, HStack, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Fanta1L, Fanta350, Pepsi1L, Pepsi350, PepsiLight1L, PepsiLight350, Cachantun500SinGas, Cachantun500ConGas, JugoWatts1LDurazno, JugoWatts1LPiña} from "./BebidaItem";

export function CatalogoBebidas(props){


    //Listado de articulos que tiene el carrito
    const [listadoArticulosCarrito, setListadoArticulosCarrito] = useState([]);

    //Funcion que agrega un articulo al carrito
    function agregarArticuloACarrito(listadoArticulosCarrito,setListadoArticulosCarrito,articuloCatalogo, actualizarCarritoPadre){
        let listadoActualizado = [];
        
        listadoActualizado = listadoArticulosCarrito;
        listadoActualizado.push(articuloCatalogo);
        setListadoArticulosCarrito(listadoActualizado);
        actualizarCarritoPadre(listadoActualizado);
    }
    
    return(

        <Container maxWidth={"max"} >
            
            <Stack direction={"column"} spacing="5">
            <HStack spacing={10}>
                <Pepsi350 
                agregarArticulo={(articuloParaAgregar) => agregarArticuloACarrito(listadoArticulosCarrito,setListadoArticulosCarrito,articuloParaAgregar,props.actualizarCarritoPadre)} 
                />  
                <Pepsi1L 
                agregarArticulo={(articuloParaAgregar) => agregarArticuloACarrito(listadoArticulosCarrito,setListadoArticulosCarrito,articuloParaAgregar,props.actualizarCarritoPadre)} 
                />  
                <PepsiLight350 
                agregarArticulo={(articuloParaAgregar) => agregarArticuloACarrito(listadoArticulosCarrito,setListadoArticulosCarrito,articuloParaAgregar,props.actualizarCarritoPadre)} 
                /> 
                <PepsiLight1L 
                agregarArticulo={(articuloParaAgregar) => agregarArticuloACarrito(listadoArticulosCarrito,setListadoArticulosCarrito,articuloParaAgregar,props.actualizarCarritoPadre)} 
                /> 
                <Fanta350 
                agregarArticulo={(articuloParaAgregar) => agregarArticuloACarrito(listadoArticulosCarrito,setListadoArticulosCarrito,articuloParaAgregar,props.actualizarCarritoPadre)} 
                />
   
            
            </HStack>
            <HStack spacing={10}>  
                <Fanta1L 
                agregarArticulo={(articuloParaAgregar) => agregarArticuloACarrito(listadoArticulosCarrito,setListadoArticulosCarrito,articuloParaAgregar,props.actualizarCarritoPadre)} 
                />
                <Cachantun500SinGas 
                agregarArticulo={(articuloParaAgregar) => agregarArticuloACarrito(listadoArticulosCarrito,setListadoArticulosCarrito,articuloParaAgregar,props.actualizarCarritoPadre)} 
                /> 
                <Cachantun500ConGas 
                agregarArticulo={(articuloParaAgregar) => agregarArticuloACarrito(listadoArticulosCarrito,setListadoArticulosCarrito,articuloParaAgregar,props.actualizarCarritoPadre)} 
                />
                <JugoWatts1LDurazno 
                agregarArticulo={(articuloParaAgregar) => agregarArticuloACarrito(listadoArticulosCarrito,setListadoArticulosCarrito,articuloParaAgregar,props.actualizarCarritoPadre)} 
                />
                <JugoWatts1LPiña 
                agregarArticulo={(articuloParaAgregar) => agregarArticuloACarrito(listadoArticulosCarrito,setListadoArticulosCarrito,articuloParaAgregar,props.actualizarCarritoPadre)} 
                />  
            
            </HStack>

            </Stack>        

        </Container>



    )
}
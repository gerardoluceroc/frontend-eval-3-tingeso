import { Container, HStack, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Fanta1L, Fanta350, Pepsi1L, Pepsi350, PepsiLight1L, PepsiLight350, Cachantun500SinGas, Cachantun500ConGas, JugoWatts1LDurazno, JugoWatts1LPiña} from "./BebidaItem";

export function CatalogoBebidas(props){


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
        console.log("Carrito Actualizado del catalogo bebidas el cual: ",listadoArticulosCarrito);
    }

    useEffect(()=>{
        console.log("Ejecutando use effect de listadoArticulosCarrito: ",listadoArticulosCarrito);
    },[listadoArticulosCarrito])
    
    return(

        <Container maxWidth={"max"} >
            
            <Stack direction={"column"} spacing="5">
            <HStack spacing={10}>
                <Pepsi350 
                agregarArticulo={(articuloParaAgregar) => agregarArticuloACarrito(listadoArticulosCarrito,setListadoArticulosCarrito,articuloParaAgregar,props.actualizarCarritoPadre,props.actualizarLargoCarritoPadre)} 
                />  
                <Pepsi1L 
                agregarArticulo={(articuloParaAgregar) => agregarArticuloACarrito(listadoArticulosCarrito,setListadoArticulosCarrito,articuloParaAgregar,props.actualizarCarritoPadre,props.actualizarLargoCarritoPadre)} 
                />  
                <PepsiLight350 
                agregarArticulo={(articuloParaAgregar) => agregarArticuloACarrito(listadoArticulosCarrito,setListadoArticulosCarrito,articuloParaAgregar,props.actualizarCarritoPadre,props.actualizarLargoCarritoPadre)} 
                /> 
                <PepsiLight1L 
                agregarArticulo={(articuloParaAgregar) => agregarArticuloACarrito(listadoArticulosCarrito,setListadoArticulosCarrito,articuloParaAgregar,props.actualizarCarritoPadre,props.actualizarLargoCarritoPadre)} 
                /> 
                <Fanta350 
                agregarArticulo={(articuloParaAgregar) => agregarArticuloACarrito(listadoArticulosCarrito,setListadoArticulosCarrito,articuloParaAgregar,props.actualizarCarritoPadre,props.actualizarLargoCarritoPadre)} 
                />
   
            
            </HStack>
            <HStack spacing={10}>  
                <Fanta1L 
                agregarArticulo={(articuloParaAgregar) => agregarArticuloACarrito(listadoArticulosCarrito,setListadoArticulosCarrito,articuloParaAgregar,props.actualizarCarritoPadre,props.actualizarLargoCarritoPadre)} 
                />
                <Cachantun500SinGas 
                agregarArticulo={(articuloParaAgregar) => agregarArticuloACarrito(listadoArticulosCarrito,setListadoArticulosCarrito,articuloParaAgregar,props.actualizarCarritoPadre,props.actualizarLargoCarritoPadre)} 
                /> 
                <Cachantun500ConGas 
                agregarArticulo={(articuloParaAgregar) => agregarArticuloACarrito(listadoArticulosCarrito,setListadoArticulosCarrito,articuloParaAgregar,props.actualizarCarritoPadre,props.actualizarLargoCarritoPadre)} 
                />
                <JugoWatts1LDurazno 
                agregarArticulo={(articuloParaAgregar) => agregarArticuloACarrito(listadoArticulosCarrito,setListadoArticulosCarrito,articuloParaAgregar,props.actualizarCarritoPadre,props.actualizarLargoCarritoPadre)} 
                />
                <JugoWatts1LPiña 
                agregarArticulo={(articuloParaAgregar) => agregarArticuloACarrito(listadoArticulosCarrito,setListadoArticulosCarrito,articuloParaAgregar,props.actualizarCarritoPadre,props.actualizarLargoCarritoPadre)} 
                />  
            
            </HStack>

            </Stack>        

        </Container>



    )
}
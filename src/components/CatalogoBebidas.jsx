import { Container, HStack, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Fanta1L, Fanta350, Pepsi1L, Pepsi350, PepsiLight1L, PepsiLight350, Cachantun500SinGas, Cachantun500ConGas, JugoWatts1LDurazno, JugoWatts1LPiña} from "./BebidaItem";

export function CatalogoBebidas(props){


    //Listado de articulos que tiene el carrito
    const [listadoArticulosCarrito, setListadoArticulosCarrito] = useState([]);

    //Funcion que agrega un articulo al carrito
    function agregarArticuloACarrito(listadoArticulosCarrito,setListadoArticulosCarrito,articuloCatalogo){
        let listadoActualizado = [];
        
        listadoActualizado = listadoArticulosCarrito;
        listadoActualizado.push(articuloCatalogo);
        setListadoArticulosCarrito(listadoActualizado);
        
        console.log("KKKaAArrito actualmente: ",listadoActualizado);
    }
    
    useEffect(() => {
        props.actualizarCarritoPadre(listadoArticulosCarrito);
        console.log("use effect del listado del carrito hijo ejecutado");
    })

    return(

        <Container maxWidth={"max"} >
            
            <Stack direction={"column"} spacing="5">
            <HStack spacing={10}>
                <Pepsi350 
                agregarArticulo={(articuloParaAgregar) => agregarArticuloACarrito(listadoArticulosCarrito,setListadoArticulosCarrito,articuloParaAgregar)} 
                />  
                <Pepsi1L/>  
                <PepsiLight350/> 
                <PepsiLight1L/> 
                <Fanta350/>
   
            
            </HStack>
            <HStack spacing={10}>  
                <Fanta1L/>
                <Cachantun500SinGas/> 
                <Cachantun500ConGas/>
                <JugoWatts1LDurazno/>
                <JugoWatts1LPiña/>  
            
            </HStack>

            </Stack>        

        </Container>



    )
}
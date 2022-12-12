import { Box, Button, Image, Stack, Text } from "@chakra-ui/react";
import { BsFillCartFill } from "react-icons/bs";
import salsaBBQImagen from "../assets/salsa bbq.jpg"
import salsaGarlicImagen from "../assets/salsa ajo garlic.jpg"
import salsaTomateImagen from "../assets/salsa tomate.jpg"
import salsaMielImagen from "../assets/salsa miel.jpg"

export function SalsaBBQ(props){
    return(

        <Box bgColor={'oldlace'} borderRadius='35px' overflow={"hidden"} borderWidth="10px" borderColor={"ivory"} boxSize="400px">
            <Stack spacing={2}>
                <Image 
                    id="imagenArticuloSalsaBBQ"
                    src={salsaBBQImagen} 
                    boxSize="200px"
                    borderRadius='330px'
                    w={"366"}
                    h={"200"}
                />
                <Text 
                id="textoNombreArticuloSalsaBBQ" 
                align="center"
                fontSize="20px"
                casing={"uppercase"}
                decoration={"underline dotted"}
                >
                  Salsa BBQ
                </Text>

                <Text 
                id="textoDescripcionArticuloSalsaBBQ"
                align="center"
                fontSize="13px"
                >
                  Combinación dulce y ahumada, complemento perfecto para disfrutar tus Chicken Poppers.
                </Text>

                <Text
                id="textoPrecioArticuloSalsaBBQ"
                align={"center"}
                fontSize={"15px"}
                as={'b'}>
                    $600
                
                </Text>

                <Box
                as={Button}
                onClick={()=>{
                    //Se guarda la info del articulo, se guarda en un objeto y se agrega al carrito
                    const nombreArticulo = document.getElementById("textoNombreArticuloSalsaBBQ");
                    const precioArticulo = document.getElementById("textoPrecioArticuloSalsaBBQ");
                    const imagenArticulo = document.getElementById("imagenArticuloSalsaBBQ");
                    const descripcionArticulo = document.getElementById("textoDescripcionArticuloSalsaBBQ");
                    let articulo = {
                        name: nombreArticulo.textContent,
                        price: precioArticulo.textContent,
                        description: descripcionArticulo.textContent,
                        image: imagenArticulo.getAttribute("src")
                    };
                    console.log("Articulo a agregar ",articulo);
                    props.agregarArticulo(articulo);

                    //Se le indica al usuario que el articulo fue agregado una vez presiona el botón
                            const textoBoton = document.getElementById("textoBotonSalsaBBQ");
                            textoBoton.textContent="Agregado Al Carrito!";
                            setTimeout(()=>{textoBoton.textContent="Agregar"}, 700)}}
                bgColor={'wheat'}
                color="lightsalmon"
                rightIcon={<BsFillCartFill/>}>
                    <Text id="textoBotonSalsaBBQ" fontSize={"20px"}>Agregar</Text>
                </Box>

                        
            </Stack>
         </Box>


    )
}























export function SalsaGarlic(props){
    return(

        <Box bgColor={'oldlace'} borderRadius='35px' overflow={"hidden"} borderWidth="10px" borderColor={"ivory"} boxSize="400px">
            <Stack spacing={2}>
                <Image 
                    id="imagenArticuloSalsaGarlic"
                    src={salsaGarlicImagen} 
                    boxSize="200px"
                    borderRadius='330px'
                    w={"366"}
                    h={"200"}
                />
                <Text 
                id="textoNombreArticuloSalsaGarlic"
                align="center"
                fontSize="20px"
                casing={"uppercase"}
                decoration={"underline dotted"}
                >
                  Salsa Garlic
                </Text>

                <Text 
                id="textoDescripcionArticuloSalsaGarlic"
                align="center"
                fontSize="13px"
                >
                  Salsa de ajo cremosa y con un toque de sabor inigualable es el complemento perfecto para cualquiera de nuestra pizzas.
                </Text>

                <Text
                id="textoPrecioArticuloSalsaGarlic"
                align={"center"}
                fontSize={"15px"}
                as={'b'}>
                    $600
                
                </Text>

                <Box
                as={Button}
                onClick={()=>{
                    //Se guarda la info del articulo, se guarda en un objeto y se agrega al carrito
                    const nombreArticulo = document.getElementById("textoNombreArticuloSalsaGarlic");
                    const precioArticulo = document.getElementById("textoPrecioArticuloSalsaGarlic");
                    const imagenArticulo = document.getElementById("imagenArticuloSalsaGarlic");
                    const descripcionArticulo = document.getElementById("textoDescripcionArticuloSalsaGarlic");
                    let articulo = {
                        name: nombreArticulo.textContent,
                        price: precioArticulo.textContent,
                        description: descripcionArticulo.textContent,
                        image: imagenArticulo.getAttribute("src")
                    };
                    console.log("Articulo a agregar ",articulo);
                    props.agregarArticulo(articulo);

                    //Se le indica al usuario que el articulo fue agregado una vez presiona el botón
                            const textoBoton = document.getElementById("textoBotonSalsaGarlic");
                            textoBoton.textContent="Agregado Al Carrito!";
                            setTimeout(()=>{textoBoton.textContent="Agregar"}, 700)}}
                bgColor={'wheat'}
                color="lightsalmon"
                rightIcon={<BsFillCartFill/>}>
                    <Text id="textoBotonSalsaGarlic" fontSize={"20px"}>Agregar</Text>
                </Box>

                        
            </Stack>
         </Box>


    )
}
























export function SalsaMiel(props){
    return(

        <Box bgColor={'oldlace'} borderRadius='35px' overflow={"hidden"} borderWidth="10px" borderColor={"ivory"} boxSize="400px">
            <Stack spacing={2}>
                <Image 
                    id="imagenArticuloSalsaMiel"
                    src={salsaMielImagen} 
                    boxSize="200px"
                    borderRadius='330px'
                    w={"366"}
                    h={"200"}
                />
                <Text 
                id="textoNombreArticuloSalsaMiel"
                align="center"
                fontSize="20px"
                casing={"uppercase"}
                decoration={"underline dotted"}
                >
                  Salsa Miel
                </Text>

                <Text 
                id="textoDescripcionArticuloSalsaMiel"
                align="center"
                fontSize="13px"
                >
                  Deliciosa salsa con sabor a miel.
                </Text>

                <Text
                id="textoPrecioArticuloSalsaMiel"
                align={"center"}
                fontSize={"15px"}
                as={'b'}>
                    $600
                
                </Text>

                <Box
                as={Button}
                onClick={()=>{
                    //Se guarda la info del articulo, se guarda en un objeto y se agrega al carrito
                    const nombreArticulo = document.getElementById("textoNombreArticuloSalsaMiel");
                    const precioArticulo = document.getElementById("textoPrecioArticuloSalsaMiel");
                    const imagenArticulo = document.getElementById("imagenArticuloSalsaMiel");
                    const descripcionArticulo = document.getElementById("textoDescripcionArticuloSalsaMiel");
                    let articulo = {
                        name: nombreArticulo.textContent,
                        price: precioArticulo.textContent,
                        description: descripcionArticulo.textContent,
                        image: imagenArticulo.getAttribute("src")
                    };
                    console.log("Articulo a agregar ",articulo);
                    props.agregarArticulo(articulo);

                    //Se le indica al usuario que el articulo fue agregado una vez presiona el botón
                            const textoBoton = document.getElementById("textoBotonSalsaMiel");
                            textoBoton.textContent="Agregado Al Carrito!";
                            setTimeout(()=>{textoBoton.textContent="Agregar"}, 700)}}
                bgColor={'wheat'}
                color="lightsalmon"
                rightIcon={<BsFillCartFill/>}>
                    <Text id="textoBotonSalsaMiel" fontSize={"20px"}>Agregar</Text>
                </Box>

                        
            </Stack>
         </Box>


    )
}


























export function SalsaTomate(props){
    return(

        <Box bgColor={'oldlace'} borderRadius='35px' overflow={"hidden"} borderWidth="10px" borderColor={"ivory"} boxSize="400px">
            <Stack spacing={2}>
                <Image 
                    id="imagenArticuloSalsaTomate"
                    src={salsaTomateImagen} 
                    boxSize="200px"
                    borderRadius='330px'
                    w={"366"}
                    h={"200"}
                />
                <Text 
                id="textoNombreArticuloSalsaTomate"
                align="center"
                fontSize="20px"
                casing={"uppercase"}
                decoration={"underline dotted"}
                >
                  Salsa de Tomate
                </Text>

                <Text 
                id="textoDescripcionArticuloSalsaTomate"
                align="center"
                fontSize="13px"
                >
                  Nuestra salsa de tomate natural combina a la perfección con los palitos de ajo.
                </Text>

                <Text
                id="textoPrecioArticuloSalsaTomate"
                align={"center"}
                fontSize={"15px"}
                as={'b'}>
                    $600
                
                </Text>

                <Box
                as={Button}
                onClick={()=>{
                    //Se guarda la info del articulo, se guarda en un objeto y se agrega al carrito
                    const nombreArticulo = document.getElementById("textoNombreArticuloSalsaTomate");
                    const precioArticulo = document.getElementById("textoPrecioArticuloSalsaTomate");
                    const imagenArticulo = document.getElementById("imagenArticuloSalsaTomate");
                    const descripcionArticulo = document.getElementById("textoDescripcionArticuloSalsaTomate");
                    let articulo = {
                        name: nombreArticulo.textContent,
                        price: precioArticulo.textContent,
                        description: descripcionArticulo.textContent,
                        image: imagenArticulo.getAttribute("src")
                    };
                    console.log("Articulo a agregar ",articulo);
                    props.agregarArticulo(articulo);

                    //Se le indica al usuario que el articulo fue agregado una vez presiona el botón
                            const textoBoton = document.getElementById("textoBotonSalsaTomate");
                            textoBoton.textContent="Agregado Al Carrito!";
                            setTimeout(()=>{textoBoton.textContent="Agregar"}, 700)}}
                bgColor={'wheat'}
                color="lightsalmon"
                rightIcon={<BsFillCartFill/>}>
                    <Text id="textoBotonSalsaTomate" fontSize={"20px"}>Agregar</Text>
                </Box>

                        
            </Stack>
         </Box>


    )
}





































































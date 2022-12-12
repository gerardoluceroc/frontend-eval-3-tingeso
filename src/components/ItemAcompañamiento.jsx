import { Box, Button, Image, Stack, Text } from "@chakra-ui/react";
import { BsFillCartFill } from "react-icons/bs";
import palitosAjosImagen from "../assets/palitos de ajo y queso.jpg"
import cheesyVeggiesImagen from "../assets/Cheesy Veggies.jpg"
import alitasPolloImagen from "../assets/Alitas de Pollo.jpg"
import chickenPoppersImagen from "../assets/Chiken Poppers.jpg"

export function PalitosAjo(props){
    return(

        <Box bgColor={'oldlace'} borderRadius='35px' overflow={"hidden"} borderWidth="10px" borderColor={"ivory"} boxSize="400px">
            <Stack spacing={2}>
                <Image 
                    id="imagenArticuloPalitosAjo"
                    src={palitosAjosImagen} 
                    boxSize="200px"
                    borderRadius='330px'
                    w={"366"}
                    h={"200"}
                />
                <Text 
                id="textoNombreArticuloPalitosAjo"
                align="center"
                fontSize="20px"
                casing={"uppercase"}
                decoration={"underline dotted"}
                >
                  Palitos de Ajo y Queso
                </Text>

                <Text 
                id="textoDescripcionArticuloPalitosAjo"
                align="center"
                fontSize="13px"
                >
                  10 palitos de pan horneados cubiertos con salsa de ajo y acompañada de 2 cups de salsas de tomate.
                </Text>

                <Text
                id="textoPrecioArticuloPalitosAjo"
                align={"center"}
                fontSize={"15px"}
                as={'b'}>
                    $4.290
                
                </Text>

                <Box
                as={Button}
                onClick={()=>{
                    //Se guarda la info del articulo, se guarda en un objeto y se agrega al carrito
                    const nombreArticulo = document.getElementById("textoNombreArticuloPalitosAjo");
                    const precioArticulo = document.getElementById("textoPrecioArticuloPalitosAjo");
                    const imagenArticulo = document.getElementById("imagenArticuloPalitosAjo");
                    const descripcionArticulo = document.getElementById("textoDescripcionArticuloPalitosAjo");
                    let articulo = {
                        name: nombreArticulo.textContent,
                        price: precioArticulo.textContent,
                        description: descripcionArticulo.textContent,
                        image: imagenArticulo.getAttribute("src")
                    };
                    console.log("Articulo a agregar ",articulo);
                    props.agregarArticulo(articulo);

                    //Se le indica al usuario que el articulo fue agregado una vez presiona el botón
                            const textoBoton = document.getElementById("textoBotonPalitosAjo");
                            textoBoton.textContent="Agregado Al Carrito!";
                            setTimeout(()=>{textoBoton.textContent="Agregar"}, 700)}}
                bgColor={'wheat'}
                color="lightsalmon"
                rightIcon={<BsFillCartFill/>}>
                    <Text id="textoBotonPalitosAjo" fontSize={"20px"}>Agregar</Text>
                </Box>

                        
            </Stack>
         </Box>


    )
}
























export function CheesyVeggies(props){
    return(

        <Box bgColor={'oldlace'} borderRadius='35px' overflow={"hidden"} borderWidth="10px" borderColor={"ivory"} boxSize="400px">
            <Stack spacing={2}>
                <Image 
                    id="imagenArticuloCheesyVeggies"
                    src={cheesyVeggiesImagen} 
                    boxSize="200px"
                    borderRadius='330px'
                    w={"366"}
                    h={"200"}
                />
                <Text 
                id="textoNombreArticuloCheesyVeggies"
                align="center"
                fontSize="20px"
                casing={"uppercase"}
                decoration={"underline dotted"}
                >
                  Cheesy Veggies
                </Text>

                <Text 
                id="textoDescripcionArticuloCheesyVeggies"
                align="center"
                fontSize="13px"
                >
                  Tus palitos de queso mozzarella de siempre, ahora acompañados de un vegetal o shot a tu elección
                </Text>

                <Text
                id="textoPrecioArticuloCheesyVeggies"
                align={"center"}
                fontSize={"15px"}
                as={'b'}>
                    $5.690
                
                </Text>

                <Box
                as={Button}
                onClick={()=>{
                    //Se guarda la info del articulo, se guarda en un objeto y se agrega al carrito
                    const nombreArticulo = document.getElementById("textoNombreArticuloCheesyVeggies");
                    const precioArticulo = document.getElementById("textoPrecioArticuloCheesyVeggies");
                    const imagenArticulo = document.getElementById("imagenArticuloCheesyVeggies");
                    const descripcionArticulo = document.getElementById("textoDescripcionArticuloCheesyVeggies");
                    let articulo = {
                        name: nombreArticulo.textContent,
                        price: precioArticulo.textContent,
                        description: descripcionArticulo.textContent,
                        image: imagenArticulo.getAttribute("src")
                    };
                    console.log("Articulo a agregar ",articulo);
                    props.agregarArticulo(articulo);

                    //Se le indica al usuario que el articulo fue agregado una vez presiona el botón
                            const textoBoton = document.getElementById("textoBotonCheesyVeggies");
                            textoBoton.textContent="Agregado Al Carrito!";
                            setTimeout(()=>{textoBoton.textContent="Agregar"}, 700)}}
                bgColor={'wheat'}
                color="lightsalmon"
                rightIcon={<BsFillCartFill/>}>
                    <Text id="textoBotonCheesyVeggies" fontSize={"20px"}>Agregar</Text>
                </Box>

                        
            </Stack>
         </Box>


    )
}






















export function ChickenPoppers(props){
    return(

        <Box bgColor={'oldlace'} borderRadius='35px' overflow={"hidden"} borderWidth="10px" borderColor={"ivory"} boxSize="400px">
            <Stack spacing={2}>
                <Image 
                    id="imagenArticuloChickenPoppers"
                    src={chickenPoppersImagen} 
                    boxSize="200px"
                    borderRadius='330px'
                    w={"366"}
                    h={"200"}
                />
                <Text 
                id="textoNombreArticuloChickenPoppers"
                align="center"
                fontSize="20px"
                casing={"uppercase"}
                decoration={"underline dotted"}
                >
                  Chicken Poppers
                </Text>

                <Text 
                id="textoDescripcionArticuloChickenPoppers"
                align="center"
                fontSize="13px"
                >
                  12 deliciosos trozos de pechuga de pollo apanados, horneados y acompañados de salsa BBQ.
                </Text>

                <Text
                id="textoPrecioArticuloChickenPoppers"
                align={"center"}
                fontSize={"15px"}
                as={'b'}>
                    $5.390
                
                </Text>

                <Box
                as={Button}
                onClick={()=>{
                    //Se guarda la info del articulo, se guarda en un objeto y se agrega al carrito
                    const nombreArticulo = document.getElementById("textoNombreArticuloChickenPoppers");
                    const precioArticulo = document.getElementById("textoPrecioArticuloChickenPoppers");
                    const imagenArticulo = document.getElementById("imagenArticuloChickenPoppers");
                    const descripcionArticulo = document.getElementById("textoDescripcionArticuloChickenPoppers");
                    let articulo = {
                        name: nombreArticulo.textContent,
                        price: precioArticulo.textContent,
                        description: descripcionArticulo.textContent,
                        image: imagenArticulo.getAttribute("src")
                    };
                    console.log("Articulo a agregar ",articulo);
                    props.agregarArticulo(articulo);

                    //Se le indica al usuario que el articulo fue agregado una vez presiona el botón
                            const textoBoton = document.getElementById("textoBotonChickenPoppers");
                            textoBoton.textContent="Agregado Al Carrito!";
                            setTimeout(()=>{textoBoton.textContent="Agregar"}, 700)}}
                bgColor={'wheat'}
                color="lightsalmon"
                rightIcon={<BsFillCartFill/>}>
                    <Text id="textoBotonChickenPoppers" fontSize={"20px"}>Agregar</Text>
                </Box>

                        
            </Stack>
         </Box>


    )
}




















export function AlitasPollo(props){
    return(

        <Box bgColor={'oldlace'} borderRadius='35px' overflow={"hidden"} borderWidth="10px" borderColor={"ivory"} boxSize="400px">
            <Stack spacing={2}>
                <Image 
                    id="imagenArticuloAlitasPollo"
                    src={alitasPolloImagen} 
                    boxSize="200px"
                    borderRadius='330px'
                    w={"366"}
                    h={"200"}
                />
                <Text 
                id="textoNombreArticuloAlitasPollo"
                align="center"
                fontSize="20px"
                casing={"uppercase"}
                decoration={"underline dotted"}
                >
                  Alitas de Pollo
                </Text>

                <Text 
                id="textoDescripcionArticuloAlitasPollo"
                align="center"
                fontSize="13px"
                >
                  8 deliciosas alitas de pollo americanas acompañadas de cups de salsa BBQ.
                </Text>

                <Text
                id="textoPrecioArticuloAlitasPollo"
                align={"center"}
                fontSize={"15px"}
                as={'b'}>
                    $5.290
                
                </Text>

                <Box
                as={Button}
                onClick={()=>{
                    //Se guarda la info del articulo, se guarda en un objeto y se agrega al carrito
                    const nombreArticulo = document.getElementById("textoNombreArticuloAlitasPollo");
                    const precioArticulo = document.getElementById("textoPrecioArticuloAlitasPollo");
                    const imagenArticulo = document.getElementById("imagenArticuloAlitasPollo");
                    const descripcionArticulo = document.getElementById("textoDescripcionArticuloAlitasPollo");
                    let articulo = {
                        name: nombreArticulo.textContent,
                        price: precioArticulo.textContent,
                        description: descripcionArticulo.textContent,
                        image: imagenArticulo.getAttribute("src")
                    };
                    console.log("Articulo a agregar ",articulo);
                    props.agregarArticulo(articulo);

                    //Se le indica al usuario que el articulo fue agregado una vez presiona el botón
                            const textoBoton = document.getElementById("textoBotonAlitasPollo");
                            textoBoton.textContent="Agregado Al Carrito!";
                            setTimeout(()=>{textoBoton.textContent="Agregar"}, 700)}}
                bgColor={'wheat'}
                color="lightsalmon"
                rightIcon={<BsFillCartFill/>}>
                    <Text id="textoBotonAlitasPollo" fontSize={"20px"}>Agregar</Text>
                </Box>

                        
            </Stack>
         </Box>


    )
}



















































import { Box, Button, Image, Stack, Text } from "@chakra-ui/react";
import { BsFillCartFill } from "react-icons/bs";
import pepsi350Imagen from "../assets/pepsi-350cc-lata.jpg"
import pepsi1LImagen from "../assets/pepsi 1,5.jpeg"
import pepsiLight350Imagen from "../assets/pepsi light 350.png"
import pepsiLight1LImagen from "../assets/pepsi light 1,5.jpg"
import fanta350Imagen from "../assets/FANTA-350CC-LATA.jpg"
import fanta1LImagen from "../assets/fanta 1,5.jpg"
import Cachantun500SinGasImagen from "../assets/cachantun 500 sin gas.jpg"
import Cachantun500ConGasImagen from "../assets/cachantun 500 con gas.jpg"
import JugoWatts1LDuraznoImagen from "../assets/watts-durazno 1,5.jpeg"
import JugoWatts1LPiñaImagen from "../assets/watts-piña-1,5.png"

export function Pepsi350(props){
    return(

        <Box id="Pepsi350" bgColor={'oldlace'} borderRadius='35px' overflow={"hidden"} borderWidth="10px" borderColor={"ivory"} boxSize="400px">
            <Stack spacing={2}>
                <Image 
                    id="imagenArticuloPepsi350"
                    src={pepsi350Imagen} 
                    boxSize="200px"
                    borderRadius='330px'
                    w={"366"}
                    h={"200"}
                />
                <Text
                id="textoNombreArticuloPepsi350" 
                align="center"
                fontSize="20px"
                casing={"uppercase"}
                decoration={"underline dotted"}
                >
                    Pepsi 350 cc
                </Text>

                <Text
                id="textoPrecioArticuloPepsi350"
                align={"center"}
                fontSize={"15px"}
                as={'b'}>
                    $1490
                
                </Text>

                <Box
                as={Button}
                onClick={()=>{
                            //Se guarda la info del articulo, se guarda en un objeto y se agrega al carrito
                            const nombreArticulo = document.getElementById("textoNombreArticuloPepsi350");
                            const precioArticulo = document.getElementById("textoPrecioArticuloPepsi350");
                            const imagenArticulo = document.getElementById("imagenArticuloPepsi350");
                            let articulo = {
                                name: nombreArticulo.textContent,
                                price: precioArticulo.textContent,
                                description: "",
                                image: imagenArticulo.getAttribute("src")
                            };
                            console.log("Articulo a agregar ",articulo);
                            props.agregarArticulo(articulo);

                            //Se le indica al usuario que el articulo fue agregado una vez presiona el botón
                            const textoBoton = document.getElementById("textoBotonAgregar");
                            textoBoton.textContent="Agregado Al Carrito!";
                            setTimeout(()=>{textoBoton.textContent="Agregar"}, 700)}}
                bgColor={'wheat'}
                color="lightsalmon"
                rightIcon={<BsFillCartFill/>}>
                    <Text id="textoBotonAgregar" fontSize={"20px"}>Agregar</Text>
                </Box>

                        
            </Stack>
         </Box>


    )
}
































export function Pepsi1L(props){
    return(

        <Box bgColor={'oldlace'} borderRadius='35px' overflow={"hidden"} borderWidth="10px" borderColor={"ivory"} boxSize="400px">
            <Stack spacing={2}>
                <Image 
                    id="imagenArticuloPepsi1L"
                    src={pepsi1LImagen} 
                    boxSize="200px"
                    borderRadius='330px'
                    w={"366"}
                    h={"200"}
                />
                <Text 
                id="textoNombreArticuloPepsi1L" 
                align="center"
                fontSize="20px"
                casing={"uppercase"}
                decoration={"underline dotted"}
                >
                    Pepsi 1.5 L
                </Text>

                <Text
                id="textoPrecioArticuloPepsi1L"
                align={"center"}
                fontSize={"15px"}
                as={'b'}>
                    $2990
                
                </Text>

                <Box
                as={Button}
                onClick={()=>{
                    //Se guarda la info del articulo, se guarda en un objeto y se agrega al carrito
                    const nombreArticulo = document.getElementById("textoNombreArticuloPepsi1L");
                    const precioArticulo = document.getElementById("textoPrecioArticuloPepsi1L");
                    const imagenArticulo = document.getElementById("imagenArticuloPepsi1L");
                    let articulo = {
                        name: nombreArticulo.textContent,
                        price: precioArticulo.textContent,
                        description: "",
                        image: imagenArticulo.getAttribute("src")
                    };
                    console.log("Articulo a agregar ",articulo);
                    props.agregarArticulo(articulo);

                    //Se le indica al usuario que el articulo fue agregado una vez presiona el botón
                            const textoBoton = document.getElementById("textoBotonBebidaPepsi1L");
                            textoBoton.textContent="Agregado Al Carrito!";
                            setTimeout(()=>{textoBoton.textContent="Agregar"}, 700)}}
                bgColor={'wheat'}
                color="lightsalmon"
                rightIcon={<BsFillCartFill/>}>
                    <Text id="textoBotonBebidaPepsi1L" fontSize={"20px"}>Agregar</Text>
                </Box>

                        
            </Stack>
         </Box>


    )
}

















export function PepsiLight350(props){
    return(

        <Box bgColor={'oldlace'} borderRadius='35px' overflow={"hidden"} borderWidth="10px" borderColor={"ivory"} boxSize="400px">
            <Stack spacing={2}>
                <Image 
                    id="imagenArticuloPepsiLight350"
                    src={pepsiLight350Imagen} 
                    boxSize="200px"
                    borderRadius='330px'
                    w={"366"}
                    h={"200"}
                />
                <Text 
                id="textoNombreArticuloPepsiLight350" 
                align="center"
                fontSize="20px"
                casing={"uppercase"}
                decoration={"underline dotted"}
                >
                    Pepsi Light 350 cc
                </Text>

                <Text
                id="textoPrecioArticuloPepsiLight350"
                align={"center"}
                fontSize={"15px"}
                as={'b'}>
                    $1490
                
                </Text>

                <Box
                as={Button}
                onClick={()=>{
                    //Se guarda la info del articulo, se guarda en un objeto y se agrega al carrito
                    const nombreArticulo = document.getElementById("textoNombreArticuloPepsiLight350");
                    const precioArticulo = document.getElementById("textoPrecioArticuloPepsiLight350");
                    const imagenArticulo = document.getElementById("imagenArticuloPepsiLight350");
                    let articulo = {
                        name: nombreArticulo.textContent,
                        price: precioArticulo.textContent,
                        description: "",
                        image: imagenArticulo.getAttribute("src")
                    };
                    console.log("Articulo a agregar ",articulo);
                    props.agregarArticulo(articulo);

                    //Se le indica al usuario que el articulo fue agregado una vez presiona el botón
                            const textoBoton = document.getElementById("textoBotonBebidaPepsiLight350");
                            textoBoton.textContent="Agregado Al Carrito!";
                            setTimeout(()=>{textoBoton.textContent="Agregar"}, 700)}}
                bgColor={'wheat'}
                color="lightsalmon"
                rightIcon={<BsFillCartFill/>}>
                    <Text id="textoBotonBebidaPepsiLight350" fontSize={"20px"}>Agregar</Text>
                </Box>

                        
            </Stack>
         </Box>


    )
}



























export function PepsiLight1L(props){
    return(

        <Box bgColor={'oldlace'} borderRadius='35px' overflow={"hidden"} borderWidth="10px" borderColor={"ivory"} boxSize="400px">
            <Stack spacing={2}>
                <Image 
                    id="imagenArticuloPepsiLight1L"
                    src={pepsiLight1LImagen} 
                    boxSize="200px"
                    borderRadius='330px'
                    w={"366"}
                    h={"200"}
                />
                <Text 
                id="textoNombreArticuloPepsiLight1L" 
                align="center"
                fontSize="20px"
                casing={"uppercase"}
                decoration={"underline dotted"}
                >
                    Pepsi Light 1.5 L
                </Text>

                <Text
                id="textoPrecioArticuloPepsiLight1L"
                align={"center"}
                fontSize={"15px"}
                as={'b'}>
                    $2990
                
                </Text>

                <Box
                as={Button}
                onClick={()=>{
                    //Se guarda la info del articulo, se guarda en un objeto y se agrega al carrito
                    const nombreArticulo = document.getElementById("textoNombreArticuloPepsiLight1L");
                    const precioArticulo = document.getElementById("textoPrecioArticuloPepsiLight1L");
                    const imagenArticulo = document.getElementById("imagenArticuloPepsiLight1L");
                    let articulo = {
                        name: nombreArticulo.textContent,
                        price: precioArticulo.textContent,
                        description: "",
                        image: imagenArticulo.getAttribute("src")
                    };
                    console.log("Articulo a agregar ",articulo);
                    props.agregarArticulo(articulo);

                    //Se le indica al usuario que el articulo fue agregado una vez presiona el botón
                    const textoBoton = document.getElementById("textoBotonBebidaPepsiLight1L");
                            textoBoton.textContent="Agregado Al Carrito!";
                            setTimeout(()=>{textoBoton.textContent="Agregar"}, 700)}}
                bgColor={'wheat'}
                color="lightsalmon"
                rightIcon={<BsFillCartFill/>}>
                    <Text id="textoBotonBebidaPepsiLight1L" fontSize={"20px"}>Agregar</Text>
                </Box>

                        
            </Stack>
         </Box>


    )
}
















export function Fanta350(props){
    return(

        <Box bgColor={'oldlace'} borderRadius='35px' overflow={"hidden"} borderWidth="10px" borderColor={"ivory"} boxSize="400px">
            <Stack spacing={2}>
                <Image 
                    id="imagenArticuloFanta350"
                    src={fanta350Imagen} 
                    boxSize="200px"
                    borderRadius='330px'
                    w={"366"}
                    h={"200"}
                />
                <Text 
                id="textoNombreArticuloFanta350" 
                align="center"
                fontSize="20px"
                casing={"uppercase"}
                decoration={"underline dotted"}
                >
                    Fanta 350 cc
                </Text>

                <Text
                id="textoPrecioArticuloFanta350"
                align={"center"}
                fontSize={"15px"}
                as={'b'}>
                    $1490
                
                </Text>

                <Box
                as={Button}
                onClick={()=>{
                    //Se guarda la info del articulo, se guarda en un objeto y se agrega al carrito
                    const nombreArticulo = document.getElementById("textoNombreArticuloFanta350");
                    const precioArticulo = document.getElementById("textoPrecioArticuloFanta350");
                    const imagenArticulo = document.getElementById("imagenArticuloFanta350");
                    let articulo = {
                        name: nombreArticulo.textContent,
                        price: precioArticulo.textContent,
                        description: "",
                        image: imagenArticulo.getAttribute("src")
                    };
                    console.log("Articulo a agregar ",articulo);
                    props.agregarArticulo(articulo);

                    //Se le indica al usuario que el articulo fue agregado una vez presiona el botón
                    const textoBoton = document.getElementById("textoBotonBebidaFanta350");
                            textoBoton.textContent="Agregado Al Carrito!";
                            setTimeout(()=>{textoBoton.textContent="Agregar"}, 700)}}
                bgColor={'wheat'}
                color="lightsalmon"
                rightIcon={<BsFillCartFill/>}>
                    <Text id="textoBotonBebidaFanta350" fontSize={"20px"}>Agregar</Text>
                </Box>

                        
            </Stack>
         </Box>


    )
}

















export function Fanta1L(props){
    return(

        <Box bgColor={'oldlace'} borderRadius='35px' overflow={"hidden"} borderWidth="10px" borderColor={"ivory"} boxSize="400px">
            <Stack spacing={2}>
                <Image 
                    id="imagenArticuloFanta1L"
                    src={fanta1LImagen} 
                    boxSize="200px"
                    borderRadius='330px'
                    w={"366"}
                    h={"200"}
                />
                <Text 
                id="textoNombreArticuloFanta1L" 
                align="center"
                fontSize="20px"
                casing={"uppercase"}
                decoration={"underline dotted"}
                >
                    Fanta 1.5 L
                </Text>

                <Text
                id="textoPrecioArticuloFanta1L"
                align={"center"}
                fontSize={"15px"}
                as={'b'}>
                    $2990
                
                </Text>

                <Box
                as={Button}
                onClick={()=>{
                    //Se guarda la info del articulo, se guarda en un objeto y se agrega al carrito
                    const nombreArticulo = document.getElementById("textoNombreArticuloFanta1L");
                    const precioArticulo = document.getElementById("textoPrecioArticuloFanta1L");
                    const imagenArticulo = document.getElementById("imagenArticuloFanta1L");
                    let articulo = {
                        name: nombreArticulo.textContent,
                        price: precioArticulo.textContent,
                        description: "",
                        image: imagenArticulo.getAttribute("src")
                    };
                    console.log("Articulo a agregar ",articulo);
                    props.agregarArticulo(articulo);

                    //Se le indica al usuario que el articulo fue agregado una vez presiona el botón
                            const textoBoton = document.getElementById("textoBotonBebidaFanta1L");
                            textoBoton.textContent="Agregado Al Carrito!";
                            setTimeout(()=>{textoBoton.textContent="Agregar"}, 700)}}
                bgColor={'wheat'}
                color="lightsalmon"
                rightIcon={<BsFillCartFill/>}>
                    <Text id="textoBotonBebidaFanta1L" fontSize={"20px"}>Agregar</Text>
                </Box>

                        
            </Stack>
         </Box>


    )
}




















export function Cachantun500SinGas(props){
    return(

        <Box bgColor={'oldlace'} borderRadius='35px' overflow={"hidden"} borderWidth="10px" borderColor={"ivory"} boxSize="400px">
            <Stack spacing={2}>
                <Image 
                    id="imagenArticuloCachantun500SinGas"
                    src={Cachantun500SinGasImagen} 
                    boxSize="200px"
                    borderRadius='330px'
                    w={"366"}
                    h={"200"}
                />
                <Text 
                id="textoNombreArticuloCachantun500SinGas" 
                align="center"
                fontSize="20px"
                casing={"uppercase"}
                decoration={"underline dotted"}
                >
                    Cachantun Sin Gas 500 cc 
                </Text>

                <Text
                id="textoPrecioArticuloCachantun500SinGas"
                align={"center"}
                fontSize={"15px"}
                as={'b'}>
                    $1190
                
                </Text>

                <Box
                as={Button}
                onClick={()=>{
                    //Se guarda la info del articulo, se guarda en un objeto y se agrega al carrito
                    const nombreArticulo = document.getElementById("textoNombreArticuloCachantun500SinGas");
                    const precioArticulo = document.getElementById("textoPrecioArticuloCachantun500SinGas");
                    const imagenArticulo = document.getElementById("imagenArticuloCachantun500SinGas");
                    let articulo = {
                        name: nombreArticulo.textContent,
                        price: precioArticulo.textContent,
                        description: "",
                        image: imagenArticulo.getAttribute("src")
                    };
                    console.log("Articulo a agregar ",articulo);
                    props.agregarArticulo(articulo);

                    //Se le indica al usuario que el articulo fue agregado una vez presiona el botón
                            const textoBoton = document.getElementById("textoBotonBebidaCachantun500SinGas");
                            textoBoton.textContent="Agregado Al Carrito!";
                            setTimeout(()=>{textoBoton.textContent="Agregar"}, 700)}}
                bgColor={'wheat'}
                color="lightsalmon"
                rightIcon={<BsFillCartFill/>}>
                    <Text id="textoBotonBebidaCachantun500SinGas" fontSize={"20px"}>Agregar</Text>
                </Box>

                        
            </Stack>
         </Box>


    )
}

























export function Cachantun500ConGas(props){
    return(

        <Box bgColor={'oldlace'} borderRadius='35px' overflow={"hidden"} borderWidth="10px" borderColor={"ivory"} boxSize="400px">
            <Stack spacing={2}>
                <Image 
                    id="imagenArticuloCachantun500ConGas"
                    src={Cachantun500ConGasImagen} 
                    boxSize="200px"
                    borderRadius='330px'
                    w={"366"}
                    h={"200"}
                />
                <Text 
                id="textoNombreArticuloCachantun500ConGas" 
                align="center"
                fontSize="20px"
                casing={"uppercase"}
                decoration={"underline dotted"}
                >
                    Cachantun Con Gas 500 cc 
                </Text>

                <Text
                id="textoPrecioArticuloCachantun500ConGas"
                align={"center"}
                fontSize={"15px"}
                as={'b'}>
                    $1190
                
                </Text>

                <Box
                as={Button}
                onClick={()=>{
                    //Se guarda la info del articulo, se guarda en un objeto y se agrega al carrito
                    const nombreArticulo = document.getElementById("textoNombreArticuloCachantun500ConGas");
                    const precioArticulo = document.getElementById("textoPrecioArticuloCachantun500ConGas");
                    const imagenArticulo = document.getElementById("imagenArticuloCachantun500ConGas");
                    let articulo = {
                        name: nombreArticulo.textContent,
                        price: precioArticulo.textContent,
                        description: "",
                        image: imagenArticulo.getAttribute("src")
                    };
                    console.log("Articulo a agregar ",articulo);
                    props.agregarArticulo(articulo);

                    //Se le indica al usuario que el articulo fue agregado una vez presiona el botón
                            const textoBoton = document.getElementById("textoBotonBebidaCachantun500ConGas");
                            textoBoton.textContent="Agregado Al Carrito!";
                            setTimeout(()=>{textoBoton.textContent="Agregar"}, 700)}}
                bgColor={'wheat'}
                color="lightsalmon"
                rightIcon={<BsFillCartFill/>}>
                    <Text id="textoBotonBebidaCachantun500ConGas" fontSize={"20px"}>Agregar</Text>
                </Box>

                        
            </Stack>
         </Box>


    )
}























export function JugoWatts1LDurazno(props){
    return(

        <Box bgColor={'oldlace'} borderRadius='35px' overflow={"hidden"} borderWidth="10px" borderColor={"ivory"} boxSize="400px">
            <Stack spacing={2}>
                <Image 
                    id="imagenArticuloJugoWatts1LDurazno"
                    src={JugoWatts1LDuraznoImagen} 
                    boxSize="200px"
                    borderRadius='330px'
                    w={"366"}
                    h={"200"}
                />
                <Text 
                id="textoNombreArticuloJugoWatts1LDurazno" 
                align="center"
                fontSize="20px"
                casing={"uppercase"}
                decoration={"underline dotted"}
                >
                  Jugo Watts 1.5 L Durazno 
                </Text>

                <Text
                id="textoPrecioArticuloJugoWatts1LDurazno"
                align={"center"}
                fontSize={"15px"}
                as={'b'}>
                    $2290
                
                </Text>

                <Box
                as={Button}
                onClick={()=>{
                    //Se guarda la info del articulo, se guarda en un objeto y se agrega al carrito
                    const nombreArticulo = document.getElementById("textoNombreArticuloJugoWatts1LDurazno");
                    const precioArticulo = document.getElementById("textoPrecioArticuloJugoWatts1LDurazno");
                    const imagenArticulo = document.getElementById("imagenArticuloJugoWatts1LDurazno");
                    let articulo = {
                        name: nombreArticulo.textContent,
                        price: precioArticulo.textContent,
                        description: "",
                        image: imagenArticulo.getAttribute("src")
                    };
                    console.log("Articulo a agregar ",articulo);
                    props.agregarArticulo(articulo);

                    //Se le indica al usuario que el articulo fue agregado una vez presiona el botón
                            const textoBoton = document.getElementById("textoBotonBebidaJugoWatts1LDurazno");
                            textoBoton.textContent="Agregado Al Carrito!";
                            setTimeout(()=>{textoBoton.textContent="Agregar"}, 700)}}
                bgColor={'wheat'}
                color="lightsalmon"
                rightIcon={<BsFillCartFill/>}>
                    <Text id="textoBotonBebidaJugoWatts1LDurazno" fontSize={"20px"}>Agregar</Text>
                </Box>

                        
            </Stack>
         </Box>


    )
}


















export function JugoWatts1LPiña(props){
    return(

        <Box bgColor={'oldlace'} borderRadius='35px' overflow={"hidden"} borderWidth="10px" borderColor={"ivory"} boxSize="400px">
            <Stack spacing={2}>
                <Image
                    id="imagenArticuloJugoWatts1LPiña" 
                    src={JugoWatts1LPiñaImagen} 
                    boxSize="200px"
                    borderRadius='330px'
                    w={"366"}
                    h={"200"}
                />
                <Text
                id="textoNombreArticuloJugoWatts1LPiña"  
                align="center"
                fontSize="20px"
                casing={"uppercase"}
                decoration={"underline dotted"}
                >
                  Jugo Watts 1.5 L Piña
                </Text>

                <Text
                id="textoPrecioArticuloJugoWatts1LPiña"
                align={"center"}
                fontSize={"15px"}
                as={'b'}>
                    $2.290
                
                </Text>

                <Box
                as={Button}
                onClick={()=>{
                    //Se guarda la info del articulo, se guarda en un objeto y se agrega al carrito
                    const nombreArticulo = document.getElementById("textoNombreArticuloJugoWatts1LPiña");
                    const precioArticulo = document.getElementById("textoPrecioArticuloJugoWatts1LPiña");
                    const imagenArticulo = document.getElementById("imagenArticuloJugoWatts1LPiña");
                    let articulo = {
                        name: nombreArticulo.textContent,
                        price: precioArticulo.textContent,
                        description: "",
                        image: imagenArticulo.getAttribute("src")
                    };
                    console.log("Articulo a agregar ",articulo);
                    props.agregarArticulo(articulo);

                    //Se le indica al usuario que el articulo fue agregado una vez presiona el botón
                            const textoBoton = document.getElementById("textoBotonBebidaJugoWatts1LPiña");
                            textoBoton.textContent="Agregado Al Carrito!";
                            setTimeout(()=>{textoBoton.textContent="Agregar"}, 700)}}
                bgColor={'wheat'}
                color="lightsalmon"
                rightIcon={<BsFillCartFill/>}>
                    <Text id="textoBotonBebidaJugoWatts1LPiña" fontSize={"20px"}>Agregar</Text>
                </Box>

                        
            </Stack>
         </Box>


    )
}





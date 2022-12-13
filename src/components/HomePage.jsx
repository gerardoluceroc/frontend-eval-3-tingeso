import { Box } from "@chakra-ui/react";
import Footer from "./Footer";
import ImageSlider from "./ImageSlider";
import { MenuBarra } from "./MenuBarra";

export function HomePage(){
    return(

        <>

            <Box bgColor={'lightsalmon'} h={739}>
                <MenuBarra 
                largoCarritoBebidas = {[]} carritoBebidas={[]}
                largoCarritoSalsas = {[]} carritoSalsas={[]}
                largoCarritoAcompañamientos = {[]} carritoAcompañamientos ={[]}
                largoCarritoPizzas = {[]} carritoPizzas ={[]}
                actualizarLargoCarritoDeCompras={[]}
                actualizarCarritoDeCompras={[]}
                />
                <ImageSlider/>
                <Footer/>
            </Box>
        
        </>
    )
}
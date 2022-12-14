import { Box, Container, HStack, Stack, Text } from "@chakra-ui/react";
import { CatalogoHome } from "./CatalogoHome";
import Footer from "./Footer";
import ImageSlider from "./ImageSlider";
import { MenuBarra } from "./MenuBarra";

export function HomePage(){
    return(

        <>

            <Box bgColor={'lightsalmon'} h={1639}>
                <MenuBarra 
                largoCarritoBebidas = {[]} carritoBebidas={[]}
                largoCarritoSalsas = {[]} carritoSalsas={[]}
                largoCarritoAcompañamientos = {[]} carritoAcompañamientos ={[]}
                largoCarritoPizzas = {[]} carritoPizzas ={[]}
                actualizarLargoCarritoDeCompras={[]}
                actualizarCarritoDeCompras={[]}
                />
                <ImageSlider/>
                <Container>
                    <Text 
                    align={"center"}
                    fontSize={"70px"}
                    as='b'
                    color={"ivory"} >
                        Mas Populares
                    </Text>
                </Container>
                <Stack direction={"column"} spacing={10}>
                    
                    <CatalogoHome/>
                    <Footer/>
                </Stack>
            </Box>
        
        </>
    )
}
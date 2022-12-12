import { Box } from "@chakra-ui/react";
import Footer from "./Footer";
import ImageSlider from "./ImageSlider";
import { MenuBarra } from "./MenuBarra";

export function HomePage(){
    return(

        <>

            <Box bgColor={'lightsalmon'} h={739}>
                <MenuBarra carritoBebidas = {[]}/>
                <ImageSlider/>
                <Footer/>
            </Box>
        
        </>
    )
}
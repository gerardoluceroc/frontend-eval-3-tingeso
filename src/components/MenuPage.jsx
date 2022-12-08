import { Box, Button, Flex, HStack, Image, Spacer, Text } from "@chakra-ui/react";
import Footer from "./Footer";
import { MenuBarra } from "./MenuBarra";
import pizzaAmericanaImagen from "../assets/pizza americana.jpg"

export function MenuPage(){
    return(
        
        <>  
            <Box bgColor={'lightsalmon'} h={739}>
                <MenuBarra/>
                <HStack direction='row' spacing={10}>
                    <Box bgColor={'oldlace'} borderRadius='50px'>
                        <Image 
                        src={pizzaAmericanaImagen} 
                        boxSize="200px"
                        borderRadius='30px'
                        w={"366"}
                        />
                        <Text>Texto</Text>
                        <Box as={Button}/>
                    </Box>
                    
                    <Box>
                        box 2
                    </Box>



                </HStack>
                
            </Box>
            <Footer/>
        </>
    )
}
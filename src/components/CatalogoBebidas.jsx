import { Container, HStack, Stack } from "@chakra-ui/react";
import { Fanta1L, Fanta350, Pepsi1L, Pepsi350, PepsiLight1L, PepsiLight350, Cachantun500SinGas, Cachantun500ConGas, JugoWatts1LDurazno, JugoWatts1LPiña} from "./BebidaItem";

export function CatalogoBebidas(){
    return(

        <Container maxWidth={"max"} >
            
            <Stack direction={"column"} spacing="5">
            <HStack spacing={10}>
                <Pepsi350/>  
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
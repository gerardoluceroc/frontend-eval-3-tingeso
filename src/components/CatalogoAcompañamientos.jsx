import { Container, HStack, Stack } from "@chakra-ui/react";
import { AlitasPollo, CheesyVeggies, ChickenPoppers, PalitosAjo } from "./ItemAcompañamiento";

export function CatalogoAcompañamientos(){
    return(

        <Container maxWidth={"max"} >
            
            <Stack direction={"column"} spacing="5">
            <HStack spacing={10}>
                <PalitosAjo/>
                <ChickenPoppers/>
                <CheesyVeggies/>
                <AlitasPollo/>
                
            </HStack>

            </Stack>        

        </Container>



    )
}
import { Container, HStack, Stack } from "@chakra-ui/react";
import { SalsaBBQ, SalsaGarlic, SalsaMiel, SalsaTomate } from "./SalsaItem";

export function CatalogoSalsas(){
    return(

        <Container maxWidth={"max"} >
            
            <Stack direction={"column"} spacing="5">
            <HStack spacing={10}>
                <SalsaBBQ/>
                <SalsaGarlic/>
                <SalsaMiel/>
                <SalsaTomate/>
            </HStack>

            </Stack>        

        </Container>



    )
}
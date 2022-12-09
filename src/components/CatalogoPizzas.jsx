import { Box, Container, Flex, HStack, Spacer, Stack } from "@chakra-ui/react";
import { ArmaTuPizzaItem, PizzaAmericana, PizzaBBQChicken, PizzaCampesina, PizzaHawaiana, PizzaMechadaBBQ, PizzaVeganQueen } from "./PizzaItem";

export function CatalogoPizzas(){
    return(

        <Container maxWidth={"max"} >
            
            <Stack direction={"column"} spacing="5">
            <HStack spacing={10}>          
            <PizzaAmericana/>
            <PizzaBBQChicken/>
            <PizzaCampesina/>
            </HStack>

            <HStack spacing={10}> 
            <PizzaHawaiana/> 
            <PizzaMechadaBBQ/>   
            <PizzaVeganQueen/>
            </HStack>
            <ArmaTuPizzaItem/>
            </Stack>        

        </Container>



    )
}
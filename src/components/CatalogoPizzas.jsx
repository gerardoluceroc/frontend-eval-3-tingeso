import { Box, Container, Flex, HStack, Spacer, Stack } from "@chakra-ui/react";
import { ArmaTuPizzaItem, PizzaAmericana, PizzaBBQChicken, PizzaCampesina, PizzaCordillerana, PizzaHawaiana, PizzaMechadaBBQ, PizzaSuperPepperoni, PizzaVeganQueen } from "./PizzaItem";

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
            <HStack spacing={10}> 
            <PizzaCordillerana/> 
            <PizzaSuperPepperoni/>   
            <ArmaTuPizzaItem/>
            </HStack>
            </Stack>        

        </Container>



    )
}
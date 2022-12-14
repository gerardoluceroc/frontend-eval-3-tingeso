import { Container, HStack, Stack, Text } from "@chakra-ui/react";
import { Pepsi350 } from "./BebidaItem";
import { ChickenPoppersHome, PalitosAjoHome, Pepsi1LHome, Pepsi350Home, PizzaAmericanaHome, PizzaCampesinaHome } from "./ItemCatalogoHome";
import { PizzaCampesina } from "./PizzaItem";


export function CatalogoHome(props){



    return(

        <Container maxWidth={"max"} py={5}>
            
            <Stack direction={"column"} spacing="5">
            <HStack spacing={10}>    
            <PizzaAmericanaHome/> 
            <PalitosAjoHome/> 
            <PizzaCampesinaHome/>  

            
            </HStack>

            <HStack spacing={10}>    
            <ChickenPoppersHome/> 
            <Pepsi350Home/> 
            <Pepsi1LHome/>  

            
            </HStack>
            


            </Stack>        

        </Container>



    )
}
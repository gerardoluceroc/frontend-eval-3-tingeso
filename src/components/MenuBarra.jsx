import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Button,
    Box,
    Flex
} from '@chakra-ui/react'

export function MenuBarra() {
  return (
    <>

    <Box bg='tomato' w='100%' p={5} color='white'>
      <Menu>
        <Button as={Button} colorScheme={'red'} px={'20'} >
          Promociones
        </Button>
      </Menu>


    </Box>


    <Menu >
      <MenuButton as={Button}>Menu button </MenuButton>
      <MenuButton as={Button}>Menu button </MenuButton>
      
      

    </Menu>
    <Box bg='tomato' w='100%' p={4} color='white'>
  This is the Box
</Box>
      
        
    </>
  );
}

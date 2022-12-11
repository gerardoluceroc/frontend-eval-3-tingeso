import { Box, HStack, useRadio, useRadioGroup } from "@chakra-ui/react";

// 1. Create a component that consumes the `useRadio` hook
export function RadioCard(props) {
    const { getInputProps, getCheckboxProps } = useRadio(props)
  
    const input = getInputProps()
    const checkbox = getCheckboxProps()
  
    return (
      <Box as='label'>
        <input {...input} />
        <Box
          {...checkbox}
          cursor='pointer'
          borderWidth='1px'
          borderRadius='md'
          boxShadow='md'
          _checked={{
            bg: 'lightsalmon',
            color: 'oldlace',
            borderColor: 'orange',
          }}
          _focus={{
            boxShadow: 'outline',
          }}
          px={3.5}
          py={1.5}
        >
          {props.children}
        </Box>
      </Box>
    )
  }

























































  // Step 2: Use the `useRadioGroup` hook to control a group of custom radios.
export function OpcionesBotones(props) {

    console.log("PROPPPSSS ",props);
    const options = props.opciones
  
    const { getRootProps, getRadioProps } = useRadioGroup({
      name: 'framework',
      defaultValue: 'react',
      onChange: console.log,
    })
  
    const group = getRootProps()
    
  
    return (
      <HStack {...group}>
        {options.map((value) => {
          const radio = getRadioProps({ value })
          return (
            <RadioCard key={value} {...radio}>
              {value}
            </RadioCard>
          )
        })}
      </HStack>
    )
  }
import { Box, Button, FormControl, FormLabel, Input, Text } from '@chakra-ui/react'
import React from 'react'
import AuthSideBar from '../Components/AuthSideBar'
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink } from '@chakra-ui/react'

function Login() {
  return (
    <Box
      display='flex'
      flexDir={{base : 'column-reverse' , md : 'column-reverse' , lg:'row'}}
      h={{base : '100vh'}}
    >
      <AuthSideBar />
      <Box
        display='flex'
        flexDir='column'
        height='100vh'
        gap={{base : '10px' , md : '10px' , lg:'50px'}}
        p={{base : '50px' , md : '50px 200px' , lg:'100px 200px'}}
        flex='1'
      >
        <Box>
          <Text
            fontSize='2.5em'
            fontWeight='500'
            color='#0E0E0E'
          >Login</Text>
          <Text
            color='grey'
          >Connect to your account</Text>
        </Box>
        <Box
          display='flex'
          flexDir='column'
          alignItems='center'
          gap='20px'

        >
          <FormControl isRequired>
            <FormLabel>E-mail : </FormLabel>
            <Input placeholder='E-mail' />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Password : </FormLabel>
            <Input placeholder='Password' />
          </FormControl>
          <Button
            colorScheme='blue'
            w='100%'
          >Login</Button>
        </Box>
        <ChakraLink as={ReactRouterLink} to='/signup'>
          <Text
            color='grey'
          >Create account</Text>
        </ChakraLink>
      </Box>
    </Box>
  )
}

export default Login

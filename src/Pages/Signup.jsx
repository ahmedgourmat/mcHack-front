import { Box, Button, FormControl, FormLabel, Input, Text } from '@chakra-ui/react';
import React from 'react';
import AuthSideBar from '../Components/AuthSideBar';

function Signup() {
  return (
    <Box
      display='flex'
      flexDir={{ base: 'column-reverse', md: 'column-reverse', lg: 'row' }}
      justifyItems={{ base: 'flex-start', md: 'center', lg: 'center' }}
      h={{ base: '100%', md: '100vh', lg: '100vh' }}
    >
      <AuthSideBar />
      <Box
        display='flex'
        flex='1'
        flexDir='column'
        minHeight='100vh' 
        width={{ base: '100%', md: '50%', lg: '50%' }} 
        p={{ base: '5px', md: '5px 50px', lg: '5px 200px' }}
        justifyContent='center' 
      >
        <Box
          mb='5px'
        >
          <Text fontSize='2em' fontWeight='500' color='#0E0E0E'>Sign up</Text>
          <Text color='grey'>Create your account</Text>
        </Box>
        <Box
          display='flex'
          flexDir='column'
          alignItems='center'
          gap='5px'
          width='100%' 
        >
          <FormControl isRequired>
            <FormLabel>UserName</FormLabel>
            <Input placeholder='UserName' />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>FullName</FormLabel>
            <Input placeholder='FullName' />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>E-mail</FormLabel>
            <Input placeholder='E-mail' />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <Input placeholder='Password' />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Confirm password</FormLabel>
            <Input placeholder='Confirm password' />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Company code</FormLabel>
            <Input placeholder='Company code' />
          </FormControl>
          <Button
            colorScheme='blue'
            w='100%'
          >Sign up</Button>
          <Text
            color='grey'
            fontSize='0.9em'
          >by signing up, you acknowledge and agree to Docuvault General terms of use and Privacy Policy.</Text>
        </Box>
      </Box>
    </Box>
  );
}

export default Signup;

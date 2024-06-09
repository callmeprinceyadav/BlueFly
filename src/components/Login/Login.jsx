import React, { useState } from 'react';
import { Box, VStack, Input, Button, Heading, Text } from '@chakra-ui/react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    if (email === storedEmail && password === storedPassword) {
      setError('');
      alert('Login successful');
      // Redirect or perform any further actions
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <Box display="flex" justifyContent="center" padding="20px" marginTop="50px">
      <Box
        display="flex"
        flexDirection="column"
        width={{ base: "90%", md: "50%", lg: "40%" }}
        padding="40px"
        gap="20px"
        justifyContent="center"
        boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
        borderRadius="5px"
      >
        <Heading as="h1" size="lg" textAlign="center" textDecoration="underline" fontFamily="Tiemann, serif">
          LOGIN
        </Heading>
        <VStack spacing={4}>
          <Input
            padding="12px"
            w="l"
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            padding="12px"
            type="password"
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <Text color="red.500" textAlign="center">{error}</Text>}
          <Button
            padding="12px"
            width="50%"
            margin="auto"
            cursor="pointer"
            fontFamily="Helvetica"
            fontWeight="700"
            colorScheme="teal"
            onClick={handleLogin}
          >
            LOGIN
          </Button>
        </VStack>
      </Box>
    </Box>
  );
}

export default Login;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Flex, Text, Button, Box } from '@chakra-ui/react';
import './HomeLog.css'; // Add CSS for additional styling

const HomeLog = () => {
  const navigate = useNavigate();
  const firstName = sessionStorage.getItem('firstName') || 'Guest';

  const onLogout = () => {
    // Clear only session-specific data
    sessionStorage.clear();
    
    // Optionally, if you need to keep some localStorage items, use:
    // localStorage.removeItem('someItem'); // replace 'someItem' with actual item keys

    // Redirect to login page
    navigate('/login');
  };

  return (
    <div className='homelog'>
      <header className="header-container">
        <Flex
          justify="space-between"
          align="center"
          p="10px"
          bgColor="#f0f0f0"
          wrap="wrap"
        >
          <Box flex="1">
            <div className="marquee">
              <Text as="h1" className="welcome-text">
                Welcome to Home Page
              </Text>
            </div>
          </Box>
          <Flex
            align="center"
            justify="center"
            flex="1"
            wrap="wrap"
            textAlign="center"
            direction={{ base: 'column', md: 'row' }}
          >
            <Text
              as="span"
              className="user-name"
            >
              Hello, <span className="name-highlight">{firstName}</span>!
            </Text>
            <Button
              onClick={onLogout}
              colorScheme="blue"
              variant="outline"
              ml={{ base: 0, md: 4 }}
              mt={{ base: 2, md: 0 }}
            >
              Logout
            </Button>
          </Flex>
        </Flex>
      </header>
      <main>
        {/* Add your home page content here */}
      </main>
    </div>
  );
};

export default HomeLog;

import React from 'react';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import NavBar from './Navbar/NavBar';
import { Route, Routes } from 'react-router-dom';
import { LandingPage } from './LandingPage/LandingPage';

import { Card } from './Card/Card';
import { Payment } from './PaymentPage/Payment';
import { Sign } from './SignUpPage/Sign';
import { Login } from './LoginPages/Login';
import { CardDetailPage } from './LandingPage/CardDetails/cardDetailPage';
import LargeWithAppLinksAndSocial from './Footer/Footer';

// import { cardDetailPage } from './LandingPage/CardDetails/cardDetailPage';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box>
        <NavBar />
      </Box>
      <Box>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/signup" element={<Sign />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/Shopping/:id" element={<CardDetailPage />}></Route>
          <Route path="/Shopping/Card" element={<Card />}></Route>
          <Route path="/Shopping/Payment" element={<Payment />}></Route>
        </Routes>
      </Box>
      <Box>
        <LargeWithAppLinksAndSocial />
      </Box>
    </ChakraProvider>
  );
}

export default App;

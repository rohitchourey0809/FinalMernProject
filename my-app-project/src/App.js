import React from 'react';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';

import NavBar from './Navbar/NavBar';
import { Route, Routes } from 'react-router-dom';
import { LandingPage } from './LandingPage/LandingPage';
import { CardDetailPage } from './LandingPage/CardDetails/cardDetailPage';
import { Card } from './Card/Card';
import { Payment } from './PaymentPage/Payment';
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
          <Route path="/Shopping/:id" element={<CardDetailPage />}></Route>
          <Route path="/Shopping/Card" element={<Card />}></Route>
          <Route path="/Payment" element={<Payment />}></Route>
        </Routes>
      </Box>
    </ChakraProvider>
  );
}

export default App;

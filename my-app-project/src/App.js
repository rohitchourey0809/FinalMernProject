import React from 'react';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';

import NavBar from './Navbar/NavBar';
import { Route, Routes } from 'react-router-dom';
import { LandingPage } from './LandingPage/LandingPage';
import { CardDetailPage } from './LandingPage/CardDetails/cardDetailPage';
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
          <Route></Route>
          <Route></Route>
        </Routes>
      </Box>
    </ChakraProvider>
  );
}

export default App;

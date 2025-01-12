import React from 'react';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import theme from './theme';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          bgcolor: 'background.default',
          color: 'text.primary',
          minHeight: '100vh',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Navbar />
        <div className="custom-cursor"></div>
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default App;

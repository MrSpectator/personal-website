import React from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)',
        color: 'white',
      }}
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.5rem', md: '4rem' },
              fontWeight: 'bold',
              mb: 2,
            }}
          >
            Hi, I'm Oluwatoni Sobande
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '1.5rem', md: '2rem' },
              mb: 4,
              fontWeight: 'normal',
            }}
          >
            Fullstack Developer
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: '1.2rem', md: '1.5rem' },
              mb: 4,
              maxWidth: '600px',
              fontWeight: 'light',
            }}
          >
            Specializing in Python, Django, JavaScript, and React
          </Typography>
          <Link to="projects" spy={true} smooth={true} offset={-70} duration={500}>
            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: 'white',
                color: 'primary.main',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                },
                mr: 2,
              }}
            >
              View My Work
            </Button>
          </Link>
          <Link to="contact" spy={true} smooth={true} offset={-70} duration={500}>
            <Button
              variant="outlined"
              size="large"
              sx={{
                borderColor: 'white',
                color: 'white',
                '&:hover': {
                  borderColor: 'rgba(255, 255, 255, 0.9)',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              Contact Me
            </Button>
          </Link>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Hero;

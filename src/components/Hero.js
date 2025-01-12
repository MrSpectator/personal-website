import React, { memo, useCallback } from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const MotionBox = motion.div;

const Hero = () => {
  const handleScroll = useCallback(() => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        bgcolor: 'background.default',
        px: 2,
      }}
    >
      {/* Name */}
      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: '4rem', md: '6rem' },
          fontWeight: 800,
          color: 'primary.main',
          textAlign: 'center',
          textShadow: '3px 3px 8px rgba(0, 0, 0, 0.3)',
          mb: 3,
          letterSpacing: '0.08em',
          textTransform: 'capitalize',
        }}
      >
        Oluwatoni Sobande
      </Typography>

      {/* Title */}
      <Typography
        variant="h4"
        sx={{
          fontSize: { xs: '2.5rem', md: '3.5rem' },
          fontWeight: 700,
          color: 'secondary.main',
          textAlign: 'center',
          mb: 2,
          letterSpacing: '0.05em',
        }}
      >
        Fullstack Developer
      </Typography>

      {/* Subtitle */}
      <Typography
        variant="h6"
        sx={{
          fontSize: { xs: '1.8rem', md: '2rem' },
          fontWeight: 400,
          color: 'text.secondary',
          textAlign: 'center',
          fontStyle: 'italic',
          mt: 1,
          letterSpacing: '0.02em',
        }}
      >
        Turning ideas into reality, one line of code at a time.
      </Typography>

      {/* Scroll Down */}
      <MotionBox
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        sx={{
          position: 'absolute',
          bottom: 30,
          left: '50%',
          transform: 'translateX(-50%)',
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
        onClick={handleScroll}
      >
        <Typography
          variant="body2"
          sx={{
            color: 'text.secondary',
            textAlign: 'center',
            mb: 1,
            fontSize: '1rem',
          }}
        >
          Scroll Down
        </Typography>
        <Box
          sx={{
            width: '30px',
            height: '30px',
            border: '2px solid',
            borderColor: 'text.secondary',
            borderRadius: '50%',
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: '8px',
              left: '50%',
              width: '4px',
              height: '10px',
              backgroundColor: 'text.secondary',
              transform: 'translateX(-50%)',
              borderRadius: '2px',
            },
          }}
        />
      </MotionBox>

      {/* Animated Cat */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 20,
          right: 20,
          width: '50px',
          height: '50px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            width: '50px',
            height: '50px',
            position: 'relative',
            animation: 'cat-bob 2s infinite alternate ease-in-out',
            '& .cat-ear': {
              position: 'absolute',
              width: '12px',
              height: '12px',
              backgroundColor: '#FFB6C1',
              borderRadius: '50%',
              top: '0',
            },
            '& .cat-ear.left': {
              left: '10px',
              transform: 'rotate(-45deg)',
            },
            '& .cat-ear.right': {
              right: '10px',
              transform: 'rotate(45deg)',
            },
            '& .cat-head': {
              position: 'absolute',
              top: '10px',
              width: '40px',
              height: '40px',
              backgroundColor: '#FFC0CB',
              borderRadius: '50%',
            },
            '& .cat-face': {
              position: 'absolute',
              top: '25px',
              left: '15px',
              width: '10px',
              height: '5px',
              backgroundColor: '#000',
              borderRadius: '50%',
            },
          }}
        >
          <Box className="cat-ear left" />
          <Box className="cat-ear right" />
          <Box className="cat-head" />
          <Box className="cat-face" />
        </Box>
      </Box>

      {/* Inline Animation */}
      <style>
        {`
          @keyframes cat-bob {
            0% {
              transform: translateY(0);
            }
            100% {
              transform: translateY(-5px);
            }
          }
        `}
      </style>
    </Box>
  );
};

export default memo(Hero);

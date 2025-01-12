import React from 'react';
import { Box, CircularProgress } from '@mui/material';

const LoadingFallback = () => (
  <Box 
    display="flex" 
    justifyContent="center" 
    alignItems="center" 
    minHeight="100vh"
    sx={{
      background: 'linear-gradient(135deg, #000000, #0a0a2a 50%, #000000)',
      position: 'relative',
      overflow: 'hidden',
    }}
  >
    <CircularProgress 
      sx={{ 
        color: '#7dd3fc',
        '& .MuiCircularProgress-circle': {
          strokeLinecap: 'round',
        },
      }} 
    />
  </Box>
);

export default LoadingFallback;

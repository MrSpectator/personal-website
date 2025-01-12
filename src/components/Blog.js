import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const Blog = () => {
  return (
    <Box
      id="blog"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        py: 8,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            background: 'rgba(255, 255, 255, 0.03)',
            backdropFilter: 'blur(10px)',
            borderRadius: '24px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '40px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
          }}
        >
          <Typography variant="h2" component="h2" gutterBottom>
            Blog
          </Typography>
          {/* Add your blog content here */}
        </Box>
      </Container>
    </Box>
  );
};

export default Blog;

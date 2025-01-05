import React from 'react';
import { Box, Container, Typography, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: 'background.paper',
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="sm">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box sx={{ mb: 2 }}>
            <IconButton
              href="https://www.linkedin.com/in/oluwatoni-sobande-bb081830b"
              target="_blank"
              aria-label="linkedin"
              sx={{ color: 'primary.main' }}
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              href="https://github.com/MrSpectator/"
              target="_blank"
              aria-label="github"
              sx={{ color: 'primary.main' }}
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              href="mailto:sobandeoluwatonie@gmail.com"
              aria-label="email"
              sx={{ color: 'primary.main' }}
            >
              <EmailIcon />
            </IconButton>
          </Box>
          <Typography variant="body2" color="text.secondary" align="center">
            {new Date().getFullYear()} Oluwatoni Sobande. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;

import React, { useState } from 'react';
import { Box, Container, Typography, TextField, Button, Grid, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log(formData);
  };

  const contactLinks = [
    { title: 'Email', url: 'mailto:sobandeoluwatonie@gmail.com', label: 'Send Email', icon: <EmailIcon /> },
    { title: 'LinkedIn', url: 'https://www.linkedin.com/in/oluwatoni-sobande-bb081830b', label: 'Connect on LinkedIn', icon: <LinkedInIcon /> },
    { title: 'GitHub', url: 'https://github.com/MrSpectator/', label: 'View GitHub', icon: <GitHubIcon /> }
  ];

  return (
    <Box
      id="contact"
      component="section"
      sx={{
        minHeight: '100vh',
        py: { xs: 12, md: 16 },
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            className="text-gradient"
            sx={{ mb: 2 }}
          >
            Contact Me
          </Typography>
          <Typography
            variant="h4"
            sx={{
              mb: 8,
              color: 'text.secondary',
              maxWidth: 600,
            }}
          >
            I'm always interested in hearing about new projects and opportunities.
            Feel free to reach out!
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Box
                className="glass"
                sx={{
                  p: { xs: 3, md: 6 },
                  height: '100%',
                }}
              >
                <Typography variant="h5" sx={{ mb: 3 }}>
                  Get in Touch
                </Typography>
                <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary' }}>
                  sobandeoluwatonie@gmail.com
                </Typography>
                <Grid container spacing={3}>
                  {contactLinks.map((link, index) => (
                    <Grid item xs={12} sm={12} key={index}>
                      <Button
                        variant="contained"
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        fullWidth
                        className="hover-scale"
                        sx={{
                          py: 2,
                          bgcolor: 'rgba(255, 255, 255, 0.1)',
                          backdropFilter: 'blur(10px)',
                          '&:hover': {
                            bgcolor: 'rgba(255, 255, 255, 0.2)',
                          },
                        }}
                        startIcon={link.icon}
                      >
                        {link.label}
                      </Button>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Box
                component="form"
                onSubmit={handleSubmit}
                className="glass"
                sx={{
                  p: { xs: 3, md: 6 },
                }}
              >
                <Grid container spacing={4}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      variant="outlined"
                      required
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                            borderColor: 'rgba(255, 255, 255, 0.23)',
                          },
                          '&:hover fieldset': {
                            borderColor: 'rgba(255, 255, 255, 0.5)',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: 'primary.main',
                          },
                        },
                        '& .MuiInputLabel-root': {
                          color: 'text.secondary',
                        },
                        '& .MuiInputBase-input': {
                          color: 'text.primary',
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      variant="outlined"
                      required
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                            borderColor: 'rgba(255, 255, 255, 0.23)',
                          },
                          '&:hover fieldset': {
                            borderColor: 'rgba(255, 255, 255, 0.5)',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: 'primary.main',
                          },
                        },
                        '& .MuiInputLabel-root': {
                          color: 'text.secondary',
                        },
                        '& .MuiInputBase-input': {
                          color: 'text.primary',
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      variant="outlined"
                      multiline
                      rows={4}
                      required
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                            borderColor: 'rgba(255, 255, 255, 0.23)',
                          },
                          '&:hover fieldset': {
                            borderColor: 'rgba(255, 255, 255, 0.5)',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: 'primary.main',
                          },
                        },
                        '& .MuiInputLabel-root': {
                          color: 'text.secondary',
                        },
                        '& .MuiInputBase-input': {
                          color: 'text.primary',
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      fullWidth
                      className="hover-scale"
                      sx={{
                        bgcolor: 'rgba(255, 255, 255, 0.1)',
                        backdropFilter: 'blur(10px)',
                        '&:hover': {
                          bgcolor: 'rgba(255, 255, 255, 0.2)',
                        },
                      }}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;

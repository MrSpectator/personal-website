import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import WebIcon from '@mui/icons-material/Web';

const About = () => {
  const skills = [
    {
      title: 'Frontend Development',
      icon: <WebIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      description: 'Building responsive and interactive user interfaces using React and modern JavaScript.',
    },
    {
      title: 'Backend Development',
      icon: <StorageIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      description: 'Creating robust server-side applications with Python and Django.',
    },
    {
      title: 'Full Stack Integration',
      icon: <CodeIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      description: 'Seamlessly connecting frontend and backend systems for complete web solutions.',
    },
  ];

  return (
    <Box id="about" className="section">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h2"
            sx={{
              textAlign: 'center',
              mb: 6,
              color: 'primary.main',
            }}
          >
            About Me
          </Typography>

          <Typography
            variant="body1"
            sx={{
              textAlign: 'center',
              mb: 6,
              maxWidth: '800px',
              mx: 'auto',
              fontSize: '1.1rem',
              lineHeight: 1.8,
            }}
          >
            I am a passionate fullstack developer with expertise in modern web technologies.
            My focus is on creating efficient, scalable, and user-friendly applications
            that solve real-world problems. With a strong foundation in both frontend and
            backend development, I bring ideas to life through code.
          </Typography>

          <Grid container spacing={4}>
            {skills.map((skill, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: 4,
                      textAlign: 'center',
                      height: '100%',
                      backgroundColor: 'background.paper',
                      borderRadius: 2,
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                      },
                    }}
                  >
                    {skill.icon}
                    <Typography variant="h6" sx={{ my: 2 }}>
                      {skill.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {skill.description}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About;

import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';

const skills = [
  {
    category: 'Frontend Development',
    items: ['React', 'JavaScript', 'HTML/CSS', 'Bootstrap']
  },
  {
    category: 'Backend Development',
    items: ['Python', 'Django', 'Node.js', 'PostgreSQL']
  },
  {
    category: 'Tools & Others',
    items: ['Git', 'Docker', 'AWS', 'REST APIs']
  }
];

const About = () => {
  return (
    <Box
      id="about"
      component="section"
      sx={{
        minHeight: '100vh',
        py: { xs: 12, md: 16 },
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container>
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
            About Me
          </Typography>
          <Typography
            variant="h4"
            sx={{
              mb: 6,
              color: 'text.secondary',
              maxWidth: 800,
            }}
          >
            I'm Oluwatoni Sobande, a passionate software developer with a focus on creating efficient and user-friendly applications.
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
                  Background
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.secondary',
                    lineHeight: 1.8,
                    mb: 2,
                  }}
                >
                  I am a software developer with a strong foundation in both frontend and backend development.
                  My journey in software development has been driven by a deep interest in creating solutions
                  that make a difference.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.secondary',
                    lineHeight: 1.8,
                  }}
                >
                  I specialize in building full-stack web applications, with a particular focus on React
                  for frontend development and Python/Django for backend systems. I'm passionate about
                  writing clean, efficient code and creating intuitive user experiences.
                </Typography>
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
                className="glass"
                sx={{
                  p: { xs: 3, md: 6 },
                  height: '100%',
                }}
              >
                <Typography variant="h5" sx={{ mb: 4 }}>
                  Skills & Technologies
                </Typography>
                <Grid container spacing={3}>
                  {skills.map((skillGroup, index) => (
                    <Grid item xs={12} key={index}>
                      <Typography
                        variant="h6"
                        sx={{
                          mb: 2,
                          color: 'text.secondary',
                          fontSize: '1rem',
                        }}
                      >
                        {skillGroup.category}
                      </Typography>
                      <Box
                        sx={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          gap: 1,
                          mb: 3,
                        }}
                      >
                        {skillGroup.items.map((skill, i) => (
                          <Typography
                            key={i}
                            variant="caption"
                            sx={{
                              px: 2,
                              py: 0.5,
                              borderRadius: '100px',
                              bgcolor: 'rgba(255, 255, 255, 0.1)',
                              color: 'text.primary',
                              fontSize: '0.75rem',
                              fontWeight: 500,
                            }}
                          >
                            {skill}
                          </Typography>
                        ))}
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;

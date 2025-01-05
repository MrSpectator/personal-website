import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, CardActions, Button } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

const Projects = () => {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce solution built with Django and React, featuring user authentication, product management, and secure payments.',
      image: 'https://via.placeholder.com/400x250',
      technologies: ['React', 'Django', 'PostgreSQL'],
      github: 'https://github.com/MrSpectator/Ecommerce-Platform',
      demo: '#'
    },
    {
      title: 'Email System',
      description: 'A robust email management system built with modern technologies, handling email communications efficiently and securely.',
      image: 'https://via.placeholder.com/400x250',
      technologies: ['Python', 'Django', 'SMTP'],
      github: 'https://github.com/MrSpectator/Email',
      demo: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'A modern and responsive portfolio website showcasing projects and skills, built with React and Material-UI.',
      image: 'https://via.placeholder.com/400x250',
      technologies: ['React', 'Material-UI', 'Framer Motion'],
      github: 'https://github.com/MrSpectator/personal-website',
      demo: '#'
    },
  ];

  return (
    <Box id="projects" className="section" sx={{ backgroundColor: 'background.paper' }}>
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
            Projects
          </Typography>

          <Grid container spacing={4}>
            {projects.map((project, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="200"
                      image={project.image}
                      alt={project.title}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {project.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        {project.description}
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {project.technologies.map((tech, i) => (
                          <Typography
                            key={i}
                            variant="caption"
                            sx={{
                              backgroundColor: 'primary.main',
                              color: 'white',
                              px: 1,
                              py: 0.5,
                              borderRadius: 1,
                            }}
                          >
                            {tech}
                          </Typography>
                        ))}
                      </Box>
                    </CardContent>
                    <CardActions>
                      <Button 
                        size="small" 
                        startIcon={<GitHubIcon />}
                        href={project.github}
                        target="_blank"
                      >
                        Code
                      </Button>
                      {project.demo && (
                        <Button 
                          size="small" 
                          startIcon={<LaunchIcon />}
                          href={project.demo}
                          target="_blank"
                        >
                          Demo
                        </Button>
                      )}
                    </CardActions>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Projects;

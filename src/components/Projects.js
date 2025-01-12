import React from 'react';
import { Box, Container, Typography, Grid, Button } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution built with Django and React, featuring user authentication, product management, and secure payments.',
    image: 'https://via.placeholder.com/400x250',
    tags: ['React', 'Django', 'PostgreSQL'],
    links: {
      github: 'https://github.com/MrSpectator/Ecommerce-Platform',
      live: '#'
    }
  },
  {
    title: 'Email System',
    description: 'A robust email management system built with modern technologies, handling email communications efficiently and securely.',
    image: 'https://via.placeholder.com/400x250',
    tags: ['Python', 'Django', 'SMTP'],
    links: {
      github: 'https://github.com/MrSpectator/Email',
      live: '#'
    }
  },
  {
    title: 'Portfolio Website',
    description: 'A modern and responsive portfolio website showcasing projects and skills, built with React and Material-UI.',
    image: 'https://via.placeholder.com/400x250',
    tags: ['React', 'Material-UI', 'Framer Motion'],
    links: {
      github: 'https://github.com/MrSpectator/personal-website',
      live: '#'
    }
  }
];

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      <Box
        className="glass hover-scale"
        sx={{
          height: '100%',
          overflow: 'hidden',
          cursor: 'pointer',
          position: 'relative',
        }}
      >
        <Box
          sx={{
            height: 240,
            width: '100%',
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%)',
              zIndex: 1,
            },
          }}
        >
          <Box
            component="img"
            src={project.image}
            alt={project.title}
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.3s ease-in-out',
              '&:hover': {
                transform: 'scale(1.1)',
              },
            }}
          />
        </Box>

        <Box sx={{ p: 3 }}>
          <Typography
            variant="h4"
            sx={{
              mb: 2,
              fontSize: '1.75rem',
              fontWeight: 600,
            }}
          >
            {project.title}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mb: 3,
              color: 'text.secondary',
              lineHeight: 1.6,
            }}
          >
            {project.description}
          </Typography>

          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 1,
              mb: 3,
            }}
          >
            {project.tags.map((tag, i) => (
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
                {tag}
              </Typography>
            ))}
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Button
              variant="outlined"
              href={project.links.github}
              target="_blank"
              startIcon={<GitHubIcon />}
              sx={{ mr: 1 }}
            >
              GitHub
            </Button>
            <Button
              variant="contained"
              href={project.links.live}
              target="_blank"
              startIcon={<LaunchIcon />}
            >
              Live Demo
            </Button>
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <Box
      id="projects"
      component="section"
      sx={{
        minHeight: '100vh',
        py: { xs: 12, md: 16 },
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
            sx={{ mb: 8 }}
          >
            Projects
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <ProjectCard project={project} index={index} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;

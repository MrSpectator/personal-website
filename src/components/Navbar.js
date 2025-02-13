import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box, Drawer, List, ListItem, useTheme, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['About', 'Projects', 'Contact'];

  const NavLink = ({ to, children }) => (
    <Link
      to={to.toLowerCase()}
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
    >
      <Button
        sx={{
          color: 'inherit',
          mx: 1,
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
          },
        }}
      >
        {children}
      </Button>
    </Link>
  );

  return (
    <AppBar 
      position="fixed" 
      sx={{
        background: 'linear-gradient(to right, black, purple)',
        boxShadow: isScrolled ? 'none' : 1,
        transition: 'all 0.3s',
        transform: isScrolled ? 'translateY(-100%)' : 'translateY(0)',
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ 
            flexGrow: 1,
            fontWeight: 'bold',
            color: 'white'
          }}
        >
          Oluwatoni Sobande
        </Typography>

        {isMobile ? (
          <>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ color: 'white' }}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={mobileOpen}
              onClose={handleDrawerToggle}
            >
              <List sx={{ width: 250 }}>
                {navItems.map((item) => (
                  <ListItem key={item}>
                    <NavLink to={item.toLowerCase()}>{item}</NavLink>
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </>
        ) : (
          <Box sx={{ display: 'flex' }}>
            {navItems.map((item) => (
              <NavLink key={item} to={item.toLowerCase()}>
                {item}
              </NavLink>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

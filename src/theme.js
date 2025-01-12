import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#7dd3fc',
    },
    background: {
      default: '#000000',
      paper: 'rgba(255, 255, 255, 0.03)',
    },
    text: {
      primary: '#ffffff',
      secondary: 'rgba(255, 255, 255, 0.7)',
    },
  },
  typography: {
    fontFamily: '"Space Grotesk", "Inter", "Arial", sans-serif',
    h1: {
      fontSize: '8rem',
      fontWeight: 700,
      letterSpacing: '-0.02em',
      lineHeight: 1,
      '@media (max-width:1200px)': {
        fontSize: '6rem',
      },
      '@media (max-width:900px)': {
        fontSize: '4rem',
      },
    },
    h2: {
      fontSize: '4rem',
      fontWeight: 700,
      letterSpacing: '-0.02em',
      '@media (max-width:900px)': {
        fontSize: '3rem',
      },
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 600,
      letterSpacing: '-0.01em',
    },
    body1: {
      fontSize: '1.125rem',
      lineHeight: 1.6,
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '100px',
          padding: '12px 24px',
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollBehavior: 'smooth',
          '&::-webkit-scrollbar': {
            width: '8px',
          },
          '&::-webkit-scrollbar-track': {
            background: '#000000',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#333333',
            borderRadius: '4px',
          },
        },
      },
    },
  },
});

export default theme;

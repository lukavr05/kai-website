import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#c93747',
    },
    secondary: {
      main: '#c97137',
    },
    background: {
      default: '#e5f5f5',
      paper: '#ffffff',   
    },
    text: {
      primary: '#222222',
      secondary: '#666666',
    },
  },
  typography: {
    fontFamily: '"Caprasimo", serif',

    body1: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 600,
    },
  },
});
export default theme;


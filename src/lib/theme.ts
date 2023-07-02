import { createTheme } from '@mui/material/styles';
import { blue, red } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#2e7d32',
    },
    secondary: {
      main: red[500],
    },
    info: {
      main: blue[500]
    },
    background: {
      default: '#f7f6f5',
      paper: 'gray' 
    },
    common: {
        black: "black"
    },
  },
});
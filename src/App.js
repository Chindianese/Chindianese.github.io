import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { useState } from 'react';
import './App.css';
import NonDeclarative from './Babylon/NonDeclarative';
import AboutMe from './components/AboutMe';
import Album from './components/Album';
import DrawerAppBar from './components/DrawerAppBar';
import Experience from './components/Experience';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Link from '@mui/material/Link';
function Copyright() {
  return (
    <Typography variant="body2" color="primary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://chindianese.github.io/">
        Tay Hao Cheng 2020
      </Link>{' '}
      {/* {new Date().getFullYear()} */}
      {'.'}
    </Typography>
  );
}


const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: '#fbc203',
      light: '#000000',
      dark: '#B38900'
    },

    background: {
      default: "#ffffff"
    },
  },
  typography: {
  
    body1:
    {
      fontSize: 18,
    },
    fontFamily: "Raleway",
    h2: {

    },
    subtitle2: {

    }
  },
})
const darkTheme = createTheme({
  mode: "dark",
  palette: {
    primary: {
      main: '#fbc203',
      light: '#e9e9e9',
      dark: '#B38900'
    },
    background: {
      default: "#151515"
    },
  },
  typography: {

    body1:
    {
      fontSize: 18,
    },
    fontFamily: "Raleway",
    h2: {

    },
    subtitle2: {

    }
  },
})

function App() {
  const [theme, setTheme] = useState(darkTheme);
  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme)
  }
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <h1 style={{fontSize:0 }}>Tay Hao Cheng - A Technical Artist based in Singapore</h1>
      <div className="App">
        <DrawerAppBar></DrawerAppBar>
        {/* <Switch
  onChange={toggleTheme}
  inputProps={{ 'aria-label': 'controlled' }}
/> */}
        <div className='BabylonContainer'>
          <div className='Babylon'> <NonDeclarative toggleTheme={toggleTheme}></NonDeclarative></div>
        </div>
        <AboutMe></AboutMe>
        <Album></Album>
        <Experience></Experience>
        {/* Footer */}
        <Box sx={{ p: 6 }} component="footer">
          <Typography variant="h6" align="center" gutterBottom color="primary.light">
            Tay Hao Cheng btw
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="primary.light"
            component="p"
          >
            That's all folks
          </Typography>
          <Copyright />
        </Box>
        {/* End footer */}
      </div>
    </ThemeProvider>
  );
}

export default App;

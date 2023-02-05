import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { useState } from 'react';
import './App.css';
import NonDeclarative from './Babylon/NonDeclarative';
import AboutMe from './components/AboutMe';
import Album from './components/Album';
import DrawerAppBar from './components/DrawerAppBar';
import Experience from './components/Experience';

const lightTheme = createTheme({
  palette: {
    mode:"light",
    primary: {
      main: '#fbc203',
      light:'#000000',
      dark:'#B38900'
    },

    background: {
      default: "#ffffff"
    },
  },
  typography: {
    fontFamily: "Raleway",
    h2:{
      fontSize: "3.5rem",
    },
    subtitle2:{
      fontSize: "0.6rem"
    }
  },
})
const darkTheme = createTheme({
  mode:"dark",
  palette: {
    primary: {
      main: '#fbc203',
      light:'#ffffff',
      dark:'#B38900'
    },
    background: {
      default: "#1E1E1E"
    },
  },
  typography: {
    fontFamily: "Raleway",
    h2:{
      fontSize: "3.5rem",
    },
    subtitle2:{
      fontSize: "0.6rem"
    }
  },
})

function App() {
  const [theme, setTheme] = useState(darkTheme);
  const toggleTheme = ()=>{
    setTheme(theme === lightTheme ? darkTheme : lightTheme)
  }
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
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
   <Experience></Experience>
    <Album></Album>
    </div>
    </ThemeProvider>
  );
}

export default App;

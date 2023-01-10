import './App.css';
import { Button, colors, createTheme,CssBaseline,Switch,ThemeProvider, ToggleButton } from '@mui/material';
import { useState } from 'react';
import DrawerAppBar from './components/DrawerAppBar';
import Album from './components/Album';
import NonDeclarative from './Babylon/NonDeclarative';
import AboutMe from './components/AboutMe';


const lightTheme = createTheme({
  palette: {
    mode:"light",
    primary: {
      main: '#fbc203',
      light:'#000000'
    },

    background: {
      default: "#ffffff"
    },
  },
  typography: {
    fontFamily: "Raleway",
  }
})
const darkTheme = createTheme({
  mode:"dark",
  palette: {
    primary: {
      main: '#fbc203',
      light:'#ffffff'
    },
    background: {
      default: "#1E1E1E"
    },
  },
  typography: {
    fontFamily: "Raleway",
    subtitle2:{
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
    <Album></Album>
    </div>
    </ThemeProvider>
  );
}

export default App;

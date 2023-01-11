import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import SocialButtonsContainer from 'react-social-media-buttons';

function ResponsiveAppBar() {
  return (
    <AppBar position="static">
            <Box width="100%" paddingLeft={1} paddingRight={1} >
        <Toolbar disableGutters={true}>
          {/* <VideogameAssetIcon ></VideogameAssetIcon> */}

        <div>
        <Typography
            variant="h6">
            TAY HAO CHENG
          </Typography>
        </div>
          <Typography
            variant="subtitle1">
           ame Developer
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
           
           
          </Box>
       
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          </Box>

          <Box sx={{ flexGrow: 1 }}>
          </Box>
{/* <Typography
            variant="subtitle2">
           tayhaocheng@gmail.com
          </Typography> */}
         
          <SocialButtonsContainer
  links={['https://github.com/Chindianese']}
  buttonStyle={{margin: '0px 1px', backgroundColor: '#fbc203', borderRadius: '50%', border: '2px solid #000000'}}
  iconStyle={{color: '#000000'}}
  openNewTab={true}
/>
        </Toolbar>
      </Box>
    </AppBar>
  );
}
export default ResponsiveAppBar;
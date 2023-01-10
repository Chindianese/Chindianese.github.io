import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Icon } from '@mui/material';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import SocialMediaButtons from 'react-social-media-buttons';
import SocialButtonsContainer from 'react-social-media-buttons';
const pages = ['Projects', 'Pricing'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <VideogameAssetIcon ></VideogameAssetIcon> */}
        <div>
        <Typography
            variant="h6">
            TAY HAO CHENG
          </Typography>
          <Typography
            variant="subtitle1">
           Game Developer
          </Typography>
        </div>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
           
           
          </Box>
       
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {/* {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))} */}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
          </Box>
<Typography
            variant="subtitle2">
           tayhaocheng@gmail.com
          </Typography>
         
          <SocialButtonsContainer
  links={['https://github.com/Chindianese']}
  buttonStyle={{margin: '0px 1px', backgroundColor: '#fbc203', borderRadius: '50%', border: '2px solid #000000'}}
  iconStyle={{color: '#000000'}}
  openNewTab={true}
/>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
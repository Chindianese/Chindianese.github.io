import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ProjectCard from './ProjectCard';

import { ImageList, ImageListItem, ImageListItemBar } from '@mui/material';


import dither1 from '../dither.gif';
import dither2 from '../Dither Shaders (1).gif';

import ReactPlayer from 'react-player';

function Copyright() {
  return (
    <Typography variant="body2" color="primary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://chindianese.github.io/">
        chindianese.github.io
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const cardData = [
  {title:"Sleeve", 
  desc:"Design tattoo sleeves.",
  moreInfo:
  <div>
<ReactPlayer  width="100%"
      url="sleeve trailer.mp4"
      controls={true}
    />
    <Typography>
    Use a preset tattoo or upload your own. Built in babylonJS and hosted on Firebase.
    </Typography>
  </div>

},
  {title:"SelfieAI", 
  desc:"Neural net in Unity",
  moreInfo:  
  <div>
    <Typography>Classify hair and facial features with neural network classification in unity. Models trained with google's inception graph, through tensorflow for poets in python for image classification. Models run through Unity Barracuda.</Typography>
<ImageList cols={2}>
  {[1,2,3,4].map((item) => (
    <ImageListItem key={item.img}>
      <img
        src={`SelfieAI (${item}).jpg`}
        alt={item}
        loading="...."
      />
       {/* <ImageListItemBar
            title={item}
            subtitle={<span>by: {item.author}</span>}
            position="below"
          /> */}
    </ImageListItem>
    
  ))}
</ImageList>
    </div>,
},
  
   {title:"Dither Shaders", 
  desc:"Custom Unity lighting",
  moreInfo:  
  <div>
    <Typography>Built with shader graph in URP. Custom lighting shader code pixelates lighting, toons it, and adds a dither effect. </Typography>
 <img src={dither1} alt="loading..." width="100%"/>
 <img src={dither2} alt="loading..." width="100%"/>
    </div>,
},
{
  title:"Wet Shader", 
desc:"Unity shader for dynamic wet ground",
moreInfo:  
<div>
  <Typography>Built with shader graph in URP. Wet ground and puddle shader blends height maps, and noise maps to create dynamic puddles.</Typography>
<ReactPlayer width="100%"
      url="Wet Shader.mp4"
      controls={true}
    />
<ImageList cols={2}>
  {[2,3,4].map((item) => (
    <ImageListItem key={item.img}>
      <img
        src={`Wet Shader (${item}).jpg`}
        alt={item}
        loading="...."
      />
       {/* <ImageListItemBar
            title={item}
            subtitle={<span>by: {item.author}</span>}
            position="below"
          /> */}
    </ImageListItem>
    
  ))}
</ImageList>
  </div>,
},
{
  title:"EVE", 
desc:"App for taking attendance",
moreInfo:  
<div>
<Typography>
Built in android studio with Google Firebase as an online Database. It was used during NYP freshmen orientation to take attendance of ~300 student.
</Typography>
<ImageList cols={2}>
  {[2,3,4].map((item) => (
    <ImageListItem key={item.img}>
      <img
        src={`EVE (${item}).jpg`}
        alt={item}
        loading="...."
      />
       {/* <ImageListItemBar
            title={item}
            subtitle={<span>by: {item.author}</span>}
            position="below"
          /> */}
    </ImageListItem>
    
  ))}
</ImageList>
  </div>,
},
]

export default function Album() {
  return (      
      <main>
        {/* Hero unit */}
        <Box
          // sx={{
          //   pt: 8,
          //   pb: 6,
          // }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="primary"
            >
              Projects
            </Typography>
            {/* <Typography variant="h5" align="center" color="text.secondary" paragraph>
..
            </Typography> */}
            {/* <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Main call to action</Button>
              <Button variant="outlined">Secondary action</Button>
            </Stack> */}
          </Container>
        </Box>
        <Container sx={{ py: 2 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={2}>
            {cardData.map((card) => (
              <Grid item key={card} xs={12} sm={4} md={6}>
                <ProjectCard cardData={card}/>
                {/* <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '0.75%',
                    }}
                    //image="https://source.unsplash.com/random"
                    image="https://source.unsplash.com/random"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                     { card.title}
                    </Typography>
                    <Typography>
                      {card.desc}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card> */}
              </Grid>
            ))}
          </Grid>
        </Container>
      {/* Footer */}
      <Box sx={{ p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom color="primary">
          Tay Hao Cheng btw
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="primary"
          component="p"
          >
          That's all folks
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
          </main>
  );
}

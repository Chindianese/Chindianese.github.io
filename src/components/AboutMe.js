import {  Container, Typography } from '@mui/material';
import * as React from 'react';
import Coffee from './Coffee';



export default function AboutMe(props) {
  return (
    <Container style={{ margin: 'auto', } }maxWidth="md">   
      <Typography
        component="h2"
        variant="h2"
        align="center"
        color="primary">
        About Me
      </Typography>
      <Typography color="primary.light">
        Hey there! I am
      </Typography>
      <Typography
      sx={{fontSize: 25}}
        variant="h2"
        align="center"
        color="primary">
        Tay Hao Cheng - A Technical Artist based in Singapore
      </Typography>
      <Typography color="primary.light">
        ...and I like making stuff that looks cool.
      </Typography>
      <Typography color="primary.light">
       I specialise in game development and most of my experience is in Unity, but I'm also well-versed in mobile app development (React Native & PWAs) and web development (ReactJS).
      </Typography>
      <Typography  color="primary.light">In my previous projects, I have built shaders in Unity Shader Graph, and wrote custom lighting in hlsl to create unique effects and lighting not often seen in games. I'm always eager to learn new things and push the boundaries of game design and development. </Typography>
      <Typography color="primary.light">
      Please hire me. 👉🏾👈🏾
      </Typography>
      {/* <Typography color="primary.light">Or..</Typography>
      <Coffee></Coffee> */}
      <Typography variant="h6" color="primary.dark">
        tayhaocheng.work@gmail.com
      </Typography>
    </Container>
  );
}

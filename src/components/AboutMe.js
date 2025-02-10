import { Container, Typography } from '@mui/material';
import * as React from 'react';
import Coffee from './Coffee';



export default function AboutMe(props) {
  return (
    <Container style={{ margin: 'auto', }} maxWidth="md">
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
        sx={{ fontSize: 25 }}
        variant="h2"
        align="center"
        color="primary">
        Tay Hao Cheng - A Technical Artist based in Singapore
      </Typography>
      <Typography color="primary.light">
        ...and I like making stuff that looks cool.
      </Typography>
      <Typography color="primary.light">
        I am a software developer passionate about technical art and sound.
      </Typography>
      <Typography color="primary.light">
        I have worked on multiple projects, building shaders in Unity Shader Graph and writing custom lighting in HLSL to create unique effects and lighting.. I'm always eager to learn new things and push the boundaries of game design and development.
      </Typography>
      <Typography color="primary.light">
        Beyond software development, I’m also interested in sound design and production. My passion for sound started in Polytechnic, when I joined the school's live audio CCA, learning how to set up audio equipment and do mixing. Eager to hone my interest in sound, I’m currently supporting a music venue with their sound and mixing for their shows, and am always on the lookout for opportunities to learn.
      </Typography>
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

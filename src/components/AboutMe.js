import { Typography } from '@mui/material';
import * as React from 'react';


export default function AboutMe(props) {
  return (
  <div style={{ width: '60%', margin:'auto'}}>
    <Typography
              component="h1"
              variant="h2"
              align="center"
              color="primary"
            >
              About Me
            </Typography>

            <Typography color="primary.light">
            With a design focus and technical implementation expertise, I realize concepts and design into tangible and functional code. I enjoy technical art, making shaders, particle effects, and development tools. 
            </Typography>
            <Typography variant="h6" color="primary.dark">
                tayhaocheng.work@gmail.com
            </Typography>
  </div>
  );
}
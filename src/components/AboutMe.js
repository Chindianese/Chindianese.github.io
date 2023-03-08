import { Typography } from '@mui/material';
import * as React from 'react';


export default function AboutMe(props) {
  return (
  <div style={{ width: '70%', margin:'auto'}}>
    <Typography
              component="h1"
              variant="h2"
              align="center"
              color="primary"
            >
              About Me
            </Typography>

            <Typography color="primary.light">
            I mainly do development in Unity Engine and am experienced with web development through React and Babylon JS. I specialise in the technical art side, making shaders, particle effects, and development tools.
            </Typography>
            <Typography variant="h6" color="primary.dark">
                tayhaocheng.work@gmail.com
            </Typography>
  </div>
  );
}
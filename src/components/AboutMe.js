import { Typography } from '@mui/material';
import * as React from 'react';


export default function AboutMe(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
  <>
    <Typography
              component="h1"
              variant="h2"
              align="center"
              color="primary"
            >
              About Me
            </Typography>
            <Typography color="primary.light">
                I do mainly development in Unity Engine, and am experience with web development through React, and Babylon JS. I specialise in the technical art side, making shaders, particle effects, and development tools. 
            </Typography>
  </>
  );
}
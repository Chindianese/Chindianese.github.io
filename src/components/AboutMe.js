import { Typography } from '@mui/material';
import * as React from 'react';
import Coffee from './Coffee';



export default function AboutMe(props) {
  return (
    <div style={{ width: '60%', margin: 'auto' }}>
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="primary"
      >
        About Me
      </Typography>
      <Typography color="primary.light">
        I like making stuff. Please hire me. 👉🏾👈🏾
      </Typography>
      <Typography color="primary.light">Or..</Typography>
      <Coffee></Coffee>
      <Typography variant="h6" color="primary.dark">
        tayhaocheng.work@gmail.com
      </Typography>
    </div>
  );
}
import { Typography } from '@mui/material';
import * as React from 'react';


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
      <Typography variant="h6" color="primary.dark">
        tayhaocheng.work@gmail.com
      </Typography>
    </div>
  );
}
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import ProjectCard from './ProjectCard';


import { Masonry } from '@mui/lab';


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
  {title:"Immersively", 
  desc:"Unity Developer - 2021",
  moreInfo: "iMMERSiVELY an Innovation Technology consultancy. eXtended Reality (XR). Virtual Simulations. Gamified Experiences."
}
]

export default function Experience() {
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
              Work Experience
            </Typography>
          </Container>
        </Box>
        <Container sx={{ py: 2 }} maxWidth="xl">
          {/* End hero unit */}
          <Masonry columns={{ xs: 1, sm: 2,md:3}} spacing={2}>
            {cardData.map((card) => (
                <ProjectCard cardData={card}/>                
            ))}
          </Masonry>
        </Container>
          </main>
  );
}

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import ProjectCard from './ProjectCard';


import { Masonry } from '@mui/lab';

const text = "Completed a 2-month internship that transitioned into a contracted development role for 5 months. "
+"\nAs the project lead, I managed future interns and junior developers, ensuring efficient workflow and effective task delegation."  
+ "\nI was responsible for understanding project requirements, creating game design and technical design documents, and delegating tasks to the development team."
  + "\nDuring my time there, I contributed to diverse projects including VR experiences (team size 2-3), image classification using machine learning, and mobile game development."
const para = text.split('\n').map((str, index) => <Typography key={index}>{str}</Typography>)
const cardData = [
  {
    title: "Immersively",
    desc: "Unity Developer (Feb 2021 - Jun 2021)",
    moreInfo: para
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
      <Container sx={{ py: 2 }} maxWidth="lg">
        {/* End hero unit */}
        <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={2}>
          {cardData.map((card) => (
            <ProjectCard cardData={card} key={'cardexp ' + card.title} />
          ))}
        </Masonry>
      </Container>
    </main>
  );
}

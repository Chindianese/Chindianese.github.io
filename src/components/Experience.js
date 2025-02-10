import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import ProjectCard from './ProjectCard';


import { Masonry } from '@mui/lab';

const text = "During my time here, I wrote game design and technical design documents."
+"\nI mainly worked on game development using Unity and C#."
  + "\nDuring my time there, I contributed to diverse projects including AR, VR experiences (team size 2-3), image classification using machine learning, and mobile game development."
const para = text.split('\n').map((str, index) => <Typography key={index}>{str}</Typography>)

const text_reso = "Wrote Python scripts for data visualisation"
+"\nWorked with Oracle and Postgres database"
+"\nUpgraded and maintained dot net programs"
const para_reso = text_reso.split('\n').map((str, index) => <Typography key={index}>{str}</Typography>)


const cardData = [
  {
    titleRoot: "Resonac",
    title: "Resonac - Senior Engineer Assistant",
    desc: "May 2024 - Present",
    moreInfo: para_reso
  },
  {
    titleRoot: "Immersively",
    title: "Immersively - Unity Developer",
    desc: "Dec 2020 - Jun 2021",
    moreInfo: para
  },
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
            <ProjectCard cardData={card} key={'cardexp ' + card.titleRoot} />
          ))}
        </Masonry>
      </Container>
    </main>
  );
}

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
const text = "I started as an intern and got hired to continue for 5 more months until I enlisted."
+ "\nI worked as a unity developer and project lead managing future interns and junior developers. "
+"Leading the projects entails understanding project requirements and creating the game design and technical design documents, and distributing the tasks to the other developers."
+"\nI also managed sprint workflow, conducting daily scrums and bi-weekly spring reviews and planning."
+"\nI moved the company projects onto GitHub and used a git-flow workstyle among the developers. "
+"\nuring my time there, I made VR projects in team sizes of 2-3, image classification machine learning, and mobile games."
const para = text.split('\n').map(str => <p>{str}</p>)
const cardData = [
  {title:"Immersively", 
  desc:"Unity Developer (Feb 2021 - Jun 2021)",
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

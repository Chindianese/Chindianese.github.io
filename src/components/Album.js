import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import ProjectCard from './ProjectCard';

import { ImageList, ImageListItem } from '@mui/material';

import { Masonry } from '@mui/lab';
import ReactPlayer from 'react-player';


const cardData = [
  {
    title: "Skate?",
    cover: "skate.webm",
    coverType: 'video',
    desc: "Mobile app",
    moreInfo:
      <div>
          {/* <ReactPlayer width="100%"
          url="areyouskatingtoday.mp4"
          controls={true}
        /> */}
    <ImageList cols={1}>
          {[1].map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`Skate (${item}).jpg`}
                alt={item}
                loading="..."
              />
              {/* <ImageListItemBar
            title={item}
            subtitle={<span>by: {item.author}</span>}
            position="below"
          /> */}
            </ImageListItem>

          ))}
        </ImageList>
        <Typography>
          An IOS and Android app. Find skate spots and where your friends are skating! Create and customise your character to represent yourself!
        </Typography>
        <Typography>
          Built in react native.
        </Typography>
        
        <div><a href="https://apps.apple.com/us/app/skate/id6451195071">ios</a></div>
        <div><a href="https://play.google.com/store/apps/details?id=com.chindianese.areyouskatingtoday">andriod</a></div>
      </div>
  },
  {
    title: "Sleeve",
    coverType: "video",
    cover: "sleeve trailer.mp4",
    desc: "Design tattoo sleeves.",
    moreInfo:
      <div>
        {/* <ReactPlayer width="100%"
          url="sleeve trailer.mp4"
          controls={true}
        /> */}
        <Typography>
          Use a preset tattoo or upload your own. Built in babylonJS and hosted on Firebase.
        </Typography>
        <Link href="https://slee-ve.web.app/">https://slee-ve.web.app/</Link>
      </div>

  },
  {
    title: "Dither Shaders",
    desc: "Custom Unity lighting",
    coverType: 'img',
    cover: 'dither.gif',
    moreInfo:
      <div>
        <Typography>Built with shader graph in URP. Custom lighting shader code pixelates lighting, toons it, and adds a dither effect. </Typography>
        <img src={"Dither Shaders (1).gif"} alt="loading..." width="100%" />
      </div>,
  },
  {
    title: "Wet Shader",
    desc: "Unity shader for dynamic wet ground",
    cover:"Wet Shader.mp4",
    coverType: "video",
    moreInfo:
      <div>
        <Typography>Built with shader graph in URP. Wet ground and puddle shader blends height maps, and noise maps to create dynamic puddles.</Typography>
        {/* <ReactPlayer width="100%"
          url="Wet Shader.mp4"
          controls={true}
        /> */}
        <ImageList cols={2}>
          {[2, 3, 4].map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`Wet Shader (${item}).jpg`}
                alt={item}
                loading="..."
              />
              {/* <ImageListItemBar
            title={item}
            subtitle={<span>by: {item.author}</span>}
            position="below"
          /> */}
            </ImageListItem>

          ))}
        </ImageList>
      </div>,
  },
  {
    title: "EVE",
    desc: "App for taking attendance",
    moreInfo:
      <div>
        <Typography>
          Built in android studio with Google Firebase as an online Database. It was used during NYP freshmen orientation to take attendance of ~300 student.
        </Typography>
        <ImageList cols={2}>
          {[2, 3, 4].map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`EVE (${item}).jpg`}
                alt={item}
                loading="...."
              />
              {/* <ImageListItemBar
            title={item}
            subtitle={<span>by: {item.author}</span>}
            position="below"
          /> */}
            </ImageListItem>

          ))}
        </ImageList>
      </div>,
  },
  // {
  //   title: "SelfieAI",
  //   desc: "Neural net in Unity",
  //   moreInfo:
  //     <div>
  //       <Typography>Classify hair and facial features with neural network classification in unity. Models trained with google's inception graph, through tensorflow for poets in python for image classification. Models run through Unity Barracuda.</Typography>
  //       <ImageList cols={2}>
  //         {[1, 2, 3, 4].map((item) => (
  //           <ImageListItem key={item.img}>
  //             <img
  //               src={`SelfieAI (${item}).jpg`}
  //               alt={item}
  //               loading="...."
  //             />
  //             {/* <ImageListItemBar
  //           title={item}
  //           subtitle={<span>by: {item.author}</span>}
  //           position="below"
  //         /> */}
  //           </ImageListItem>

  //         ))}
  //       </ImageList>
  //     </div>,
  // },

]

export default function Album() {
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
            Projects
          </Typography>
        </Container>
      </Box>
      <Container sx={{ py: 2 }} maxWidth="lg">
        {/* End hero unit */}
        <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={2}>
          {cardData.map((card) => (
            <ProjectCard cardData={card} />
          ))}
        </Masonry>
      </Container>

    </main>
  );
}

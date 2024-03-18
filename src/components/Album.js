import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import ProjectCard from './ProjectCard';

import { ImageList, ImageListItem, List, ListItem, Modal } from '@mui/material';

import { Masonry } from '@mui/lab';
// import ReactPlayer from 'react-player';



export default function Album() {
  const [modalImage, setModalImage] = React.useState("")
  function openImage(image) {
    setModalImage(image)
    console.log(image)
  }
  function ExpandableImage(image) {
    return <img key={image}onClick={() => { openImage(image) }} src={image} alt="loading..." width="100%" />
  }

  const cardData = [
    {
      title: "Skate?",
      cover: "areyouskatingtoday.mp4",
      coverType: 'video',
      desc: "Mobile app",
      moreInfo:
        <div>
          {/* <ReactPlayer width="100%"
            url="areyouskatingtoday.mp4"
            controls={true}
          /> */}

          <Typography variant="h6">
            Skate - Discover the Skate Scene, Find Your Crew
          </Typography>
          <Typography>
            Connect with fellow skaters and explore local skate spots with Skate, a mobile app for iOS and Android.
          </Typography>
          <Typography>
            <strong>Find the perfect grind: </strong>Discover skate parks, bowls, ramps, and street spots near you, all curated by the skating community.
          </Typography>
          <Typography>
            <strong>Meet up with your crew: </strong>See where your friends are skating and easily connect with them to plan your next session.
          </Typography>
          <Typography>
            <strong>Express yourself: </strong>Create and personalize your digital skater avatar to represent your unique style.
          </Typography>
          <Typography>
            Built with React Native for a smooth and seamless user experience on both iOS and Android devices.
          </Typography>
          <Typography>
            Built in react native.
          </Typography>
          <Link href="https://apps.apple.com/us/app/skate/id6451195071">app store</Link>
          <Typography></Typography>
          <Link href=" https://play.google.com/store/apps/details?id=com.chindianese.areyouskatingtoday">play store</Link>

        </div>
    },
    {
      title: "Sleeve",
      coverType: "video",
      cover: "sleeve trailer.mp4",
      desc: "Web app",
      moreInfo:
        <div>
          <Typography variant="h6">Sleeve - Try on and design a tattoo sleeve</Typography>
          <Typography>
            Sleeve is a web app that lets you experiment with different tattoos virtually, helping you find the perfect design before getting inked permanently.
          </Typography>
          <Typography>
            <strong>Browse a library of pre-designed tattoos: </strong>Find inspiration from a curated selection of high-quality tattoo designs.
          </Typography>
          <Typography>
            <strong> Upload your own custom design: </strong>Bring your own ideas to life and see how they would look on your skin.
          </Typography>
          <Typography>
            <strong>Customize & personalize: </strong>Adjust the size, position, and rotation of the tattoo to find the perfect placement.
          </Typography>
          <Typography>
            Sleeve is built using Babylon.js and hosted on Firebase, ensuring a smooth and secure user experience.
          </Typography>
          <Typography>
            Visit Sleeve today and start exploring your tattoo possibilities!
          </Typography>
          <Link href="https://slee-ve.web.app/">https://slee-ve.web.app/</Link>
        </div>

    },

    {
      title: "Wet Ground & Puddle Shader",
      desc: "Wet ground shader",
      cover: "Wet Shader.gif",
      coverType: "img",
      moreInfo:
        <div>
          <Typography variant="p1">
            From analyzing a puddle to creating a shader, I documented my design process in this article:
          </Typography>
          <Typography></Typography>
           <Link href="https://medium.com/@tayhaocheng.media/creating-a-puddles-shader-in-unity-from-observation-to-implementation-828f85dc2a4e">Medium | Creating a Puddles Shader in Unity | Tay Hao Cheng</Link>
          <Typography>
            This custom shader, built within Unity's Shader Graph with URP (Universal Render Pipeline), dynamically simulates wet ground and puddles, enhancing the realism of your environments.
          </Typography>
          <Typography>
            <strong>Realistic Wetness: </strong>Creates a convincing wet ground appearance, with a sheen and reflections.
          </Typography>
          <Typography>
            <strong>Dynamic Puddles: </strong>Simulates puddles that accumulate and recede.
          </Typography>
          <Typography>
            These effects are in use for a game I am currently working on!
          </Typography>
          <ImageList cols={2}>
            {[1, 2, 3].map((item) => (
              <ImageListItem key={'wet' + item.img}>
                {ExpandableImage(`Wet Shader (${item}).jpg`)}
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
      title: "Dither Shaders",
      desc: "Custom Unity lighting",
      coverType: 'img',
      cover: 'dither.gif',
      moreInfo:
        <div>
          <Typography variant="h6">Dither Shaders - Pixel-Perfect Style for URP Games</Typography>
          <Typography variant="p1">
            How I implemented these effect will be documented in a blog (coming soon)
          </Typography>
          <Typography>
            This custom shader, built within Unity's Shader Graph and extended with HLSL code, transforms lighting and adds a nostalgic pixelated aesthetic to your URP projects.
          </Typography>
          <Typography>
            <strong>Pixelated Lighting: </strong>Custom lighting calculations create a pixelated lighting effect, reminiscent of classic video games.
          </Typography>
          <Typography>
            <strong>Toon Shading: </strong>Smooth gradients are replaced with sharp transitions, creating the stylized look.
          </Typography>
          <Typography>
            <strong>Dither Effect: </strong>Dithering adds depth and texture, further emphasizing the pixelated aesthetic.
          </Typography>
          <Typography>
            These effects are in use for a game I am currently working on!
          </Typography>
          {ExpandableImage("Dither Shaders (1).gif")}
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
              <ImageListItem key={'eve' + item.img}>
               {ExpandableImage(`EVE (${item}).jpg`)}
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
            <ProjectCard cardData={card} key={'card ' + card.title} />
          ))}
        </Masonry>
      </Container>
      <Modal
        open={modalImage ? true : false}
        onClose={() => { setModalImage(false) }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '80%',
          height: '80%',
          textAlign: 'center',
          border: '2px solid #000',
          boxShadow: 12,
          backgroundColor: '#808080',
          p: 2,
        }}>
          <img src={modalImage}   width={"100%"} height={"100%"} style={{objectFit: 'contain'}}></img>
        </Box>
      </Modal>
    </main>
  );
}

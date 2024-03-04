
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, CardActionArea, Modal } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import * as React from 'react';

const ExpandMore = styled((props) => {

  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ProjectCard(props) {
  const [expanded, setExpanded] = React.useState(false);


  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  // console.log("CARD", props.cardData)
  return (
    <Card sx={{ display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component={props.cardData.coverType ? props.cardData.coverType : 'img'}
        // image={props.cardData.title === "title" ? "https://source.unsplash.com/random" : `${props.cardData.title.replace('?', '')} (1).jpg`}
        image={props.cardData.title === "title" ? "https://source.unsplash.com/random" : props.cardData.cover ? props.cardData.cover : `${props.cardData.title} (1).jpg`}
        alt="cover image here lol"
        controls
        muted
        autoPlay
        loop
        playsInline
      />

      <CardActionArea onClick={handleExpandClick}>
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            {props.cardData.title}
          </Typography>
          <Typography>
            {props.cardData.desc}
          </Typography>
        </CardContent>

        {/* <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
        <ShareIcon />
      </IconButton> */}
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActionArea>
      <Collapse in={expanded} timeout="auto" unmountOnExit >
        <CardContent>
          {props.cardData.moreInfo}
        </CardContent>
      </Collapse>

    </Card >
  );
}
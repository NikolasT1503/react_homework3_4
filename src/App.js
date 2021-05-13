import React from "react";
import "./App.css";
import Lorem from "react-lorem-ipsum";
import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Collapse from '@material-ui/core/Collapse';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  mainFeaturesPost: {
    position: "relative",
    color: theme.palette.common.white,
    marginBottom: theme.spacing(1),
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundOverlay: "rgba(0,0,0,0.3)",
  },
  mainFeaturesPostContent: {
    position: "relative",
    padding: theme.spacing(6),
    marginTop: theme.spacing(8),
  },
  /*   avatar: {
    backgroundColor: red[500],
  }, */
}));

/* const newsCard = ({ title, desc }) => {
  return (
    <div
      style={{
        boxSizing: "border-box",
        padding: "10px",
        border: "1px solid black",
        width: "30%",
        borderRadius: "10px",
      }}
    >
      <h2>{title}</h2>
      <p>{desc}</p>
    </div>
  );
}; */

const data = [
  {
    title: "Новость №1",
    desc: <Lorem count="1" />,
    content: <Lorem/>
  },
  {
    title: "Новость №2",
    desc: <Lorem count="1" />,
    content: <Lorem/>
  },
  {
    title: "Новость №3",
    desc: <Lorem count="1" />,
    content: <Lorem/>
  },
  {
    title: "Новость №4",
    desc: <Lorem count="1" />,
    content: <Lorem/>
  },
];

const NewsCard = ({ title, desc, content }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={title}
        subheader="September 14, 2016"
      />
      <CardMedia
        className={classes.media}
        image="https://source.unsplash.com/random"
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {desc}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            {content}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

function App() {
  return (
    <div className="App">
      <img
        style={{
          maxWidth: "100%",
        }}
        src="https://www.onetwotrip.com/ru/blog/wp-content/uploads/2016/10/time-to-travel.jpg"
        alt="Привет мир!"
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {data.map((props) => NewsCard(props))}
      </div>
    </div>
  );
}

export default App;

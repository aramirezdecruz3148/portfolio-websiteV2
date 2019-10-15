import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import styles from './PortfolioCards.css';
import heyArnold from '../../assets/heyArnold.png';
import github from '../../assets/githubLogo.png';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  card: {
    width: '44vw'
  },
  media: {
    paddingTop: '12vw',
    height: '13vw'
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  root: {
    fontSize: '2.2vw',
    padding: '0',
    color: 'black',
  }
}));

const adjustSpacing = makeStyles(() => ({
  root: {
    padding: '1vw'
  },
  body1: {
    fontFamily: 'Assistant',
    fontSize: '1vw',
    margin: '0'
  },
  h5: {
    fontFamily: 'Roboto Condensed',
    fontSize: '1.2vw',
    fontWeight: 'bolder',
    marginTop: '1vw',
    textAlign: 'left'
  }
}));

export default function Arnold() {
  const classes = useStyles();
  const spacing = adjustSpacing();
  const [expanded, setExpanded] = useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  return (
    <div className={styles.spaceAround}>
      <Card
        square={true}
        className={classes.card}
      >
        <CardContent spacing={spacing.root} className={styles.card}>
          <Typography variant="h4">Hey Arnold API</Typography>
          <Typography variant="h5">BACK-END APP</Typography>
        </CardContent>
        {!expanded ? (
          <CardContent>
            <p className={styles.caption}>
            An API based on Nickelodeons, Hey Arnold show.
            </p>
          </CardContent>
        ) : (
          <CardMedia
            className={classes.media}
            image={heyArnold}
            title="screen shot of my twitter bot"
          />
        )}
        <CardActions className={spacing.root}>
          <div className={styles.multipleLink}>
            <a href="https://hey-arnold-api-documentation.netlify.com/" rel="noopener noreferrer" target="_blank">
              <button className={styles.anchorButtons}>
                VIEW
                <br />
                DOCS
              </button>
            </a>
            <a href="https://github.com/aramirezdecruz3148/hey-arnold-api" rel="noopener noreferrer" target="_blank">
              <img className={styles.logo} src={github} />
            </a>
          </div>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon className={classes.root} />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph className={spacing.body1}>
            I created an API for the classic Nickelodeon show, Hey Arnold 
            which provides routes for both character information and GIFs. 
            The information is publicly sourced and I do not claim to own it. 
            For information on usage/routes/endpoints visit the 
              <a href='https://hey-arnold-api-documentation.netlify.com/'> documentation</a>.
            </Typography>
            <Typography className={spacing.h5} variant="h5">
              TECH
            </Typography>
            <Typography paragraph variant="body1" className={spacing.body1}>
              • Node.js
            </Typography>
            <Typography paragraph variant="body1" className={spacing.body1}>
              • MongoDB
            </Typography>
            <Typography paragraph variant="body1" className={spacing.body1}>
              • Mongoose
            </Typography>
            <Typography paragraph variant="body1" className={spacing.body1}>
              • Cheerio
            </Typography>
            <Typography paragraph variant="body1" className={spacing.body1}>
              • Supertest
            </Typography>
            <Typography paragraph variant="body1" className={spacing.body1}>
              • Jest
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}

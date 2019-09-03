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
import alchemyBot from '../../assets/alchemyBot.png';
import github from '../../assets/githubLogo.png';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  card: {
    width: '35vw',
  },
  media: {
    paddingTop: '12vw'
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
    padding: '0'
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

export default function Hp() {
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
        raised={true}
      >
        <CardContent spacing={spacing.root} className={styles.card}>
          <Typography variant="h4">@AlchemyPDXBOT</Typography>
          <Typography variant="h5">BACK-END APP</Typography>
        </CardContent>
        {!expanded ? (
          <CardContent>
            <p className={styles.caption}>
            A whimsical twitter bot serving a coding community! Click below to
            view the deployed app, the source code, or click the expand icon for
            project details and tech.
            </p>
          </CardContent>
        ) : (
          <CardMedia
            className={classes.media}
            image={alchemyBot}
            title="screen shot of my twitter bot"
          />
        )}
        <CardActions className={spacing.root}>
          <div className={styles.multipleLink}>
            <a href="https://twitter.com/AlchemyPDXBot" rel="noopener noreferrer" target="_blank">
              <button className={styles.anchorButtons}>
                VIEW
                <br />
                APP
              </button>
            </a>
            <a href="https://github.com/rainbow-robots/alchemy-community-bot" rel="noopener noreferrer" target="_blank">
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
              AlchemyPDXBot is a twitter bot created by Claire Cassidy, Emily
              Ford, and myself for the alchemy code lab community. If you have a
              coding question just include our bot handle @AlchemyPDXBot and
              your question with #help and the bot will post your original
              question so the alchemy community can comment with answers/ideas.
              Had a long day of coding and need a pick-me-up? Tweet
              @AlchemyPDXBot with #joke, and our bot will tweet you a random
              coding joke. Did you meet a milestone or have a favorite memory or
              pic of your time at alchemy? Tweet @AlchemyPDXBot with
              #AlchemyMoment and it will be saved in a collection and retweeted
              as a throwback once a week. We also have a Rasberry Pi with a
              keypad of emojis we programmed, living within the Alchemy
              building, coders can take a moment in their day to create an emoji
              story on the keypad and our bot will post it. I handled the
              communication between our code base and the Twitter API as well as
              helped to create the models for our database and routes.
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
              • Express
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

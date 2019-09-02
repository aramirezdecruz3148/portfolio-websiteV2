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
import moddo from '../../assets/moddo.png';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  card: {
    width: '22vw'
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
    transform: 'rotate(180deg)'
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

export default function Moddo() {
  const classes = useStyles();
  const spacing = adjustSpacing();
  const [expanded, setExpanded] = useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  return (
    <div className={styles.spaceAround}>
      <Card square={true} className={classes.card} raised={true}>
        <CardContent spacing={spacing.root} className={styles.card}>
          <Typography variant="h4">MODDO</Typography>
          <Typography variant="h5">FRONT-END APP</Typography>
        </CardContent>
        {!expanded ? (
          <CardContent>
            <p className={styles.caption}>
              Moddo was created to begin your day with a random motto as well as
              providing a space to keep track of your lists/tasks. Click below
              to view the deployed app or click the expand icon for project
              details and tech.
            </p>
          </CardContent>
        ) : (
          <CardMedia
            className={classes.media}
            image={moddo}
            title="screen shot of my app Moddo"
          />
        )}
        <CardActions className={spacing.root}>
          <a href="https://moddo.netlify.com/">
            <button className={styles.anchorButtons}>
              VIEW
              <br />
              APP
            </button>
          </a>
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
              Moddo is an app created by Vasily Markov, Jon Forney, Danny
              Suarez, Emily Ford, and myself. We designed a space to start your
              day by receiving a random motto, and a place to manage your daily
              tasks. You have the ability as a user to create an account,
              favorite and revisit mottos you like, as well as build and manage
              different task lists. I handled the API calls, the building of
              components and data flow between them, as well as mapping our data
              in Firebase.
            </Typography>
            <Typography className={spacing.h5} variant="h5">
              TECH
            </Typography>
            <Typography paragraph variant="body1" className={spacing.body1}>
              • JavaScript Components
            </Typography>
            <Typography paragraph variant="body1" className={spacing.body1}>
              • HTML/CSS
            </Typography>
            <Typography paragraph variant="body1" className={spacing.body1}>
              • Firebase
            </Typography>
            <Typography paragraph variant="body1" className={spacing.body1}>
              • Random Advice and Lorem Picsum APIs
            </Typography>
            <Typography paragraph variant="body1" className={spacing.body1}>
              • QUnit
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}

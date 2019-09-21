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
import newzie from '../../assets/newzie.png';
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
    transform: 'rotate(180deg)'
  },
  root: {
    fontSize: '2.2vw',
    color: 'black',
    padding: '0'
  }
}));

const adjustSpacing = makeStyles(() => ({
  root: {
    padding: '1vw'
  },
  body1: {
    fontFamily: 'Assistant',
    fontSize: '1.5vw',
    margin: '0'
  },
  h5: {
    fontFamily: 'Roboto Condensed',
    fontSize: '1.5vw',
    fontWeight: 'bolder',
    marginTop: '1vw',
    textAlign: 'left'
  }
}));

export default function Newzie() {
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
          <Typography variant="h4">NEWZIE</Typography>
          <Typography variant="h5">FULL-STACK APP</Typography>
        </CardContent>
        {!expanded ? (
          <CardContent>
            <p className={styles.caption}>
            An app that allows you to consume, cultivate and organize the news how YOU want.
            </p>
          </CardContent>
        ) : (
          <CardMedia
            className={classes.media}
            image={newzie}
            title="screen shot of the Newzie app"
          />
        )}
        <CardActions className={spacing.root}>
          <a href="https://newzie.netlify.com/" rel="noopener noreferrer" target="_blank">
            <button className={styles.anchorButtons}>
              VIEW
              <br />
              APP
            </button>
          </a>
          <a href="https://github.com/The-Newsies" rel="noopener noreferrer" target="_blank">
            <img className={styles.logo} src={github} />
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
              Newzie is an app created by Susan Puckett, Carlos Us Santiago, Leigh-Ann Crivella, and myself.
              You can view trending new stories, filter by category, and search by key words,
              sort by sentiment analysis of the news article description, and when you create
              a free user account with Newzie you have the ability to create your own collections
              of news stories that you can gather, edit and save to revisit later. I worked mainly
              on the front-end building out our React components, structuring our redux, and ensuring
              we were testing across components and actions, reducers, selectors.
            </Typography>
            <Typography className={spacing.h5} variant="h5">
              TECH
            </Typography>
            <Typography paragraph variant="body1" className={spacing.body1}>
              • MongoDB
            </Typography>
            <Typography paragraph variant="body1" className={spacing.body1}>
              • Node
            </Typography>
            <Typography paragraph variant="body1" className={spacing.body1}>
              • Express
            </Typography>
            <Typography paragraph variant="body1" className={spacing.body1}>
              • React/Redux
            </Typography>
            <Typography paragraph variant="body1" className={spacing.body1}>
              • The News API
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

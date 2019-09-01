import React from 'react';
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
import bwHP from '../../assets/bw-HP.png';
import HP from '../../assets/HP.png';
import bwAlchemyBot from '../../assets/bw-alchemyBot.png';
import alchemyBot from '../../assets/alchemyBot.png';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: '22vw'
  },
  media: {
    height: '0',
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

export default function PortfolioCards() {
  const classes = useStyles();
  const spacing = adjustSpacing();
  const [expanded, setExpanded] = React.useState(false);
  const [hoverHP, onHoveredHP] = React.useState(false);
  const [hoverBot, onHoveredBot] = React.useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  return (
    <div className={styles.container}>
      <Card
        square={true}
        className={classes.card}
        raised={true}
        onMouseLeave={() => onHoveredHP(false)}
        onMouseEnter={() => onHoveredHP(true)}
        onClick={() => onHoveredHP(true)}
      >
        <CardContent spacing={spacing.root} className={styles.card}>
          <Typography variant="h4">HARRY POTTER DIRECTORY</Typography>
          <Typography variant="h5">FRONT-END APP</Typography>
        </CardContent>
        <CardMedia
          className={classes.media}
          image={hoverHP ? HP : bwHP}
          title="screen shot of my HP site"
        />
        <CardContent>
          <p className={styles.caption}>
            {' '}
            A directory containing all characters and spells within the Harry
            Potter universe. Click below to view the deployed app or click the
            expand icon for project details and tech.
          </p>
        </CardContent>
        <CardActions className={spacing.root}>
          <a href="https://harry-potter-directory.netlify.com">
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
              I created this project as a directory and resource for all
              characters and spells within the Harry Potter universe. The
              character directory provides details on each characters school,
              house, and blood status as well as the ability to filter all
              characters based on house, blood status and group affiliation
              (D.A, Death Eater, etc). The spell directory provides a list of
              all spells in alphabetical order that appear within the 7 books of
              the Harry Potter series. For each spell you are given the type
              (charm, hex, curse, etc) and the effect of the spell.
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
              • Harry Potter API
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
      <Card
        square={true}
        className={classes.card}
        raised={true}
        onMouseLeave={() => onHoveredBot(false)}
        onMouseEnter={() => onHoveredBot(true)}
        onClick={() => onHoveredBot(true)}
      >
        <CardContent spacing={spacing.root} className={styles.card}>
          <Typography variant="h4">HARRY POTTER DIRECTORY</Typography>
          <Typography variant="h5">FRONT-END APP</Typography>
        </CardContent>
        <CardMedia
          className={classes.media}
          image={hoverBot ? alchemyBot : bwAlchemyBot}
          title="screen shot of my HP site"
        />
        <CardContent>
          <p className={styles.caption}>
            {' '}
            A directory containing all characters and spells within the Harry
            Potter universe. Click below to view the deployed app or click the
            expand icon for project details and tech.
          </p>
        </CardContent>
        <CardActions className={spacing.root}>
          <a href="https://harry-potter-directory.netlify.com">
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
              I created this project as a directory and resource for all
              characters and spells within the Harry Potter universe. The
              character directory provides details on each characters school,
              house, and blood status as well as the ability to filter all
              characters based on house, blood status and group affiliation
              (D.A, Death Eater, etc). The spell directory provides a list of
              all spells in alphabetical order that appear within the 7 books of
              the Harry Potter series. For each spell you are given the type
              (charm, hex, curse, etc) and the effect of the spell.
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
              • Harry Potter API
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}

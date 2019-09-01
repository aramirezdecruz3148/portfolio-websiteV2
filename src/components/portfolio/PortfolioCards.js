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

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
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
  }
}));

export default function PortfolioCards() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [hover, onHovered] = React.useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  return (
    <Card
      square={true}
      className={classes.card}
      raised={true}
      onMouseLeave={() => onHovered(false)}
      onMouseEnter={() => onHovered(true)}
      onClick={() => onHovered(true)}
    >
      <CardContent className={styles.card}>
        <h4>HARRY POTTER DIRECTORY</h4>
        <h5>FRONT-END APP</h5>
      </CardContent>
      <CardMedia
        className={classes.media}
        image={hover ? HP : bwHP}
        title="screen shot of my HP site"
      />
      <CardContent>
        <p className={styles.caption}>
          <em>A directory containing all characters and spells within the Harry
          Potter universe. Click below to view the deployed app or click the expand icon for
          project details and tech.</em>
        </p>
      </CardContent>
      <CardActions>
        <a href='https://harry-potter-directory.netlify.com'>
          <button>View App</button>
        </a>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
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
          <section>
            <p>I created this project as a directory and resource for all characters 
              and spells within the Harry Potter universe. The character directory provides
              details on each characters school, house, and blood status as well as the
              ability to filter all characters based on house, blood status and group
              affiliation (D.A, Death Eater, etc). The spell directory provides a list
              of all spells in alphabetical order that appear within the 7 books of the
              Harry Potter series. For each spell you are given the type (charm, hex, curse, etc)
              and the effect of the spell.
            </p>
            <p>
              <strong>Tech:</strong>
            </p>
            <ul>
              <li>JavaScript components</li>
              <li>HTML/CSS</li>
              <li>Harry Potter API: https://www.potterapi.com/</li>
            </ul>
          </section>
        </CardContent>
      </Collapse>
    </Card>
  );
}

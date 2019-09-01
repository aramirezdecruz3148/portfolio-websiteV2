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
      className={classes.card}
      raised={true}
      onMouseLeave={() => onHovered(false)}
      onMouseEnter={() => onHovered(true)}
      onClick={() => onHovered(true)}
    >
      <CardContent>
        <h4>Harry Potter Directory | Front-End App</h4>
      </CardContent>
      <CardMedia
        className={classes.media}
        image={hover ? HP : bwHP}
        title="screen shot of my HP site"
      />
      <CardContent>
        <p>
          A directory containing all characters and spells within the Harry
          Potter universe. Click below to view the deployed app or click the expand icon for
          project details and tech.
        </p>
      </CardContent>
      <CardActions>
        <a href='https://harry-potter-directory.netlify.com'>
          <button>Deployed App</button>
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
            <p>Description of the project, as well as my contributions.</p>
            <p>
              <strong>Tech:</strong>
            </p>
          </section>
        </CardContent>
      </Collapse>
    </Card>
  );
}

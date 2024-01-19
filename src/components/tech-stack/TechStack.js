import React from 'react';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import { makeStyles } from '@material-ui/core/styles';
import styles from './TechStack.css';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    fontSize: '2.2vw',
  }
});


export default function TestTechStack() {
  const classes = useStyles();

  return (
    <div className={styles.techStack}>
      <Typography>
        <TreeView
          defaultCollapseIcon={<ExpandMoreIcon className={classes.root} />}
          defaultExpandIcon={<ChevronRightIcon className={classes.root} />}
        >
          <TreeItem nodeId='1' label='Languages'>
            <TreeItem nodeId='2' label='JavaScript' />
            <TreeItem nodeId='3' label='Ruby' />
            <TreeItem nodeId='4' label='HTML' />
            <TreeItem nodeId='5' label='CSS' />
          </TreeItem>
        </TreeView>
      </Typography>
      <Typography>
        <TreeView
          defaultCollapseIcon={<ExpandMoreIcon className={classes.root} />}
          defaultExpandIcon={<ChevronRightIcon className={classes.root} />}
        >
          <TreeItem nodeId='6' label='Front-End'>
            <TreeItem nodeId='7' label='Ember' />
            <TreeItem nodeId='8' label='React' />
            <TreeItem nodeId='9' label='Tailwind' />
            <TreeItem nodeId='10' label='Redux' />
            <TreeItem nodeId='11' label='GlimmerX' />
          </TreeItem>
        </TreeView>
      </Typography>
      <Typography>
        <TreeView
          defaultCollapseIcon={<ExpandMoreIcon className={classes.root} />}
          defaultExpandIcon={<ChevronRightIcon className={classes.root} />}
        >
          <TreeItem nodeId='12' label='Back-End'>
            <TreeItem nodeId='13' label='Rails' />
            <TreeItem node='14' label='GraphQL' />
            <TreeItem nodeId='15' label='Node.js' />
            <TreeItem nodeId='16' label='Express' />
          </TreeItem>
        </TreeView>
      </Typography>
      <Typography>
        <TreeView
          defaultCollapseIcon={<ExpandMoreIcon className={classes.root} />}
          defaultExpandIcon={<ChevronRightIcon className={classes.root} />}
        >
          <TreeItem nodeId='17' label='Databases'>
            <TreeItem nodeId='18' label='PostgreSQL' />
            <TreeItem nodeId='19' label='Firebase' />
            <TreeItem nodeId='20' label='MongoDB' />
          </TreeItem>
        </TreeView>
      </Typography>
      <Typography>
        <TreeView
          defaultCollapseIcon={<ExpandMoreIcon className={classes.root} />}
          defaultExpandIcon={<ChevronRightIcon className={classes.root} />}
        >
          <TreeItem nodeId='21' label='Tools'>
            <TreeItem nodeId='22' label='Github' />
            <TreeItem nodeId='23' label='Slack' />
            <TreeItem nodeId='24' label='Jira' />
            <TreeItem nodeId='25' label='VScode' />
            <TreeItem nodeId='26' label='Prismic' />
            <TreeItem nodeId='27' label='Shopify' />
            <TreeItem nodeId='28' label='Heroku' />
          </TreeItem>
        </TreeView>
      </Typography>
      <Typography>
        <TreeView
          defaultCollapseIcon={<ExpandMoreIcon className={classes.root} />}
          defaultExpandIcon={<ChevronRightIcon className={classes.root} />}
        >
          <TreeItem nodeId='29' label='Testing'>
            <TreeItem nodeId='30' label='QUnit' />
            <TreeItem nodeId='31' label='Cypress' />
            <TreeItem nodeId='32' label='Rspec' />
            <TreeItem nodeId='33' label='Semaphore CI' />
            <TreeItem nodeId='34' label='Jest' />
          </TreeItem>
        </TreeView>
      </Typography>
    </div>
  );
}

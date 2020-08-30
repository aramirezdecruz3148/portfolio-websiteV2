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
            <TreeItem nodeId='2' label='Ruby' />
            <TreeItem nodeId='3' label='JavaScript' />
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
            <TreeItem nodeId='7' label='React' />
            <TreeItem nodeId='8' label='Redux' />
            <TreeItem nodeId='9' label='jQuery' />
          </TreeItem>
        </TreeView>
      </Typography>
      <Typography>
        <TreeView
          defaultCollapseIcon={<ExpandMoreIcon className={classes.root} />}
          defaultExpandIcon={<ChevronRightIcon className={classes.root} />}
        >
          <TreeItem nodeId='10' label='Back-End'>
            <TreeItem nodeId='11' label='Ruby' />
            <TreeItem nodeId='12' label='Node.js' />
            <TreeItem nodeId='13' label='Express' />
          </TreeItem>
        </TreeView>
      </Typography>
      <Typography>
        <TreeView
          defaultCollapseIcon={<ExpandMoreIcon className={classes.root} />}
          defaultExpandIcon={<ChevronRightIcon className={classes.root} />}
        >
          <TreeItem nodeId='14' label='Databases'>
            <TreeItem nodeId='15' label='PostgreSQL' />
            <TreeItem nodeId='16' label='Firebase' />
            <TreeItem nodeId='17' label='MongoDB' />
            <TreeItem nodeId='18' label='Mongoose' />
          </TreeItem>
        </TreeView>
      </Typography>
      <Typography>
        <TreeView
          defaultCollapseIcon={<ExpandMoreIcon className={classes.root} />}
          defaultExpandIcon={<ChevronRightIcon className={classes.root} />}
        >
          <TreeItem nodeId='19' label='Tools'>
            <TreeItem nodeId='20' label='Github' />
            <TreeItem nodeId='21' label='Slack' />
            <TreeItem nodeId='22' label='Jira' />
            <TreeItem nodeId='23' label='VScode' />
            <TreeItem nodeId='24' label='Heroku' />
            <TreeItem nodeId='25' label='Netlify' />
          </TreeItem>
        </TreeView>
      </Typography>
      <Typography>
        <TreeView
          defaultCollapseIcon={<ExpandMoreIcon className={classes.root} />}
          defaultExpandIcon={<ChevronRightIcon className={classes.root} />}
        >
          <TreeItem nodeId='26' label='Testing'>
            <TreeItem nodeId='27' label='Cypress' />
            <TreeItem nodeId='28' label='Rspec' />
            <TreeItem nodeId='29' label='Semaphore CI' />
            <TreeItem nodeId='30' label='Jest' />
            <TreeItem nodeId='31' label='QUnit' />
          </TreeItem>
        </TreeView>
      </Typography>
    </div>
  );
}

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
            <TreeItem nodeId='3' label='HTML' />
            <TreeItem nodeId='4' label='CSS' />
          </TreeItem>
        </TreeView>
      </Typography>
      <Typography>
        <TreeView
          defaultCollapseIcon={<ExpandMoreIcon className={classes.root} />}
          defaultExpandIcon={<ChevronRightIcon className={classes.root} />}
        >
          <TreeItem nodeId='5' label='Front-End'>
            <TreeItem nodeId='6' label='React' />
            <TreeItem nodeId='7' label='Redux' />
          </TreeItem>
        </TreeView>
      </Typography>
      <Typography>
        <TreeView
          defaultCollapseIcon={<ExpandMoreIcon className={classes.root} />}
          defaultExpandIcon={<ChevronRightIcon className={classes.root} />}
        >
          <TreeItem nodeId='8' label='Back-End'>
            <TreeItem nodeId='9' label='Node.js' />
            <TreeItem nodeId='10' label='Express' />
          </TreeItem>
        </TreeView>
      </Typography>
      <Typography>
        <TreeView
          defaultCollapseIcon={<ExpandMoreIcon className={classes.root} />}
          defaultExpandIcon={<ChevronRightIcon className={classes.root} />}
        >
          <TreeItem nodeId='11' label='Databases'>
            <TreeItem nodeId='12' label='Firebase' />
            <TreeItem nodeId='13' label='MongoDB' />
            <TreeItem nodeId='14' label='Mongoose' />
          </TreeItem>
        </TreeView>
      </Typography>
      <Typography>
        <TreeView
          defaultCollapseIcon={<ExpandMoreIcon className={classes.root} />}
          defaultExpandIcon={<ChevronRightIcon className={classes.root} />}
        >
          <TreeItem nodeId='15' label='Tools'>
            <TreeItem nodeId='16' label='Github' />
            <TreeItem nodeId='17' label='Slack' />
            <TreeItem nodeId='18' label='VScode' />
            <TreeItem nodeId='19' label='Heroku' />
            <TreeItem nodeId='20' label='Netlify' />
          </TreeItem>
        </TreeView>
      </Typography>
      <Typography>
        <TreeView
          defaultCollapseIcon={<ExpandMoreIcon className={classes.root} />}
          defaultExpandIcon={<ChevronRightIcon className={classes.root} />}
        >
          <TreeItem nodeId='21' label='Testing'>
            <TreeItem nodeId='22' label='Jest' />
            <TreeItem nodeId='23' label='QUnit' />
          </TreeItem>
        </TreeView>
      </Typography>
    </div>
  );
}

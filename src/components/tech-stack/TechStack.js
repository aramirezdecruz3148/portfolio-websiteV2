import React from 'react';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import styles from './TechStack.css';

export default function TestTechStack() {
  return (
    <div className={styles.techStack}>
      <TreeView
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
      >
        <TreeItem className={styles.title} nodeId="1" label="Languages">
          <TreeItem className={styles.body} nodeId="2" label="JavaScript" />
          <TreeItem className={styles.body} nodeId="3" label="HTML" />
          <TreeItem className={styles.body} nodeId="4" label="CSS" />
        </TreeItem>
      </TreeView>
      <TreeView
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
      >
        <TreeItem nodeId="5" label="Front-End">
          <TreeItem nodeId="6" label="React" />
          <TreeItem nodeId="7" label="Redux" />
        </TreeItem>
      </TreeView>
      <TreeView
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
      >
        <TreeItem nodeId="8" label="Back-End">
          <TreeItem nodeId="9" label="Node.js" />
          <TreeItem nodeId="10" label="Express" />
        </TreeItem>
      </TreeView>
      <TreeView
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
      >
        <TreeItem nodeId="11" label="Databases">
          <TreeItem nodeId="12" label="Firebase" />
          <TreeItem nodeId="13" label="MongoDB" />
          <TreeItem nodeId="14" label="Mongoose" />
        </TreeItem>
      </TreeView>
      <TreeView
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
      >
        <TreeItem nodeId="15" label="Tools">
          <TreeItem nodeId="16" label="Github" />
          <TreeItem nodeId="17" label="Slack" />
          <TreeItem nodeId="18" label="VScode" />
          <TreeItem nodeId="19" label="Heroku" />
          <TreeItem nodeId="20" label="Netlify" />
        </TreeItem>
      </TreeView>
      <TreeView
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
      >
        <TreeItem nodeId="21" label="Testing">
          <TreeItem nodeId="22" label="Jest" />
          <TreeItem nodeId="23" label="QUnit" />
        </TreeItem>
      </TreeView>
    </div>
  );
}

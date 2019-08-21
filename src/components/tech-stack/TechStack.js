import React from 'react';
import styles from './TechStack.css';
import { Card, CardContent } from '@material-ui/core';

export default function TechStack() {
  return (
    <div className={styles.techStack}>
      <Card className={styles.card} raised={true} square={true}>
        <CardContent>
          <h4>Languages</h4>
          <ul className={styles.list}>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </CardContent>
      </Card>
      <Card className={styles.card} raised={true} square={true}>
        <CardContent>
          <h4>Front-End</h4>
          <ul className={styles.list}>
            <li>React</li>
            <li>Redux</li>
          </ul>
        </CardContent>
      </Card>
      <Card className={styles.card} raised={true} square={true}>
        <CardContent>
          <h4>Back-End</h4>
          <ul className={styles.list}>
            <li>Node.js</li>
            <li>Express</li>
          </ul>
        </CardContent>
      </Card>
      <Card className={styles.card} raised={true} square={true}>
        <CardContent>
          <h4>Databases</h4>
          <ul className={styles.list}>
            <li>Firebase</li>
            <li>MongoDB</li>
            <li>Mongoose</li>
          </ul>
        </CardContent>
      </Card>
      <Card className={styles.card} raised={true} square={true}>
        <CardContent>
          <h4>Tools</h4>
          <ul className={styles.list}>
            <li>Github</li>
            <li>Slack</li>
            <li>VScode</li>
            <li>Heroku</li>
            <li>Netlify</li>
          </ul>
        </CardContent>
      </Card>
      <Card className={styles.card} raised={true} square={true}>
        <CardContent>
          <h4>Testing</h4>
          <ul className={styles.list}>
            <li>Jest</li>
            <li>QUnit</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}

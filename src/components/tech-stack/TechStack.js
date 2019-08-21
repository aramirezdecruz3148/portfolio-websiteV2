import React from 'react';
import styles from './TechStack.css';
import { Card, CardContent } from '@material-ui/core';

export default function TechStack() {
  return (
    <div className={styles.techStack}>
      <Card className={styles.card} raised={true} square={true}>
        <CardContent className={styles.cardContent}>
          <h4 className={styles.title}>LANGUAGES</h4>
          <ul className={styles.list}>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </CardContent>
      </Card>
      <Card className={styles.card} raised={true} square={true}>
        <CardContent className={styles.cardContent}>
          <h4 className={styles.title}>FRONT-END</h4>
          <ul className={styles.list}>
            <li>React</li>
            <li>Redux</li>
          </ul>
        </CardContent>
      </Card>
      <Card className={styles.card} raised={true} square={true}>
        <CardContent className={styles.cardContent}>
          <h4 className={styles.title}>BACK-END</h4>
          <ul className={styles.list}>
            <li>Node.js</li>
            <li>Express</li>
          </ul>
        </CardContent>
      </Card>
      <Card className={styles.card} raised={true} square={true}>
        <CardContent className={styles.cardContent}>
          <h4 className={styles.title}>DATABASES</h4>
          <ul className={styles.list}>
            <li>Firebase</li>
            <li>MongoDB</li>
            <li>Mongoose</li>
          </ul>
        </CardContent>
      </Card>
      <Card className={styles.card} raised={true} square={true}>
        <CardContent className={styles.cardContent}>
          <h4 className={styles.title}>TOOLS</h4>
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
        <CardContent className={styles.cardContent}>
          <h4 className={styles.title}>TESTING</h4>
          <ul className={styles.list}>
            <li>Jest</li>
            <li>QUnit</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}

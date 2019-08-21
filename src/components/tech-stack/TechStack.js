import React from 'react';
import styles from './TechStack.css';
import { Card, CardContent } from '@material-ui/core';

export default function TechStack() {
  return (
    <div className={styles.techStack}>
      <Card className={styles.card} raised={true} square={true}>
        <CardContent className={styles.cardContent}>
          <section>
            <h4>LANGUAGES</h4>
            <p>JavaScript</p>
            <p>HTML</p>
            <p>CSS</p>
          </section>
        </CardContent>
      </Card>
      <Card className={styles.card} raised={true} square={true}>
        <CardContent className={styles.cardContent}>
          <section>
            <h4>FRONT-END</h4>
            <p>React</p>
            <p>Redux</p>
          </section>
        </CardContent>
      </Card>
      <Card className={styles.card} raised={true} square={true}>
        <CardContent className={styles.cardContent}>
          <section>
            <h4>BACK-END</h4>
            <p>Node.js</p>
            <p>Express</p>
          </section>
        </CardContent>
      </Card>
      <Card className={styles.card} raised={true} square={true}>
        <CardContent className={styles.cardContent}>
          <section className={styles.section}>
            <h4>DATABASES</h4>
            <p>Firebase</p>
            <p>MongoDB</p>
            <p>Mongoose</p>
          </section>
        </CardContent>
      </Card>
      <Card className={styles.card} raised={true} square={true}>
        <CardContent className={styles.cardContent}>
          <section className={styles.section}>
            <h4>TOOLS</h4>
            <p>Github</p>
            <p>Slack</p>
            <p>VScode</p>
            <p>Heroku</p>
            <p>Netlify</p>
          </section>
        </CardContent>
      </Card>
      <Card className={styles.card} raised={true} square={true}>
        <CardContent className={styles.cardContent}>
          <section className={styles.section}>
            <h4>TESTING</h4>
            <p>Jest</p>
            <p>QUnit</p>
          </section>
        </CardContent>
      </Card>
    </div>
  );
}

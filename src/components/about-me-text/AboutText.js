import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import styles from './AboutText.css';

export default function AboutText() {
  return (
    <>
      <div className={styles.titleContainer}>
        <ReactTypingEffect 
          className={styles.title}
          typingDelay={1000}
          eraseDelay={1200}
          text={['CURIOUS', 'CREATIVE', 'COLLABORATIVE']} 
        />
      </div>
      <p className={styles.textBody}>I am a Software Engineer with experience in JavaScript, <em>(Ember, React)</em> and a front-end obsession. I love data, component structure and clean testing.
        I lead with curiosity, passion, drive and a healthy amount of play. My background in the arts has primed my tech career with empathy and a love for dynamic collaboration. As a queer woman of
        color, I value diversity of thought, technology and humans; and I love the daily challenge of navigating how that diversity coexists. I am brave in my contributions, have a thirst for 
        learning new tech and embrace failure. I value spending my time away from the computer making time and space to mentor and meet with those pursuing tech.
      </p>
    </>
  );
}

import React from 'react';
import styles from './AboutText.css';

export default function AboutText() {
  return (
    <>
      <h2 className={styles.title}>HELLO THERE!</h2>
      <p className={styles.textBody}>I am Full-Stack Software Developer and Professional Creative 
        with a background as an artist and arts administrator. My time 
        in the arts has primed my tech career with empathy, drive and a 
        love for dynamic collaboration.
        As a queer woman of color I am extremely passionate about diversity
        within the tech community and creating applications that are accessible
        and can speak across divides.
      </p>
    </>
  );
}

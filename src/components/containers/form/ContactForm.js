import React from 'react';
import Form from '../../contact-form/Form';
import styles from './ContactForm.css';

export default function ContactForm() {
  return (
    <div className={styles.space}>
      <h2 className={styles.title}>WANT TO COLLABORATE? SEND ME A MESSAGE!</h2>
      <Form />
    </div>
  );
}

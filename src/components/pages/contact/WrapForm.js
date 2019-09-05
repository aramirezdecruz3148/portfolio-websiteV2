import React from 'react';
import ContactForm from '../../containers/form/ContactForm';
import styles from './WrapForm.css';

export default function WrapForm() {
  return (
    <div className={styles.wrapForm}>
      <ContactForm />
    </div>
  );
}

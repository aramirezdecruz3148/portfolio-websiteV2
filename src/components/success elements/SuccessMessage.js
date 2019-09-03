import React from 'react';
import Paper from '@material-ui/core/Paper';
import styles from './SuccessMessage.css';

export default function SuccessMessage() {
  return (
    <Paper square={true} className={styles.successMessage}>
      <h3>THANK YOU!</h3>
      <p>Alex has received your message and will respond soon...</p>
    </Paper>
  );
}

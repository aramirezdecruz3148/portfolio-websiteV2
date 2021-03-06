import React, { Component } from 'react';
import styles from './Form.css';

export default class Form extends Component {
  render() {
    return (
      <div className={styles.center}>
        <form
          className={styles.form}
          name="websiteForm"
          method="POST"
        >
          <input type="hidden" name="form-name" value="websiteForm" action="/success" />
          <p>
            <label>
              <input
                className={styles.inputs}
                type="text"
                name="name"
                placeholder="NAME"
                required
              />
            </label>
          </p>
          <p>
            <label>
              <input
                className={styles.inputs}
                type="email"
                name="email"
                placeholder="EMAIL"
                required
              />
            </label>
          </p>
          <p>
            <label>
              <textarea
                className={styles.inputs}
                name="message"
                placeholder="MESSAGE"
                required
              ></textarea>
            </label>
          </p>
          <p>
            <button type="submit">SEND</button>
          </p>
          <div style={{ height:'4vw' }}></div>
        </form>
      </div>
    );
  }
}

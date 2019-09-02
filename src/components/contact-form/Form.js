import React, { Component } from 'react';
import styles from './Form.css';
import { Link } from 'react-router-dom';

export default class Form extends Component {
  render() {
    return (
      <div className={styles.center}>
        <form
          action="/submitted"
          className={styles.form}
          name="websiteForm"
          method="POST"
        >
          <input type="hidden" name="form-name" value="websiteForm" />
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
            <Link to='/submitted'><button type="submit">SEND</button></Link>
          </p>
        </form>
      </div>
    );
  }
}

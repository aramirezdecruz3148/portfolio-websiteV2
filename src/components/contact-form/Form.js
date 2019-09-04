import React, { Component } from 'react';
import styles from './Form.css';

export default class Form extends Component {
  state = {
    activated: true
  }

  handleModal = () => {
    this.setState({
      activated: false
    });
  }

  render() {
    const { activated } = this.state;
    return (
      <>
        <div style={{ display: activated ? 'none' : 'block' }}><h2>YOOOOOOOOOOO</h2></div>
        <div className={styles.center}>
          <form
            action="/success"
            className={styles.form}
            name="websiteForm"
            method="POST"
          >
            <input type="hidden" name="form-name" value="/sucess" />
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
              <button onClick={this.handleModal} type="submit">SEND</button>
            </p>
          </form>
        </div>
      </>
    );
  }
}

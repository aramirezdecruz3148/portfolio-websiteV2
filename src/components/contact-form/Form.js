import React, { Component } from 'react';
import { encode } from 'punycode';

export default class Form extends Component {
  state = {
    name: '',
    email: '',
    message: ''
  };

  handleSubmit = event => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'websiteForm', ...this.state })
    })
      .then(() => alert('Success!'))
      .catch(error => alert(error));

    event.preventDefault();
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };
  render() {
    const { name, email, message } = this.state;
    return (
      <>
        <form
          onSubmit={this.handleSubmit}
          id="form"
          name="websiteForm"
          method="POST"
          data-netlify="true"
        >
          <input type="hidden" name="form-name" value="websiteForm" />
          <p>
            <label>
              <input
                onChange={this.handleChange}
                className="feedback-input"
                type="text"
                name="name"
                value={name}
                placeholder="name"
                required
              />
            </label>
          </p>
          <p>
            <label>
              <input
                onChange={this.handleChange}
                className="feedback-input"
                type="email"
                name="email"
                value={email}
                placeholder="email"
                required
              />
            </label>
          </p>
          <p>
            <label>
              <textarea
                onChange={this.handleChange}
                className="feedback-input"
                name="message"
                value={message}
                placeholder="message"
                required
              ></textarea>
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </>
    );
  }
}

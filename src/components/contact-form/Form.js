import React, { Component } from 'react';

export default class Form extends Component {
  render() {
    return (
      <>
        <form
          id="form"
          method="POST"
        >
          <input type="hidden" name="form-name" value="websiteForm" />
          <p>
            <label>
              <input
                className="feedback-input"
                type="text"
                name="name"
                placeholder="name"
                required
              />
            </label>
          </p>
          <p>
            <label>
              <input
                className="feedback-input"
                type="email"
                name="email"
                placeholder="email"
                required
              />
            </label>
          </p>
          <p>
            <label>
              <textarea
                className="feedback-input"
                name="message"
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

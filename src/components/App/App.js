import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../pages/home/Home.js';

export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Route exact path='/' component={Home} />
        </Router>
      </>
    );
  }
}

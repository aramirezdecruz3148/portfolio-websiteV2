import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../pages/home/Home.js';
import About from '../pages/about/About.js';
import Portfolio from '../pages/tech-&-portfolio/Portfolio.js';

export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/portfolio' component={Portfolio} />
        </Router>
      </>
    );
  }
}

import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../pages/home/Home.js';
import Contact from '../pages/contact/Contact.js';
import About from '../pages/about/About.js';

export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Route exact path='/' component={Home} />
          <Route path='/contact' component={Contact} />
          <Route path='/about' component={About} />
        </Router>
      </>
    );
  }
}

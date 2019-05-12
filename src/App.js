import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import { directive } from '@babel/types';
import axios from 'axios';
import Navbar from './components/Navbar';
import Clients from './components/clients/Clients';
import Actions from './components/actions/Actions';
import Analytics from './components/analytics/Analytics';





class App extends Component {
  constructor() {
    super()
    this.state = {
      clients: []
      
    }
  }


  render() {
    return (
      <Router>
        <div id="main">
          <Navbar />

          <Route exact path="/" render={() => <Clients />} />
          <Route exact path="/actions" render={() => <Actions />} />
          <Route exact path="/analytics" render={() => <Analytics />} />


        </div>
      </Router>
    )
  }
}

export default App;

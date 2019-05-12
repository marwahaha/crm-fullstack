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


  getDataFromDB = async () => {
    let clientsFromDB = await axios.get('http://localhost:4500/clients')
    console.log(clientsFromDB)
    this.setState({ clients: clientsFromDB.data })

  }

  postToDB = async () => {
    let data = await require("../src/data.json")
    // console.log(data.map(d => d.name))

    data.map(async c => await axios.post('http://localhost:4500/newClient', c))
    this.getDataFromDB()

  }



  componentDidMount = async () => {
    // let clientList = await this.getDataFromDB()
    // this.setState({ clients: clientList }, () => {
    //     console.log(this.state.clients)
    // })
    this.postToDB()
  }



  render() {
    return (
      <Router>
        <div id="main">
          <Navbar />

          <Route exact path="/" render={() => <Clients data={this.state.clients} />} />
          <Route exact path="/actions" render={() => <Actions />} />
          <Route exact path="/analytics" render={() => <Analytics />} />


        </div>
      </Router>
    )
  }
}

export default App;

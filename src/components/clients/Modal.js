import React, { Component } from 'react';
import { directive } from '@babel/types';
import { spawn } from 'child_process';
import "../../css/modal.css"
import Update from './../actions/Update';

class Modal extends Component {

  constructor() {
    super()
    this.state = {
      name: "",
      sureName: "",
      country: ""
    }
  }

  changeValue = e => this.setState({ [e.target.id]: e.target.value })


  render() {



    return (


      <span id="modal">
        <i class="far fa-window-close"></i>
        <span className="inputField">Name : <input type="text" id="name" value={this.props.name} onChange={this.changeValue} /></span>
        <span className="inputField">Sure Name : <input type="text" id="sureName" value={this.props.sureName} onChange={this.changeValue} /></span>
        <span className="inputField">Sure Name : <input type="text" id="country" value={this.props.country} onChange={this.changeValue} /></span>
        <div>Update</div>


      </span>

    )
  }
}


export default Modal;
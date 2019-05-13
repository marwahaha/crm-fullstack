
import React, { Component } from "react";
import "../../css/popUp.css"


class PopUp extends Component {

  constructor() {
    super()
    this.state = {
      name: "",
      sureName: "",
      country: ""
    }
  }

  changeValue = e => this.setState({ [e.target.id]: e.target.value })

  updatePoppedUpClient = () => {
    console.log(this.props.id)
  }

  componentDidMount = () => {
    this.setState({
      name: this.props.name,
      surName: this.props.surName,
      country: this.props.country
    })
  }

  render() {


    return (


      <span id="popUp">
        <i class="far fa-window-close"></i>
        <span className="inputField">Name : <input type="text" id="name" value={this.state.name} onChange={this.changeValue} /></span>
        <span className="inputField">Sure Name : <input type="text" id="sureName" value={this.state.surName} onChange={this.changeValue} /></span>
        <span className="inputField">Sure Name : <input type="text" id="country" value={this.state.country} onChange={this.changeValue} /></span>
        <div onClick={this.updatePoppedUpClient} className="updateBtn">Update</div>


      </span>

    )
  }
}
export default PopUp;
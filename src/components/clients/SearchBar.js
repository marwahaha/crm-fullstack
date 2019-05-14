import React, { Component } from 'react';
import "../../css/searchBar.css"

class SearchBar extends Component {
    constructor() {
        super()
        this.state = {
            inputValue: "",
            selectedOption: "name"
        }
    }

    handleSearch = () => {this.props.handleSearch(this.state.inputValue.toLowerCase(), this.state.selectedOption)
    }

    changeValue = async (e) =>{
        await this.setState({ [e.target.name]: e.target.value })
        this.handleSearch() 
    }

    render() {
        return (
            <div id="searchClients">
                <input  name="inputValue" type="text" placeholder="Search" onChange={this.changeValue} value={this.state.inputValue} />
                <select name="selectedOption" onChange={this.changeValue} value={this.state.selectedOption}>
                    <option value="name">Name</option>
                    <option value="country">Country</option>
                    <option value="owner">Owner</option>
                </select>
            </div>
        );
    }
}

export default SearchBar;
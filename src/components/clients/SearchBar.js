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
            <div id="searchBar">
                <input  name="inputValue" type="text" placeholder="Search by category.." onChange={this.changeValue} value={this.state.inputValue} />
                <span/>
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
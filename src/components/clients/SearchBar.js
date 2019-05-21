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

    pageForward = () => this.props.HandlePagination("forward")
    pageBack = () => this.props.HandlePagination("back")

    render() {
        return (
            <div id="searchBar">
                
                <input  name="inputValue" type="text" placeholder="Search by category.." onChange={this.changeValue} value={this.state.inputValue} />
                
                <select name="selectedOption" onChange={this.changeValue} value={this.state.selectedOption}>
                    <option value="name">Name</option>
                    <option value="country">Country</option>
                    <option value="owner">Owner</option>
                </select>
            
            <div id="pagination"> 
            <span className="fas fa-chevron-left" onClick={this.pageBack}></span>
            <span>{this.props.paginationIndex} - {this.props.paginationIndex + 19}</span>
            <span className="fas fa-chevron-right" onClick={this.pageForward}></span>
        </div></div>
        );
    }
}

export default SearchBar;
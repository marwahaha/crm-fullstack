import React, { Component } from 'react';

class Pagination extends Component {

    pageForward = () => this.props.HandlePagination("forward")
    pageBack = () => this.props.HandlePagination("back")

    render() {
        
        return (
            <div id="pagination"> 
                <i className="fas fa-chevron-left" onClick={this.pageBack}></i>
                <span>{this.props.paginationIndex} - {this.props.paginationIndex + 20}</span>
                <i className="fas fa-chevron-right" onClick={this.pageForward}></i>
            </div>
        );
    }
}

export default Pagination;
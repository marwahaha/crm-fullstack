import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import "../css/navbar.css"


class Navbar extends Component {
    render() {
        return (
            <div id="navBar">
                <Link to="/clients">Clients</Link>
                <Link to="/actions">Actions</Link>
                <Link to="/analytics">Analytics</Link>

                
            </div>
        );
    }
}



export default Navbar;
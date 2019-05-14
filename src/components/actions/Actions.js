import React, { Component } from 'react';
import Update from './Update';
import Add from './Add';
import "../../css/actions.css"


class Actions extends Component {



    render() {
        return (
            <div id="actions">
                <Update />
                <Add />
            </div>
        );
    }
}

export default Actions;
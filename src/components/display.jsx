import React from 'react';
import ReactDom from 'react-dom';

class Display extends React.Component {

    constructor() {
        super()
        this.display_info = {
            color: "white",
            height: "400px"
        }
    }

    render() {
        return (
            <div className="float-right border border-white" style={this.display_info}>
                Hallo
            </div>
        )
    }   
}

export default Display
import React from 'react';
// eslint-disable-next-line 
import ReactDom from 'react-dom';
import Search from './search.jsx';


class Display extends React.Component {
    constructor() {
        super()
        this.display_info = {
            color: "white",
            height: "500px"
        }
    }

    render() {
        return (
            <div className="float-right border border-white" style={this.display_info}>
                <div className="border border-white">
                        planeet naam:
                </div>
            </div>
        )
    }   
}

export default Display
import React from 'react';
// eslint-disable-next-line 
import ReactDom from 'react-dom';
import Search from './search.jsx';


class Display extends React.Component {
    constructor() {
        super()
        this.display_info = {
            color: "white",
            height: "500px",
            width: "300px"
        }
    }

    render() {
        return (
            <div className="float-right border border-white" style={this.display_info}>
                <div className="border border-white text-center">
                        <span id="planeet_naam"/>
                    </div>
                <div className="border border-white">
                            <div>
                                <div className="border border-white w-25 float-left">Hallo</div>
                                <div className="border border-white w-25 float-left">Hallo</div>
                                <div className="border border-white w-25 float-left">Hallo</div>
                                <div className="border border-white w-25 float-left">Hallo</div>
                            </div>
                    </div>
            </div>
        )
    }   
}

export default Display
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
                <div>
                            <div className="border border-white">
                                <div className="border border-white w-25 float-left"><img className="img-fluid" id="foto0" alt="FOTO" src="https://www.columbusearththeater.nl/sites/c-city/files/uploads/Earth.jpg"/></div>
                                <div className="border border-white w-25 float-left"><img className="img-fluid" id="foto1" alt="FOTO" src="https://www.columbusearththeater.nl/sites/c-city/files/uploads/Earth.jpg"/></div>
                                <div className="border border-white w-25 float-left"><img className="img-fluid" id="foto2" alt="FOTO" src="https://www.columbusearththeater.nl/sites/c-city/files/uploads/Earth.jpg"/></div>
                                <div className="border border-white w-25 float-left"><img className="img-fluid" id="foto3" alt="FOTO" src="https://www.columbusearththeater.nl/sites/c-city/files/uploads/Earth.jpg"/></div>
                            </div>
                    </div>
                    <div className="float-right">
                        <br/>
                        <br/>
                        <p>informatie</p>
                        <p>informatie</p>
                        <p>informatie</p>
                        <p>informatie</p>

                    </div>
            </div>
        )
    }   
}

export default Display
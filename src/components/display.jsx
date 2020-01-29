import React from 'react';
// eslint-disable-next-line 



class Display extends React.Component {
    constructor() {
        super()
        this.display_info = {
            color: "white",
            height: "500px",
            width: "350px"
        }
    }
    render() {
        return (
            <div className="float-right border border-white" style={this.display_info}>
                <div className="border border-white text-center">
                        <span id="planeet_naam"/> <br/>
                        <span>Pictures are from the NASA API</span>
                    </div>
                <div>
                            <div className="border border-white">
                                <div className="border border-white w-25 float-left"><img className="img-fluid" id="foto0" alt="FOTO" src="./assest/x.png"/></div>
                                <div className="border border-white w-25 float-left"><img className="img-fluid" id="foto1" alt="FOTO" src="./assest/x.png"/></div>
                                <div className="border border-white w-25 float-left"><img className="img-fluid" id="foto2" alt="FOTO" src="./assest/x.png"/></div>
                                <div className="border border-white w-25 float-left"><img className="img-fluid" id="foto3" alt="FOTO" src="./assest/x.png"/></div>
                            </div>
                    </div>
                    <div className="float-right">
                        <br/>
                        <br/>
                        <p id="gravity">informatie</p>
                        <p id="density">informatie</p>
                        <p id="mass">informatie</p>
                        <p id="volume">informatie</p>
                        <p id="sun_d">informatie</p>
                        <p id="diameter">informatie</p>

                    </div>
            </div>
        )
    }   
}

export default Display
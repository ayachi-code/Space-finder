import React from 'react';
// eslint-disable-next-line
import Bootstrap from 'bootstrap/dist/css/bootstrap.css'

class Apod extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            apod_image: ""
        }

        this.img = {
            width: "250px"
        }
        this.apod = this.apod.bind(this);
    }

    apod() {
        fetch("https://api.nasa.gov/planetary/apod?api_key=6UwMTfVZC88kYd5c1Zr4ixXoeaK0aVeKl92hbYJq")
        .then((res) => {
            res.json().then((data) => {
               console.log(data.hdurl)
               localStorage.setItem("apod",data.hdurl);
            })
        })
    }

    render() {
        return(
            <div>
                <table onLoad={this.apod()}>
                    <thead className="border border-white">
                    <tr className="text-primary">
                        <th>Astronomy Picture of the Day</th>
                    </tr>
                    </thead>
                    <tbody className="border border-white">
                    <tr className="text-primary">
                        <th><img className="img-fluid" style={this.img} src={localStorage.getItem("apod")}/></th>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
export default Apod;
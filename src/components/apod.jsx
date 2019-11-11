import React from 'react';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css'

class Apod extends React.Component {

    constructor(props) {
        super(props)

        this.apod = this.apod.bind(this);
    }

    apod() {
        fetch("https://api.nasa.gov/planetary/apod?api_key=nbw6CmJP3hcYinsbrg60vfpTU1us0UR3mB67ayP6")
        .then((res) => {
            res.json().then((data) => {
                console.log("Hey")
            })
        })
    }

    render() {
        return(
            <div>
                <table>
                    <thead className="border border-white">
                    <tr className="text-primary">
                        <th>Astronomy Picture of the Day</th>
                    </tr>
                    </thead>
                    <tbody className="border border-white">
                    <tr className="text-primary">
                        <th>{this.apod()}</th>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
export default Apod;
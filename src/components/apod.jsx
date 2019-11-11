import React from 'react';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css'

class Apod extends React.Component {
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
                        <th>Hallo</th>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
export default Apod;
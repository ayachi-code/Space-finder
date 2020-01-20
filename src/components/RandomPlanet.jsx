import React from 'react';
import ReactDom from 'react-dom';


class RandomPlanet extends React.Component {
    render() {
        return(
            <div>
                <div className="text-muted float-left border">
                        <table>
                            <thead>
                            <tr>
                                <th className="border">give me a Random Planet</th>
                            </tr>
                            </thead>
                            <tbody>
                                <tr className="text-center">
                                    <th>
                                        <button>Search</button>
                                    </th>
                                </tr>
                            </tbody>

                        </table>
                </div>
            </div>
        )
    }

}

export default RandomPlanet;
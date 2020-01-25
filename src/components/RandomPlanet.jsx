import React from 'react';
import ReactDom from 'react-dom';


class RandomPlanet extends React.Component {

    SearchRandomPlanet() {
        console.log("Give me a random planet")
        fetch("https://raw.githubusercontent.com/paulfitz/exoplanets/master/data/exoplanet.json")
        .then((res) => res.json())
        .then((data) => {
            console.log(data[Math.floor(Math.random(10) * data.length)]["# name"])
            //console.log(Math.floor(Math.random(10) * data.length))               
        })
    }
    
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
                                        <button onClick={this.SearchRandomPlanet}>Search</button>
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
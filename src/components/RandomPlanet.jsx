import React from 'react';
import Search from './search';

const zoek = new Search();


class RandomPlanet extends React.Component {

    SearchRandomPlanet() {
        console.log("Give me a random planet")
        fetch("https://raw.githubusercontent.com/paulfitz/exoplanets/master/data/exoplanet.json")
        .then((res) => res.json())
        .then((data) => {
            //Na elke klik word er een random planeet gezocht
            let random_planet = data[Math.floor(Math.random(10) * data.length)].star_name
            zoek.search_information(random_planet,false);
            console.log(random_planet)
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
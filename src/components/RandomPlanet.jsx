import React from 'react';
import Search from './search';

const zoek = new Search();


class RandomPlanet extends React.Component {

    SearchRandomPlanet() {
        //ALS iemand op random planeet klikt word er een request verzonden na het json object
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
                                <th className="border text-warning">give me a Random Planet</th>
                            </tr>
                            </thead>
                            <tbody className="border border-secondary">
                                <tr className="text-center">
                                    <th>
                                        <button className="rounded-pill text-white bg-dark" onClick={this.SearchRandomPlanet}>Search</button>
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
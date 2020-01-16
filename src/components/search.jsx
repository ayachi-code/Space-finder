import  React from 'react';


class Search extends React.Component {
    constructor(props) {
        super(props)
        this.input = {
            margin: "0",
            position: "absolute",
            top: "50%"
        }
        this.enteredinput = this.enteredinput.bind(this);
        this.search_information = this.search_information.bind(this);
        this.get_planet_picture = this.get_planet_picture.bind(this);
        this.get_planet_info = this.get_planet_info.bind(this);
        this.expPlanet = this.expPlanet.bind(this);
        this.get_exoPlanet_data = this.get_exoPlanet_data.bind(this);
    }

    get_exoPlanet_data(EXO) {
        fetch("https://raw.githubusercontent.com/paulfitz/exoplanets/master/data/exoplanet.json")
            .then((res) => res.json())
            .then((data) => {
                console.log(data[0].star_name)
                let exooplanet = {Planetnaam: [],id: []};
                for (let i = 0; i < data.length; i++) {
                    exooplanet.Planetnaam.push(data[i].star_name);
                    exooplanet.id.push(i);
                }
                if (exooplanet.Planetnaam.includes(EXO)) {
                    console.log("EXO bestaat")
                    let index_of_planet = exooplanet.Planetnaam.indexOf(EXO);
                    data[index_of_planet] = document.getElementById("gravity").innerText = "Planet status: " + data[index_of_planet].planet_status
                    data[index_of_planet] = document.getElementById("density").innerText = "Discoverd in: " + data[index_of_planet].discovered
                }
            } );
    }

    get_planet_picture(PlanetName) {
        //Fetched na NASA API voor de fotos
        fetch("https://images-api.nasa.gov/search?q=" + PlanetName)
            .then(res => res.json())
            .then((data) => {
                    for (let i = 0; i < 4; i++) {
                        //Pakt 4 fotos van NASA API en plakt bij de placeholder
                        document.getElementById("foto" + i).src = data["collection"]["items"][i]["links"][0]["href"];
                    }
            }).catch((error) => console.error("Error er is iets fout gegaan" + error));
    }

    get_planet_info(PlanetName) {
        document.getElementById("planeet_naam").innerText = PlanetName;
        console.log("Gathering planet")
        fetch("https://api.le-systeme-solaire.net/rest/bodies/" + PlanetName)
            .then((res) => res.json())
            .then((data) => {
               //Laat data verschijnen op pagina van de desbetreffende planeet
               document.getElementById("gravity").innerText = "acceleration: " + data.gravity + " m/s2";
               document.getElementById("density").innerText = "Density: " + data.density + "g/cm3";
               document.getElementById("mass").innerText = "Mass: " + data.mass.massValue + "*10^ " + data.mass.massExponent +" kg"
               document.getElementById("volume").innerText = "Volume: " + data.vol.volValue + "*10^ " + data.vol.volExponent + " km3";
               document.getElementById("sun_d").innerText = "distance between the sun: " + data.semimajorAxis + " km";
               document.getElementById("diameter").innerText = "Diameter: " + Math.floor(data.meanRadius) + " km";
               console.log(data)
            })
    }


    expPlanet(EXO) {
        document.getElementById("planeet_naam").innerText = EXO + " (EXO)";
        fetch("https://images-api.nasa.gov/search?q=" + EXO)
            .then((res) => res.json())
            .then((data) => {
                for (let a = 0; a < 3; a++) {
                    document.getElementById("foto" + a).src = data["collection"]["items"][a]["links"][0]["href"];
                }
                this.get_exoPlanet_data(EXO);
            }).catch((error) => {
                console.log("EXO PLANEET BESTAAT NIET")
            })
    }

    search_information() {
        //Zoekt informatie over de defbetreffende planeet
        fetch("https://api.le-systeme-solaire.net/rest/bodies/" + document.getElementById("planeet_input").value)
            .then((res) => res.json())
            .then((data) => {
                if (data.isPlanet) {
                    console.log("Het is een planeet"); 
                    this.get_planet_picture(data.englishName)
                    this.get_planet_info(data.englishName)
                    }
                }
            ).catch(error => { 
                console.log("Het is geen planeet, zoeken voor andere opties... ")
                this.expPlanet(document.getElementById("planeet_input").value);
            })
        }

    enteredinput(e) {
        if(e.key === 'Enter') {
            //Als enter word geklikt dan zoekt informatie over planeet
            this.search_information()
        }
    }

    render() {
        return(
            <div className="w-100 text-center"  style={this.input}>
                <input className="rounded-pill text-center " type="input" id="planeet_input" placeholder="Explore space" onKeyDown={this.enteredinput}/>
                         <p onLoad={this.exoplanet_info} id="log" className="text-primary"></p>
                    </div>
        )
    }
}


export default Search

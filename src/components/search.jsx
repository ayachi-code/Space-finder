import  React from 'react';


class Search extends React.Component {
    constructor(props) {
        super(props)
        
        this.input = {
            margin: "0",
            position: "absolute",
            top: "50%"
        }
        this.state = {
            EXO: ""
        }

        //Functies binde
        this.enteredinput = this.enteredinput.bind(this);
        this.search_information = this.search_information.bind(this);
        this.get_planet_picture = this.get_planet_picture.bind(this);
        this.get_planet_info = this.get_planet_info.bind(this);
        this.expPlanet = this.expPlanet.bind(this);
        this.get_exoPlanet_data = this.get_exoPlanet_data.bind(this);
        this.pageload = this.pageload.bind(this);
    }

    pageload() {
        this.search_information("Earth")
    }

    componentDidMount() {
        window.addEventListener('load',this.pageload)
    }

    get_exoPlanet_data(EXO) {
        fetch("https://raw.githubusercontent.com/paulfitz/exoplanets/master/data/exoplanet.json")
            .then((res) => res.json())
            .then((data) => {
                let exooplanet = {Planetnaam: ["Bilal"],id: []};
                for (let i = 0; i < data.length; i++) {
                    exooplanet.Planetnaam.push(data[i].star_name);
                    exooplanet.id.push(i);
                }
                if (exooplanet.Planetnaam.includes(EXO)) {
                    console.log("Bestaat")
                    document.getElementById("bestaat").innerText = "";
                    let index_of_planet = exooplanet.Planetnaam.indexOf(EXO);
                    console.log(data[index_of_planet].mass);
                    document.getElementById("gravity").innerText = "Name: " + data[index_of_planet]["# name"];
                    document.getElementById("sun_d").innerText = "Semi mayor axis: " + data[index_of_planet].semi_major_axis + " A.U";
                    document.getElementById("diameter").innerText = "Oribital period: " + Math.floor(data[index_of_planet].orbital_period)  + " days";
                    document.getElementById("volume").innerText = "Angular distance: " + data[index_of_planet].angular_distance + "°";
                    // eslint-disable-next-line no-useless-concat
                    document.getElementById("mass").innerText =  "Mass: " + data[index_of_planet].mass * 100 + "*" +  " Earth mass ";
                    document.getElementById("density").innerText = "Discoverd in: " + data[index_of_planet].discovered;
                 } else {
                     console.log("TEST:: Ey bilal de planeet bestaat niet en er is geen info ervan")
                     document.getElementById("bestaat").innerText = "Planet doesn't exist"
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
                localStorage.setItem("exo",EXO)
                this.setState({
                    EXO: EXO
                  });
                this.get_exoPlanet_data(EXO);
                console.log("EXO, BESTAAT")
            }).catch((error) => {
                console.log("EXO Planeet no foto found")
                this.get_exoPlanet_data(this.state.EXO);
                //document.getElementById("bestaat").innerText = "Planet doesn't exist"
                document.getElementById("planeet_naam").innerText = this.state.EXO;
            })
    }

    search_information(PlanetName) {
        //Zoekt informatie over de defbetreffende planeet
        fetch("https://api.le-systeme-solaire.net/rest/bodies/" +  PlanetName)//document.getElementById("planeet_input").value)
            .then((res) => res.json())
            .then((data) => {
                if (data.isPlanet) {
                    console.log("Het is een planeet");
                    document.getElementById("bestaat").innerText = "";
                    this.setState({
                        EXO: data.englishName
                      });
                    this.get_planet_picture(data.englishName)
                    this.get_planet_info(data.englishName)
                    }
                }
            ).catch(error => { 
                document.getElementById("planeet_naam").innerText = this.state.EXO
                this.expPlanet(document.getElementById("planeet_input").value);
            })
        }

    enteredinput(e) {
        if(e.key === 'Enter') {
            //Als enter word geklikt dan zoekt informatie over planeet
            this.search_information(document.getElementById("planeet_input").value)
        }
    }

    render() {
        return(
            <div className="w-100 text-center"  style={this.input}>
                <input className="rounded-pill text-center " type="input" id="planeet_input" placeholder="Explore space" onKeyDown={this.enteredinput}/>
                         <p onLoad={this.exoplanet_info} id="log" className="text-primary"></p>
                         <p className="text-primary" id="bestaat"></p>
                    </div>
        )
    }
}


export default Search

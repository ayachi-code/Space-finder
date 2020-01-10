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
            bestaat_planeet: true,
        }
        this.enteredinput = this.enteredinput.bind(this);
        this.search_information = this.search_information.bind(this);
        this.get_planet_picture = this.get_planet_picture.bind(this);
    }

    get_planet_picture(PlanetName) {
        //Fetched na NASA API voor de fotos
        fetch("https://images-api.nasa.gov/search?q=" + PlanetName)
            .then(res => res.json())
            .then((data) => {
                for (let i = 0; i < 4; i++) {
                    document.getElementById("foto" + i).src = data["collection"]["items"][i]["links"][0]["href"];
                }  
            })
    }


    search_information() {
        //Zoekt informatie over de defbetreffende planeet
        fetch("https://api.le-systeme-solaire.net/rest/bodies/" + document.getElementById("planeet_input").value)
            .then((res) => res.json())
            .then((data) => {
                if (data.isPlanet) {
                    console.log("Het is een planeet"); 
                    let PlanetExist = this.get_planet_picture(data.englishName)
                    console.clear();
                    //if (PlanetExist) {
                        //Laat de informatie zien van de planeet als de fotos succesvol zijn geplaatst
                        //let PlanetInfoExist = get_planet_info(data.englishName)
                    //}
                }
            }).catch(error => console.log("Het is geen planeet, zoeken voor andere opties... "))
        
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
                         <p id="log" className="text-primary"></p>
                    </div>
        )
    }
}


export default Search

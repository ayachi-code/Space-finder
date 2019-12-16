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
    }

    search_information() {
        //Zoekt informatie over de defbetreffende planeet
        fetch("https://images-api.nasa.gov/search?q=" + document.getElementById("planeet_input").value)
        .then((res) => {
            res.json().then((data) => {
                //Loopt door de collection object voor de eerste 5 random images                console.clear()
                for (let i = 0; i < 4; i++) {
                    console.log(data["collection"]["items"][i]["links"][0]["href"])
                    //document.getElementById("foto" + i).src = data["collection"]["items"][i]["links"][0]["href"];        
                }
                document.getElementById('log').innerText = "Planeet bestaat"
                document.getElementById('planeet_naam').innerText = document.getElementById("planeet_input").value;
                //Voegt foto bij Afbeelding bij display
            }).catch((error) => {
                //Als planeet niet bestaat
                console.log("Planeet bestaat niet ")
                //alert("Hey, planeet bestaat niet !!!!")
                document.getElementById('log').innerText = "Planeet bestaat niet :("
            })
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
                <input className="rounded-pill text-center " type="input" id="planeet_input" placeholder="Type een planeet" onKeyDown={this.enteredinput}/>
                         <p id="log" className="text-primary"></p>
                    </div>
        )
    }
}


export default Search

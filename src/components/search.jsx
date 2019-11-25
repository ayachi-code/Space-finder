import  React from 'react';
import ReactDom from 'react-dom'


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
    }

    search_information() {
        //Zoekt informatie over de defbetreffende planeet
        fetch("https://images-api.nasa.gov/search?q=earth")
        .then((res) => {
            res.json().then((data) => {
                //Loopt door de collection object voor de eerste 5 images
                //for (let i = 0; i++;i <= 5) {
                    //console.log(data["collection"]["items"][i])
                  //  console.log("Hey")
                //}
            })
        })
    }

    enteredinput(e) {
        if(e.key === 'Enter') {
            this.search_information()
        }
    }

    render() {
        return(
            <div className="w-100 text-center"  style={this.input}>
                <input className="rounded-pill text-center " type="input" placeholder="Type een planeet" onKeyDown={this.enteredinput}/>
            </div>
        )
    }
}

export default Search
import React from 'react'
import ReactDom from 'react-dom'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.bc = this.bc.bind(this);
        document.body.style.backgroundColor = this.bc();
    }

    //Waneer de website word geladen word er een space foto van de dag geladen.
    bc() {
            fetch("https://api.nasa.gov/planetary/apod?api_key=Z4UltBczb8Csrx2vG6P8L2SsdEdCDt8L2Nyfi6VJ")
                .then((resultaat) => resultaat.json())
                .then((data) => {
                    document.body.style.backgroundImage = "url(" + data.url + ")";
                })
    }

    render() {
        return(
            <div>Hallo</div>
        )
    }
}

ReactDom.render(<App/>,document.getElementById("root"))
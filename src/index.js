import React from 'react'
import ReactDom from 'react-dom'
import Apod from './components/apod.jsx'
import Search from './components/search.jsx'
import Display from './components/display.jsx'
import RandomPlanet from './components/RandomPlanet.jsx';
// eslint-disable-next-line no-unused-vars
import Logo from './components/logo.jsx'


class App extends React.Component {
    render() {
        return(
            <div>
            <Apod/>
            <Search/>
            <Display/>
            <RandomPlanet/>
            </div>
        )
    }
}

ReactDom.render(<App/>,document.getElementById("root"))
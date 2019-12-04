import React from 'react'
import ReactDom from 'react-dom'
import Apod from './components/apod.jsx'
import Search from './components/search.jsx'
import Logo from './components/logo.jsx'

class App extends React.Component {
    render() {
        return(
            <div>
            <Apod/>
            <Search/>
            <Logo/>
            </div>
        )
    }
}

ReactDom.render(<App/>,document.getElementById("root"))
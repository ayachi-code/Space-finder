import React from 'react'
import ReactDom from 'react-dom'
import Apod from './components/apod.jsx'


class App extends React.Component {
    render() {
        return(
            <Apod/>
        )
    }
}

ReactDom.render(<App/>,document.getElementById("root"))
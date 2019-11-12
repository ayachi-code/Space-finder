import React from 'react'
import ReactDom from 'react-dom'
import Apod from './components/apod.jsx'
import Search from './components/search.jsx'


class App extends React.Component {
    render() {
        return(
            <div>
            <Apod/>
            <Search/>
            </div>
        )
    }
}

ReactDom.render(<App/>,document.getElementById("root"))
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
    }
    render() {
        return(
            <div className="w-100 text-center"  style={this.input}>
                <input className="rounded-pill text-center " type="input" placeholder="Type een planeet"/>
            </div>
        )
    }
}

export default Search
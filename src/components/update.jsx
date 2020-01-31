import React from 'react'
import Fireabase from 'firebase'

class Update extends React.Component {


    retrieve_update() {
        console.log("Versie info word opgehaald van de database")
    }
    componentDidMount() {
        window.addEventListener('load',this.retrieve_update)
    }

    render() {
        return(
            <div>
            <div className="text-muted float-left border">
                    <table>
                        <thead>
                        <tr>
                            <th className="border">Update 1.0.0</th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr className="text-center ">
                                <th>
                                  
                                </th>
                            </tr>
                        </tbody>

                    </table>
            </div>
        </div>
        )
    }
}

export default Update;
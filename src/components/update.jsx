import React from 'react'
import Firebase from 'firebase'

class Update extends React.Component {

    constructor() {
        super()
        this.appConfig = {
            apiKey: "AIzaSyDrKye_UsnwyGMiVsvz0YgjlyQI-5TFgu0",
            authDomain: "space-finder-d2034.firebaseapp.com",
            databaseURL: "https://space-finder-d2034.firebaseio.com",
            projectId: "space-finder-d2034",
            storageBucket: "space-finder-d2034.appspot.com",
            messagingSenderId: "905483037640",
            appId: "1:905483037640:web:df21520cf2925ea4eeeefd",
            measurementId: "G-E5DBN3R0KC"
        }
        Firebase.initializeApp(this.appConfig)
    }


    retrieve_update() {
        console.log("Versie info word opgehaald van de database")
        let databaseRoot = Firebase.database().ref()
        console.log(databaseRoot)
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
import React from 'react'
import Firebase from 'firebase'
import './css/update.css'


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

        this.update = {
            width: "200px",
            color: "orange",
        }

    }


    retrieve_update() {
        console.log("Versie info word opgehaald van de database")
        //Koppelen aan Main root van database
        let databaseRoot = Firebase.database().ref()
        let database_version = Firebase.database().ref('version/');
        //Set state doe ik niet omdat dit eerder laat dan state en dan krijg ik een undefiend
        database_version.on('value',(data) => {
            document.getElementById("header").innerText = data.node_.children_.root_.value.value_;
            document.getElementById("content").innerText = data.node_.children_.root_.left.value.value_;
        });
    }

    //Als pagina laad voor info update functue uit
    componentDidMount() {
        window.addEventListener('load',this.retrieve_update)
    }


    render() {
        return(
            <div>
                 <table id="news" className="float-left" style={this.update}>
                    <thead className="text-center">
                        <tr>
                             <th className="border" id="header">
                             </th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr className="text-center ">
                                <th className="border text-primary" id="content"></th>
                            </tr>
                        </tbody>

                    </table>
            </div>
        )
    }
}

export default Update;
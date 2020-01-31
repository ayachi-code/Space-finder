import React from 'react'
import Firebase from 'firebase'


class Feedback extends React.Component {
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
        this.feedbackStyle = {
            position: "fixed",
            bottom: "0",
            right: "0"
        }
    }

    report() {
        let feedback = prompt("Type your feedback here")
        console.log(feedback)
    }


    render() {
        return(
            <div style={this.feedbackStyle}>
                    <button onClick={this.report} className="rounded-pill text-white bg-dark">Feedback/report a bug</button>
            </div>
        )
    }
}

export default Feedback;
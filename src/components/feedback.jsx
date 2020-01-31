import React from 'react'
import Firebase from 'firebase'


class Feedback extends React.Component {
    constructor() {
        super()
        this.feedbackStyle = {
            position: "fixed",
            bottom: "0",
            right: "0"
        }
    }

    report() {
        let feedback = prompt("Type your feedback here")
        let data = {
            feed: feedback
        }
        let feedbackBase = Firebase.database().ref('Tips/');
        feedbackBase.push(data);
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
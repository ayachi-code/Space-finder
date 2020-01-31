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
        //Waneer iemand op report klikt dan krijgt hij ene prompt
        let feedback = prompt("Type your feedback here")
        //De data word opgeslagen in een object
        let data = {
            feed: feedback
        }
        //Word verstuurd na firebase bij child Tips
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
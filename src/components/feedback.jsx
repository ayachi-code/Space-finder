import React from 'react'


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
        console.log("click")
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
import React from 'react';
import './css/logo.css'


class Logo extends React.Component {
    render() {
        return(
            // eslint-disable-next-line jsx-a11y/alt-text
            <div className="text-center">
                <img id="logo" src="./assest/logo.png"/>
            </div>
        )
    }
}

export default Logo;
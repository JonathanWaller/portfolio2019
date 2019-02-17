import React, { Component } from 'react';
import zenscroll from "zenscroll";
import '../../styles/scss/Splash.scss';

class Splash extends Component {
    
    render(){
        return(
            <div className='container' id='splash'>
                <h1>Jonathan Waller</h1>
                <p>Full Stack Web Developer</p>
            </div>
        )
    }
}


export default Splash;
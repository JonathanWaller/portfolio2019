import React, { Component } from 'react';
import Header from '../Header/Header';
import zenscroll from "zenscroll";
import '../../styles/scss/Splash.scss';

class Splash extends Component {
    
    render(){
        return(
            <div className='container' id='splash'>
                <div>
                    <Header />
                </div>
                <div>
                    <h1>Jonathan Waller</h1>
                    <p>Full Stack Web Developer</p>
                </div>
            </div>
        )
    }
}


export default Splash;
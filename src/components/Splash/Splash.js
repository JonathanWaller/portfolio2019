import React, { Component } from 'react';
import Header from '../Header/Header';
import Links from '../Links/Links'
import zenscroll from "zenscroll";
import '../../styles/scss/Splash.scss';

class Splash extends Component {
    
    render(){
        return(
            <div className='container' id='splash'>
                <Links />
                <div>
                    <Header />
                </div>
                <div className='splash-text'>
                    <h1>Jonathan Waller</h1>
                    <div className='outer-box'>
                    <div className='text-box'>
                    <div className='inner-text'>Full Stack Web Developer</div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Splash;
import React, { Component } from 'react';
import Header from '../Header/Header';
import zenscroll from "zenscroll";
import '../../styles/scss/Splash.scss';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

class Splash extends Component {
    
    render(){
        return(
            <div className='splash-container' id='splash'>
                <div className='splash-text'>
                    {/* <h1 className='name'>Jonathan Waller</h1> */}
                    <div className='name-wrapper'>
                        <h1 className='name'>Jonathan</h1>
                        <h1 className='name'>Waller</h1>
                    </div>
                    <div className='outer-box'>
                        <div className='text-box'>
                            <div className='inner-text'>Full Stack Web Developer</div>
                        </div>
                    </div>
                    <div className='brands-wrapper'>
                        <a href='https://github.com/JonathanWaller' className='github'><FontAwesomeIcon icon={faGithub} /></a>
                        <a href='https://www.linkedin.com/in/wallerjonathan/' className='github'><FontAwesomeIcon icon={faLinkedin} /></a>
                    </div>
                </div> 
            </div>
        )
    }
}


export default Splash;
import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import '../../styles/scss/About.scss';
// import { FontAwesomeIcon}

class About extends Component {
    
    render(){
        return(
            <div className='mobile-container' id='about'>
                <h1 className='title'>ABOUT</h1>
                <div id = 'text-bg-container'>
                    <section className='text-wrap'>       
                        <p className = 'about-text'><span className = 'tab'></span>I'm a developer focused on creating beautiful web applications and having fun while doing it.</p>
                    </section>
                </div>
            </div>
        )
    }
}





export default About;
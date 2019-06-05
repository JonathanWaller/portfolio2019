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
                        <p className = 'about-text'><span className = 'tab'></span>I'm a developer focused on creating beautiful web applications with sensible functionality. I love the precision that goes into frontend design, as well as the logic that goes into building out the backend.</p>
                        <p className = 'about-text'><span className = 'tab'></span>Lately, I've been using the SERN stack -- SQL, Express, React, and Node. I'm also dabbling in React Native and Python. In my free time, I enjoy running, reading, and pushing myself to seek discomfort. I'm also a gamer at heart.</p>
                    </section>
                </div>
            </div>
        )
    }
}





export default About;
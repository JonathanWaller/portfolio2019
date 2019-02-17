import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import '../../styles/scss/About.scss';
// import { FontAwesomeIcon}

class About extends Component {
    
    render(){
        return(
            <div className='container' id='about'>
                <h1>ABOUT</h1>
                <i class="fas fa-map-marker-alt"></i>
                <p>Test: <FontAwesomeIcon icon={faMapMarkerAlt} /></p>
                
                <div id = 'text-bg-container'>
                    <section>       
                    <p className = 'about-text'><span className = 'tab'></span>I'm a developer focused on creating beautiful web applications with sensible navigation. I love the logic that goes into building out the backend, as well as the precision that goes into front end design.</p>
                    <p className = 'about-text'><span className = 'tab'></span>Lately, I've been using the SERN stack -- SQL, Express, React, and Node. I'm also dabbling in React Native and Python. In my free time, I enjoy running, reading, and learning to cook. I'm also a gamer at heart.</p>
                    </section>
                </div>
            </div>
        )
    }
}





export default About;
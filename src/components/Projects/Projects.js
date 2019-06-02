import React, {Component} from 'react';
import Project from './Project/Project';
import '../../styles/scss/Projects.scss';

const restay = require('../../assets/restay.png');
const laavish = require('../../assets/Laavish.png');
const freelancer = require('../../assets/Freelancer.png');

class Projects extends Component {
    
    render(){
        return(
            <div className='projects'>
                <h1 className='title'>Projects</h1>
                <Project img={restay} link='http://restay.io' title='Restay' text='Property management utility for organizing and managing rental properties'/>
                <Project img={laavish} link='http://shoplaavish.online' title='Laavish' text='Ecommerce site dedicated to men&#39;s fashion and accessories'/>
                <Project img={freelancer} link='http://freelancer.waller-jonathan.com/#/' title='Freelancer' text='Web application which allows small businesses and freelancers (web developers/designers) to interact and source work in a common setting'/>
            </div>
        )
    }
}

export default Projects;
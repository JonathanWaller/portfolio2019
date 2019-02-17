import React, {Component} from 'react';
import Project from './Project/Project';

const restay = require('../../assets/restay.png');
const laavish = require('../../assets/Laavish.png');
const freelancer = require('../../assets/Freelancer.png');

class Projects extends Component {
    
    render(){
        return(
            <div>
                <h1>Projects</h1>
                <Project img={restay} title='Restay' text='Property management utility for organizing and managing rental properties'/>
                <Project img={laavish} title='Laavish' text='Ecommerce site dedicated to men&#39;s fashion and accessories'/>
                <Project img={freelancer} title='Freelancer' text='Web application which allows small businesses and freelancers (web developers/designers) to interact and source work in a common setting'/>
            </div>
        )
    }
}

export default Projects;
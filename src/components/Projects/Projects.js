import React, {Component} from 'react';
// import Project from './Project/Project';
import '../../styles/scss/Projects.scss';

import Example from './Project/Example';

import "react-responsive-carousel/lib/styles/carousel.min.css";

// const restay = require('../../assets/restay.png');
// const laavish = require('../../assets/Laavish.png');
// const freelancer = require('../../assets/Freelancer.png');

//restay 
const restaySplash = require('../../assets/restay/splash.png');
const properties = require('../../assets/restay/properties.png');
const property = require('../../assets/restay/property.png');
const property2 = require('../../assets/restay/property2.png');

//laavish
const laavishSplash = require('../../assets/laavish/splash.png');
const store = require('../../assets/laavish/store.png');
const store2 = require('../../assets/laavish/store2.png');
const cart = require('../../assets/laavish/cart.png');
const editCart = require('../../assets/laavish/editCart.png');

//freelancer
const freelancerSplash = require('../../assets/freelancer/splash.png');
const feed = require('../../assets/freelancer/feed.png');
const post = require('../../assets/freelancer/post.png');
const profile = require('../../assets/freelancer/profile.png');

class Projects extends Component {
    
    render(){
        return(
            <div className='projects'>
                <h1 className='title'>PROJECTS</h1>
                {/* <Project img={restay} link='http://restay.io' title='Restay' text='Property management utility for organizing and managing rental properties'/>
                <Project img={laavish} link='http://shoplaavish.online' title='Laavish' text='Ecommerce site dedicated to men&#39;s fashion and accessories'/>
                <Project img={freelancer} link='http://freelancer.waller-jonathan.com/#/' title='Freelancer' text='Web application which allows small businesses and freelancers (web developers/designers) to interact and source work in a common setting'/> */}
                
                <Example 
                    title='Restay' 
                    description='Property management utility for organizing and managing rental properties'
                    images={ [ restaySplash, properties, property, property2 ] }
                    link='http://restay.io'
                />
                <Example 
                    title='Laavish' 
                    description='Ecommerce site dedicated to men&#39;s fashion and accessories'
                    images={ [ laavishSplash, store, store2, cart, editCart ] }
                />
                <Example 
                    title='Freelancer' 
                    description='Web application which allows small businesses and freelancers (web developers/designers) to interact and source work in a common setting'
                    images={ [ freelancerSplash, feed, profile, post ] }
                />
            </div>
        )
    }
}

export default Projects;
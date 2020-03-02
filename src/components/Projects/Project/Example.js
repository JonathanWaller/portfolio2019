import React, {Component} from 'react';
import '../../../styles/scss/Project.scss';

import Gallery from '../../Gallery/Gallery';
import "react-responsive-carousel/lib/styles/carousel.min.css";

class Project extends Component {
    
    render(props){

        return(
            <div className='container' id='project-container'>
                <div className='project-text-wrapper'>
                    <h3 className='project-title'>{this.props.title}</h3>
                    <p className='project-text'>{this.props.description}</p>
                    {
                        this.props.link
                        ?
                        <div>
                        < a href={this.props.link} >Link to site</a>
                        </div>
                        : null
                    }
                </div>
                <div className='project-image' >
                    <Gallery images={this.props && this.props.images} /> 
                </div>
            </div>
        )
    }
}

export default Project;
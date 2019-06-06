import React, {Component} from 'react';
import '../../../styles/scss/Project.scss';

class Project extends Component {
    
    render(props){
        return(
            <div className='container' id='project-container'>
                <a href={this.props.link}>
                    <img className='project-image' src={this.props.img} />
                    <div className='project-text-wrapper'>
                        <h3 className='project-title'>{this.props.title}</h3>
                        <p className='project-text'>{this.props.text}</p>
                    </div>
                </a>
            </div>
        )
    }
}

export default Project;


import React, {Component} from 'react';
import '../../../styles/scss/Project.scss';

class Project extends Component {
    
    render(props){
        return(
            <div className='container'>
                <img className='project-image' src={this.props.img} />
                <h1>{this.props.title}</h1>
                <p>{this.props.text}</p>
            </div>
        )
    }
}

export default Project;


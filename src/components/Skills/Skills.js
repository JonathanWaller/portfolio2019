import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faToolbox } from '@fortawesome/free-solid-svg-icons';

class Skills extends Component {
    
    render(){
        return(
            <div>
                <h1>Skills</h1>
                <div><FontAwesomeIcon icon={faToolbox} /></div>
            </div>
        )
    }
}

export default Skills;
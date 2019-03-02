import React, {Component} from 'react';
import '../../styles/scss/Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';

class Header extends Component {
    
    render(){
        return(
            <div className='header'>
                <div className='hamburger'><FontAwesomeIcon icon={faBars} /></div>
            </div>
        )
    }
}

export default Header;
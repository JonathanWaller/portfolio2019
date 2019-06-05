import React, {Component} from 'react';
import '../../styles/scss/Footer.scss';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return(
        <div className='footer'>
            {`${String.fromCharCode(169)} 2019 Jonathan Waller`}
        </div>
    )
}

export default Footer;
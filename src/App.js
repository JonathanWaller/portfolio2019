import React, { Component } from 'react';
import Splash from './components/Splash/Splash';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer'
import './App.scss'


import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'
import { faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'


// library.add(faIgloo)
library.add(faMapMarkerAlt);

class App extends Component {
  render() {
    return (
      <div className="App">
      <Splash/>
      <About />
      <Projects />
      <Footer />
      </div>
    );
  }
}

export default App;

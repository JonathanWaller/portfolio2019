import React, { Component } from 'react';
import Splash from './components/Splash/Splash';
import './App.scss'

class App extends Component {
  render() {
    return (
      <div className="App">
      <p className='App-paragraph'>Hello from App!!</p>
      <Splash/>
      </div>
    );
  }
}

export default App;

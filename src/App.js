import React, { Component } from 'react';
import './App.css';
import CarListing from './component/CarListing/CarListing'
import Welcome from './component/Welcome/Welcome';
import Navigator from './component/Navigator/Navigator';
import TriviaGame from './component/TriviaGame/TriviaGame';
import ControlledInput from './component/ControlledInput/ControlledInput';
import Api from './component/Api/Api';

class App extends Component {
  render() {
    return (
      <div> <br />
        <CarListing /> <br />
        <Welcome name="Subhendu" /> <br />
        <Navigator /> <br />
        <TriviaGame /> <br />
        <ControlledInput /><br />
        <Api starshipId="9" /><br />
      </div>
    );
  }
}

export default App;

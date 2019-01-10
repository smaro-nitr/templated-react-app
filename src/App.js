import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom'

import Navbar from './component/Navbar/Navbar';
import Welcome from './component/Welcome/Welcome';
import ContentUpdate from './component/ContentUpdate/ContentUpdate';
import ApiFetch from './component/ApiFetch/ApiFetch';
import CarListing from './component/CarListing/CarListing'
import ControlledInput from './component/ControlledInput/ControlledInput';
import Redux from './component/Redux/Redux';
import TriviaGame from './component/TriviaGame/TriviaGame';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      navigationComponent: ['', 'ContentUpdate', 'ApiFetch', 'CarListing', 'ControlledInput', 'Redux', 'TriviaGame']
    };
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar navigationComponent={this.state.navigationComponent}/> <br />
          <Route exact path={'/' + this.state.navigationComponent[0]} render={() => <Welcome name="Subhendu" />} />
          <Route exact path={'/' + this.state.navigationComponent[1]} component={ContentUpdate} />
          <Route exact path={'/' + this.state.navigationComponent[2]} render={() => <ApiFetch starshipId="9" />} />
          <Route exact path={'/' + this.state.navigationComponent[3]} component={CarListing} />
          <Route exact path={'/' + this.state.navigationComponent[4]} component={ControlledInput} />
          <Route exact path={'/' + this.state.navigationComponent[5]} component={Redux} />
          <Route exact path={'/' + this.state.navigationComponent[6]} component={TriviaGame} />
          <br />
        </div>
      </Router>
    );
  }
}

export default App;

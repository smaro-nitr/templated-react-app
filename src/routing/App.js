import React, { Component } from 'react';
import './App.css';
import '../../node_modules/react-grid-layout/css/styles.css';
import '../../node_modules/react-resizable/css/styles.css';
import { Route, BrowserRouter as Router } from 'react-router-dom'

import Navbar from '../component/Navbar/index';
import Welcome from '../component/Welcome/Welcome';
import ContentUpdate from '../component/ContentUpdate/ContentUpdate';
import ApiFetch from '../component/ApiFetch/ApiFetch';
import CarListing from '../component/CarListing/CarListing'
import ControlledInput from '../component/ControlledInput/ControlledInput';
import Redux from '../component/Redux/Redux';
import TriviaGame from '../component/TriviaGame/TriviaGame';
import Axios from '../component/Axios/index';
import ReactGrid from '../component/ReactGrid/index';
import RxJs from '../component/RxJs/index';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      navigationComponent: ['', 'ContentUpdate', 'ApiFetch', 'CarListing', 'ControlledInput', 'Redux', 'TriviaGame', 'Axios', 'ReactGrid', 'RxJs']
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
          <Route exact path={'/' + this.state.navigationComponent[7]} component={Axios} />
          <Route exact path={'/' + this.state.navigationComponent[8]} component={ReactGrid} />
          <Route exact path={'/' + this.state.navigationComponent[9]} component={RxJs} />
          <br />
        </div>
      </Router>
    );
  }
}

export default App;

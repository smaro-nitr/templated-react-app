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
import Highchart from '../component/Highchart';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      navigationComponent: [
        { path: '', component: <Welcome name="Subhendu" /> },
        { path: 'ContentUpdate', component: <ContentUpdate /> },
        { path: 'ApiFetch', component: <ApiFetch starshipId="9" /> },
        { path: 'CarListing', component: <CarListing /> },
        { path: 'ControlledInput', component: <ControlledInput /> },
        { path: 'Redux', component: <Redux /> },
        { path: 'TriviaGame', component: <TriviaGame /> },
        { path: 'Axios', component: <Axios /> },
        { path: 'ReactGrid', component: <ReactGrid /> },
        { path: 'RxJs', component: <RxJs /> },
        { path: 'Highchart', component: <Highchart /> },
      ]
    };
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar navigationComponent={this.state.navigationComponent} /> <br />
          {this.state.navigationComponent.map(item => {
            return <Route exact path={'/' + item.path} render={() => item.component} />
          })}
          <br />
        </div>
      </Router>
    );
  }
}

export default App;

import { Component} from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

import '../styles/SideBar.css';

export default class SideBar extends Component {

  render() {

    return(
      <Router>
      <Route render={({ location, history }) => (
          <div>
              <div className = "vertical-menu">
                <a href="#" className="active">Home</a>
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
                <a href="#">Link 4</a>
              </div>
              {/* <main>
                  <Route path="/" exact component={props => <RootComponent />} />
                  <Route path="/home" component={props => <Home />} />
                  <Route path="/devices" component={props => <Devices />} />
              </main> */}
          </div>
      )}
      />
  </Router>);
  }
}

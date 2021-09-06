import { Component } from 'react';
import PrimarySearchAppBar from './Navbar';

class HomePage extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <PrimarySearchAppBar/>
    );
    
  }

}

export default HomePage;

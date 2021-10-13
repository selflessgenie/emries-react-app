import { Component } from 'react';
import { Container } from '@material-ui/core';
import PrimarySearchAppBar from './Navbar';
import Category from './Category';
import MainContent from './MainContent';

class HomePage extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Container maxWidth="lg">
        <PrimarySearchAppBar/>
        <Category/>
        <MainContent/>
      </Container>
    );
    
  }

}

export default HomePage;

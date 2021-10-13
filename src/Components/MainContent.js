import SideBar from './SideBar';
import { Component } from 'react';
import '../styles/MainContent.css';

export default class MainContent extends Component {

  render() {

    return(
      <div className = "main-content">
        <SideBar/>
      </div>
      
    );
  }
}
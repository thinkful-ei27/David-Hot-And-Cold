import React, { Component } from 'react';
//import logo from './logo.svg';
import HotColdComponent from './hotColdBox.js'
import './App.css';

export default class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      guesses: [],
      temp: ''
    }
  }
  render() {
    let hotCold = <HotColdComponent temp="cold"/>
    return hotCold
    // return (
    //   <div className="App">
    //     <header className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <p>
    //         Edit <code>src/App.js</code> and save to reload.
    //       </p>
    //       <a
    //         className="App-link"
    //         href="https://reactjs.org"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Learn React
    //       </a>
    //     </header>
    //   </div>
    // );
  }
}

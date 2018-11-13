import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  handleClick = () => {
    fetch('https://data.cityofnewyork.us/resource/94pk-v63f.json')
    .then(response => console.log(response.json()))
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.handleClick}>Hello</button>
        
      </div>


    );
  }
}

export default App;

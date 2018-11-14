import React, { Component } from 'react';
import logo from './logo.svg';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './App.css';
import FarmersMarketsContainer from './containers/FarmersMarketsContainer';

class App extends Component {


  render() {
    return (
      <div className="App">
        <div className="groceryListLink">See Grocery List(s)</div>
        <FarmersMarketsContainer />
      </div>

    );
  }
}



export default App

import React, { Component } from 'react';
import logo from './logo.svg';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import FarmersMarketsContainer from './containers/FarmersMarketsContainer';
import GroceryLists from './components/grocery_lists/GroceryLists'
import FarmersMarketsList from './components/farmers_markets/FarmersMarketsList'


class App extends Component {


  render() {
    return (
      <div className="App">
        <Router>
      		<React.Fragment>
          	<Route exact path="/" component={FarmersMarketsContainer} />
      		    <Route path="/groceries" render={routerProps => <FarmersMarketsList {...routerProps}
              stateMarkets={this.props.state.farmersMarkets} stateList={this.props.state.groceryList}/>}/>
      		</React.Fragment>
      		</Router>
      </div>

    );
  }
}

const mapStateToProps = state => ({ state: state })

export default connect(mapStateToProps)(App)

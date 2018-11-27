import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import logo from './logo.svg';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import FarmersMarketsContainer from './containers/FarmersMarketsContainer';
import FarmersMarketsList from './components/farmers_markets/FarmersMarketsList'


class App extends Component {

  constructor() {
  super()
  this.state = {
    searchParams: [],
    zip: ""
    }
  }


  getSearch = (state) => {
     this.setState({searchParams: state.searchParams, zip: state.zip})
  }

  getSearchParams = () => (this.state)

  render() {
    return (
      <div className="App">
      <div>{console.log(this.state)}</div>
        <Router>
      		<React.Fragment>
          	<Route path="/farmersmarkets" render={routerProps => <FarmersMarketsContainer {...routerProps} searchParams={this.getSearch}/>}/>
            <Route exact path="/" component={FarmersMarketsContainer}/>
            <Route path="/groceries" render={routerProps => <FarmersMarketsList {...routerProps}
              stateMarkets={this.props.state.farmersMarkets} stateList={this.props.state.groceryList} searchParams={this.getSearchParams()}/>}/>
      		</React.Fragment>
      		</Router>
      </div>

    );
  }
}

const mapStateToProps = state => ({ state: state })

export default connect(mapStateToProps)(App)

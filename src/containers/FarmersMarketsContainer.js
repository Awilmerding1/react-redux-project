import React, { Component } from 'react'
import FarmersMarketsInput from '../components/farmers_markets/FarmersMarketsInput'
import FarmersMarkets from '../components/farmers_markets/FarmersMarkets'
import {fetchFarmersMarkets} from '../actions/fetchFarmersMarkets'
import { connect } from 'react-redux';

class FarmersMarketsContainer extends Component {

    componentDidMount() {
     this.props.fetchFarmersMarkets()
   }

  render() {
    return (
      <div>
        <FarmersMarketsInput addFarmersMarket={this.props.addFarmersMarket}/>
        <FarmersMarkets farmersMarkets={this.props.farmersMarkets} deleteFarmersMarket={this.props.deleteFarmersMarket}/>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    farmersMarkets: state.farmersMarkets
  };
}


export default connect(mapStateToProps, {fetchFarmersMarkets})(FarmersMarketsContainer)

import React, { Component } from 'react'
import FarmersMarketsInput from '../components/farmers_markets/FarmersMarketsInput'
import FarmersMarkets from '../components/farmers_markets/FarmersMarkets'
import {fetchFarmersMarkets} from '../actions/fetchFarmersMarkets'
import {filterFetchFarmersMarkets} from '../actions/filterFetchFarmersMarkets'

import { connect } from 'react-redux';

class FarmersMarketsContainer extends Component {

  componentDidMount() {
     this.props.fetchFarmersMarkets()
   }


handleSubmit = (data) => {
  console.log(data)
  let returnData = this.props.filterFetchFarmersMarkets(data)
  console.log()
   }


  render() {
    return (
      <div>
        <FarmersMarketsInput handleSubmit={this.handleSubmit}/>
        <FarmersMarkets farmersMarkets={this.props.farmersMarkets}/>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    farmersMarkets: state.farmersMarkets
  };
}


export default connect(mapStateToProps, {fetchFarmersMarkets, filterFetchFarmersMarkets})(FarmersMarketsContainer)

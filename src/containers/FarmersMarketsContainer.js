import React, { Component } from 'react'
import FarmersMarketsInput from '../components/farmers_markets/FarmersMarketsInput'
import FarmersMarkets from '../components/farmers_markets/FarmersMarkets'
import {fetchFarmersMarkets} from '../actions/fetchFarmersMarkets'
import {filterFetchFarmersMarkets} from '../actions/filterFetchFarmersMarkets'

import { connect } from 'react-redux';

class FarmersMarketsContainer extends Component {

  constructor() {
  super()
  this.state = {
    searchParams: [],
    zip: ""
  }
}

  componentDidMount() {
     this.props.fetchFarmersMarkets()
   }

  handleSubmit = (data) => {
    this.props.filterFetchFarmersMarkets(data)
  }

  handleSearch = searchParams => {
    if (!searchParams[0].match(/\d/)) {
     this.setState({searchParams: searchParams});
   } else {
     let zip = searchParams.shift()
     this.setState({searchParams: searchParams, zip: zip})
   }

  }

  getSearchParams = () => (this.state)

  render() {
    return (
      <div>
        <FarmersMarketsInput handleSubmit={this.handleSubmit} handleSearch={this.handleSearch}/>
        <FarmersMarkets farmersMarkets={this.props.farmersMarkets} searchParams={this.getSearchParams()}/>
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

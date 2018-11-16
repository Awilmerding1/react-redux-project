import React, { Component } from 'react'
import FarmersMarketsInput from '../components/farmers_markets/FarmersMarketsInput'
import FarmersMarkets from '../components/farmers_markets/FarmersMarkets'
import { Link } from 'react-router-dom';
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

  handleSearch = (searchParams, zip) => {
    console.log(searchParams.map(m => {return Object.keys(m)[0]}))
    console.log(zip)
     this.setState({searchParams: searchParams.map(m => {return Object.keys(m)[0]}), zip: zip.search})
   // }
  }

  getSearchParams = () => (this.state)

  render() {
    return (
      <div>
      <div className="groceryListLink" ><Link to={'/groceries'}>Grocery Lists</Link></div>
      <div>
        <FarmersMarketsInput handleSubmit={this.handleSubmit} handleSearch={this.handleSearch}/>
        <FarmersMarkets farmersMarkets={this.props.farmersMarkets} searchParams={this.getSearchParams()}/>
      </div>
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

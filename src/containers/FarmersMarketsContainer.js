import React, { Component } from 'react'
import FarmersMarketsInput from '../components/farmers_markets/FarmersMarketsInput'
import FarmersMarkets from '../components/farmers_markets/FarmersMarkets'
import { connect } from 'react-redux';

class FarmersMarketsContainer extends Component {

  render() {
    return (
      <div>
        <FarmersMarketsInput />
        <FarmersMarkets />
      </div>
    )
  }
}

const mapStateToProps = state => { farmersMarkets: state.farmersMarkets }

	const mapDispatchToProps = dispatch => {
	    return {

	    };
	};


export default connect(mapStateToProps, mapDispatchToProps)(FarmersMarketsContainer)

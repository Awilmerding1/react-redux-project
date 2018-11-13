import React, { Component } from 'react'
import FarmersMarketsInput from '../components/farmers_markets/FarmersMarketsInput'
import FarmersMarkets from '../components/farmers_markets/FarmersMarkets'
import { connect } from 'react-redux';

class FarmersMarketsContainer extends Component {

  render() {
    return (
      <div>
        <FarmersMarketsInput addFarmersMarket={this.props.addFarmersMarket}/>
        <FarmersMarkets farmersMarkets={this.props.farmersMarkets} deleteFarmersMarket={this.props.deleteFarmersMarket}/>
      </div>
    )
  }
}

const mapStateToProps = state => { farmersMarkets: state.farmersMarkets }

	const mapDispatchToProps = dispatch => {
	    return {
        addFarmersMarket: farmersMarket => dispatch({ type: 'ADD_FARMERS_MARKET', farmersMarket }),
        deleteFarmersMarket: marketId => dispatch({type: 'DELETE_FARMERS_MARKET', id: marketId })
	    };
	};


export default connect(mapStateToProps, mapDispatchToProps)(FarmersMarketsContainer)

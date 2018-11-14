import React, { Component } from 'react';
import FarmersMarket from './FarmersMarket'

class FarmersMarkets extends Component {

  render() {
     const { farmersMarkets, deleteFarmersMarket } = this.props;
     const renderFarmersMarkets = farmersMarkets.map(farmersMarket => <FarmersMarket key={farmersMarket.id} farmersMarket={farmersMarket} />)
    return(
      <ul>
        {renderFarmersMarkets}
      </ul>
    );
  }
};

export default FarmersMarkets;

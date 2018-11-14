import React, { Component } from 'react';
import FarmersMarket from './FarmersMarket'

class FarmersMarkets extends Component {

  render() {
     const { farmersMarkets, deleteFarmersMarket, searchParams } = this.props;
     const renderFarmersMarkets = farmersMarkets.map(farmersMarket => <FarmersMarket key={farmersMarket.id} farmersMarket={farmersMarket} />)
    return(
      <div>
      <div>Searched for Markets Open On: {searchParams.map(param => param.charAt(0).toUpperCase() + param.slice(1)).join(", ")}</div>
      <ul>
        {renderFarmersMarkets}
      </ul>
      </div>
    );
  }
};

export default FarmersMarkets;

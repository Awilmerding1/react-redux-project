import React, { Component } from 'react';
import FarmersMarket from './FarmersMarket'
import SearchMarkets from '../search/SearchMarkets'

class FarmersMarkets extends Component {

  render() {
     const { farmersMarkets, searchParams } = this.props;
     const renderFarmersMarkets = farmersMarkets.map(farmersMarket => <FarmersMarket key={farmersMarket.id} farmersMarket={farmersMarket} />)
     const renderSearchMarkets = (searchParams) => { if(searchParams.searchParams.length > 0 || searchParams.zip !== "")  {return <SearchMarkets searchParams={searchParams}/>}}

    return(
      <div>
        <div>{renderSearchMarkets(searchParams)}</div>
      <ul>
        {renderFarmersMarkets}
      </ul>
      </div>
    );
  }
};



export default FarmersMarkets;

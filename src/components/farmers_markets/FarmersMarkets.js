import React, { Component } from 'react';
import FarmersMarket from './FarmersMarket'
import SearchMarkets from '../search/SearchMarkets'

class FarmersMarkets extends Component {
//   checkParams = () => {
//     if (this.props.searchParams.searchParams.length > 0 || this.props.searchParams.zip !== "") {
//     return <SearchMarkets searchParams={this.props.searchParams}/>
//   } else {
//     return <p></p>
//   }
// }

  render() {
     const { farmersMarkets, searchParams } = this.props;
     const renderFarmersMarkets = farmersMarkets.map(farmersMarket => <FarmersMarket key={farmersMarket.id} farmersMarket={farmersMarket} />)

    return(
      <div>
      <SearchMarkets searchParams={this.props.searchParams}/>
      <ul>
        {renderFarmersMarkets}
      </ul>
      </div>
    );
  }
};



export default FarmersMarkets;

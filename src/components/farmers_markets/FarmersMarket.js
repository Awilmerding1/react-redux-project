
import React, { Component } from 'react';
import GroceryListsContainer from '../../containers/GroceryListsContainer'

class FarmersMarket extends Component {

  render() {
    const { farmersMarket } = this.props;

    return (
      <div>
        <li onClick={this.handleOnClick}>
          {farmersMarket.facilityname} - {farmersMarket.address}, {farmersMarket.borough}
          <GroceryListsContainer farmersMarket={farmersMarket} />
        </li>
      </div>
    );
  }
};

export default FarmersMarket;

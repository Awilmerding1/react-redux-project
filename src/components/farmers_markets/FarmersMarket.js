
import React, { Component } from 'react';
import GroceryListsContainer from '../../containers/GroceryListsContainer'

class FarmersMarket extends Component {

  render() {
    const { farmersMarket } = this.props;

    return (
      <div>
        <div></div>
        <li onClick={this.handleOnClick} style={{textAlign: 'left'}}>
          {farmersMarket.facilityname} - {farmersMarket.address}, {farmersMarket.borough} {farmersMarket.zipcode}<br/><br/>
          <GroceryListsContainer farmersMarket={farmersMarket} />
        </li><br/><br/>
      </div>
    );
  }
};

export default FarmersMarket;

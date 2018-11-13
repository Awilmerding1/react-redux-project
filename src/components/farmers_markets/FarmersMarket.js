
import React, { Component } from 'react';
import FarmersMarketsContainer from '../../containers/FarmersMarketsContainer'

class FarmersMarket extends Component {

  handleOnClick = () => {

  }

  render() {
    const { farmersMarket } = this.props;

    return (
      <div>
        <li>
          {farmersMarket.text}
          <button onClick={this.handleOnClick}>Delete</button>
          <GroceryListsContainer  />
        </li>
      </div>
    );
  }
};

export default FarmersMarket;

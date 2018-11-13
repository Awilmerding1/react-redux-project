
import React, { Component } from 'react';
import FarmersMarketsContainer from '../../containers/FarmersMarketsContainer'

class FarmersMarket extends Component {

  handleOnClick = () => {
     this.props.deleteFarmersMarket(this.props.farmersMarket.id);
  }

  render() {
    const { farmersMarket } = this.props;

    return (
      <div>
        <li>
          {farmersMarket.text}
          <button onClick={this.handleOnClick}>Delete</button>
          <GroceryListsContainer farmersMarket={farmersMarket} />
        </li>
      </div>
    );
  }
};

export default FarmersMarket;

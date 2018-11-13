
import React, { Component } from 'react';
import GroceryItem from './GroceryItem';

class GroceryList extends Component {

  render() {
     const { groceryList, marketId, deleteGroceryItem } = this.props;
     const associatedMarkets = groceryList.filter(groceryItem => groceryItem.marketId === marketId);
      const groceryList = associatedMarkets.map((groceryItem, index) => {
     return <GroceryItem key={index} groceryItem={groceryItem} deleteGroceryItem={deleteGroceryItem} />
      })

    return (
      <ul>
        {groceryList}
      </ul>
    );
  }
};

export default GroceryList;


import React, { Component } from 'react';
import GroceryItem from './GroceryItem';

class GroceryList extends Component {

  render() {
     const { groceryList, marketId, deleteGroceryItem } = this.props;
     const associatedMarkets = groceryList.filter(groceryItem => groceryItem.marketId === marketId);
      const mapGroceryList = associatedMarkets.map((groceryItem, index) => {
     return <GroceryItem key={index} groceryItem={groceryItem} deleteGroceryItem={deleteGroceryItem} />
      })

    return (
      <ul>
        {mapGroceryList}
      </ul>
    );
  }
};

export default GroceryList;


import React, { Component } from 'react';
import GroceryItem from './GroceryItem';

class GroceryList extends Component {

  render() {
     const { groceryList, marketId, deleteGroceryItem } = this.props;
     const associatedMarkets = groceryList.filter(groceryItem => groceryItem.restaurantId === marketId);
      const groceryList = associatedMarkets.map((groceryItem, index) => {
     return <GroceryItem key={index} review={groceryItem} deleteReview={deleteGroceryItem} />
      })

    return (
      <ul>
        {groceryList}
      </ul>
    );
  }
};

export default GroceryList;


import React, { Component } from 'react';

class GroceryItem extends Component {

  handleOnClick = () => {
    this.props.deleteGroceryItem(this.props.groceryItem.id);
  }

  render() {
    const { groceryItem } = this.props

    return (
      <div>
        <li>
          {groceryItem.text}
        </li>
        <button onClick={this.handleOnClick}> Delete </button>
      </div>
    );
  }

};

export default GroceryItem;

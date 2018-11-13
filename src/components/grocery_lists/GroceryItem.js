
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
          <button onClick={this.handleOnClick}> Delete </button>
        </li>

      </div>
    );
  }

};

export default GroceryItem;

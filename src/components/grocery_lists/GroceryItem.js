
import React, { Component } from 'react';

class GroceryItem extends Component {

  handleOnClick = () => {
    this.props.deleteGroceryItem(this.props.groceryItem.id);
  }

  render() {
    const { groceryItem } = this.props

    return (
      <div>
        <li className="groceryItem">
          {groceryItem.text}
          <button className="groceryButton" onClick={this.handleOnClick}> Delete </button>
        </li>

      </div>
    );
  }

};

export default GroceryItem;

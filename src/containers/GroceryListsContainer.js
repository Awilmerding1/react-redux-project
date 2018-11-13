import React, { Component } from 'react'
import GroceryListsInput from '../components/grocery_lists/GroceryListsInput'
import GroceryList from '../components/grocery_lists/GroceryList'
import { connect } from 'react-redux';

class GroceryListsContainer extends Component {

  render() {
    return (
      <div>
        <GroceryListsInput />
        <GroceryLists />
      </div>
    )
  }
}

const mapStateToProps = state => { groceryLists: state.groceryLists }

	const mapDispatchToProps = dispatch => {
	    return {

	    };
	};


export default connect(mapStateToProps, mapDispatchToProps)(GroceryListsContainer)

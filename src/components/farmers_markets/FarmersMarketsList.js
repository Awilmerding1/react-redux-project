import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import GroceryListsContainer from '../../containers/GroceryListsContainer'
import GroceryListsInput from '../grocery_lists/GroceryListsInput'
import CombinedGroceryList from '../grocery_lists/CombinedGroceryList'
import FarmersMarket from './FarmersMarket'
import { Link } from 'react-router-dom';


class FarmersMarketsList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      markets: this.filterMarkets(),
      clicked: false
    };
  };


  filterMarkets = () => {
    const filtered = this.props.stateMarkets.filter(market => this.mapStateList().includes(market.id))
    const mapped = filtered.map(market => Object.assign(market, { items: this.props.stateList.filter(item => item.marketId === market.id)}))
    return mapped
  }

  mapStateList = () => {
    return this.props.stateList.map(list => list.marketId)
  }

hideList = () => {
   const { clicked } = this.state.clicked;
  this.setState({clicked: !clicked})
}


render() {
  const { stateMarkets, stateList} = this.props;

  return (
  <div>
    <div className="combinedGroceryListLink" ><Link to={'/groceries/combined'} onClick={this.hideList}>Combined Grocery List</Link></div>
    <div>
      <ul>{!this.state.clicked && this.state.markets.map(market => <FarmersMarket key={market.id} farmersMarket={market}/>)} </ul>
    </div>
    <div>
      <Route path="/groceries/combined" render={routerProps => <ol><CombinedGroceryList {...routerProps}
      markets={this.state.markets} /></ol>} />
    </div>
  </div>
)
}

}

export default FarmersMarketsList

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
      clicked: false,
      hideLink: false
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
  this.setState({clicked: !this.state.clicked, hideLink: !this.state.hideLink})
}


render() {
  const { stateMarkets, stateList} = this.props;

  const style = (this.state.hideLink || this.state.markets.length < 1) ? {display: "none"} : {};

  return (
  <div>
    <div className="combinedGroceryListLink" ><Link to={'/groceries/combined'} style={style} onClick={this.hideList}>Combined Grocery List</Link></div>
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

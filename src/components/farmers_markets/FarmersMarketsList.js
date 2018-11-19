import React, {Component} from 'react';
import GroceryListsContainer from '../../containers/GroceryListsContainer'
import GroceryListsInput from '../grocery_lists/GroceryListsInput'

class FarmersMarketsList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      markets: this.filterMarkets()
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


render() {
  const { stateMarkets, stateList } = this.props;

  return (
  <div>
      <div>{this.state.markets.map(market => <div>{market.facilityname}<br/> {<GroceryListsContainer farmersMarket={market}/>}<br/></div>)} </div>
  </div>
)
}

}

export default FarmersMarketsList

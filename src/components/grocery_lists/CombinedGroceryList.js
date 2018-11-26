import React, {Component} from 'react';
import cuid from 'cuid';
export const cuidFn = cuid;

class CombinedGroceryList extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      markets: this.marketsAndItems(),
      clicked: false,
      sortGroceries: false
    }
  }

  marketsAndItems = () => {
  let items = this.props.markets.map(market => market.items).flat()
  let matchItems = this.props.markets.filter(market => market.id === (items.map(item => item.marketId)))
  let marketItems = []
  this.props.markets.map(market => marketItems.push({facilityname: market.facilityname, items: market.items}))
  return marketItems
  }

  clicked = () => {
    this.setState({clicked: !this.state.clicked})
  }

  sortGroceries = () => {
    this.setState({sortGroceries: !this.state.sortGroceries})
  }

render () {

return (
  <div>
    <div className="showMarketNames" onClick={this.clicked}>Show/Hide Market Names</div>
    <div className="sortGroceries" onClick={this.sortGroceries}>{!this.state.sortGroceries ? "Sort By Market" : "Show One List"}</div>
    <div>{!this.state.sortGroceries && this.state.markets.map(market => market.items.map(item => <li key={item.id}>{item.text} {!this.state.clicked ? " " :  "- " + market.facilityname}</li>))}</div>
    <div>{this.state.sortGroceries && this.state.markets.map(market => <p className="marketSort">{market.facilityname} {market.items.map(item => <li className="sortedByMarket" key={item.id}>{item.text}</li>)}</p>)}</div>
  </div>

)
}
}
export default CombinedGroceryList;

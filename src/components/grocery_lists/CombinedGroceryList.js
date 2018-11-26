import React, {Component} from 'react';
import cuid from 'cuid';
export const cuidFn = cuid;

class CombinedGroceryList extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      markets: this.marketsAndItems(),
      clicked: false
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
    const { clicked } = this.state.clicked;
    this.setState({clicked: !clicked})
  }

render () {

return (
  <div>
    <div className="showMarketNames" onClick={this.clicked}>Show Market Names</div>
    <div>{ this.state.markets.map(market => <li>{market.items.map(item => item.text)  + (this.state.clicked ? " " :  "- " + market.facilityname)}</li>)}</div>
  </div>

)
}
}
export default CombinedGroceryList;

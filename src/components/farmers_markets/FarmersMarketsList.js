import React, {Component} from 'react';

class FarmersMarketsList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      markets: this.filterMarkets(),
      items: this.props.stateList
    };
  };



  filterMarkets = () => {
    const filtered = this.props.stateMarkets.filter(market => this.mapStateList().includes(market.id))
    const mapped = filtered.map(market => Object.assign(market, { items: this.props.stateList.filter(item => item.marketId === market.id)}))
    console.log(mapped)
    return mapped
  }

  mapStateList = () => {
    return this.props.stateList.map(list => list.marketId)
  }

  pairItemWithMarket = () => {

  }

render() {
  const { stateMarkets, stateList } = this.props;
  const mapMarkets = stateMarkets.map(market => <li>{market.facilityname}</li>)
  const mapList = stateList.map(list => <li>{list.text}</li>)

  return (
  <div>
      {this.state.markets.map(market => <li>{market.facilityname}</li>)}
      {mapList}
  </div>
)
}

}

export default FarmersMarketsList

import React, {Component} from 'react';

class FarmersMarketsList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      markets: this.filterMarkets(),
      items: []
    };
  };

  filterMarkets = () => {
    console.log(this.mapStateList())
    return this.props.stateMarkets.filter(market => this.mapStateList().includes(market.id) )
  }

  mapStateList = () => {
    return this.props.stateList.map(list => list.marketId)
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

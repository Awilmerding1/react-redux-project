// import React from 'react';
import React, { Component } from 'react';

class SearchMarkets extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchParams: this.props.searchParams.searchParams,
      zip: this.props.searchParams.zip
    }

  }

  renderZip = () => {
    if (this.state.zip !== "") {
      return "Within the Zip Code: " + this.state.zip
    } else {
      return <div></div>
    }
  }

  render () {
        const a = () => {console.log(this.state.searchParams)}
    return (
      <div>
      <div>{a()}</div>
        <div className="searchResults">Searched for Markets Open On: {this.state.searchParams.map(p => p.charAt(0).toUpperCase() + p.slice(1)).join(", ")}</div>
        <div className="searchResults">{this.renderZip()}</div>
      </div>
    )
  }

}

export default SearchMarkets

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

    return (
      <div>
        <div className="searchResults">{this.state.searchParams.map(p => "Searched for Markets Open On: " + p[Object.keys(p)].charAt(0).toUpperCase() + p[Object.keys(p)].slice(1)).join(", ")}</div>
        <div className="searchResults">{this.renderZip()}</div>
      </div>
    )
  }

}

export default SearchMarkets

// import React from 'react';
import React, { Component } from 'react';

class SearchMarkets extends Component {


  render () {
    return (
      <div>
        <div className="searchResults">{this.props.searchParams.searchParams.length > 0 ? "Searched for Markets Open On: " + this.props.searchParams.searchParams.map(p => p.charAt(0).toUpperCase() + p.slice(1)).join(", ") : <p></p>}</div>
        <div className="searchResults">{this.props.searchParams.zip !== "" ? "Within the Zip Code: " + this.props.searchParams.zip : <p></p>}</div>
      </div>
    )
  }

}

export default SearchMarkets

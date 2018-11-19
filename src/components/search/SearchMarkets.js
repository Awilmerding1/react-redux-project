// import React from 'react';
import React, { Component } from 'react';

class SearchMarkets extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     searchParams: this.props.searchParams.searchParams,
  //     zip: this.props.searchParams.zip
  //   }
  // }

  renderZip = () => {
    if (this.props.searchParams.zip !== "") {
      return "Within the Zip Code: " + this.props.searchParams.zip
    } else {
      return <div></div>
    }
  }

  renderDays = () => {
    if (this.props.searchParams.searchParams !== []) {
      return "Searched for Markets Open On: " + this.props.searchParams.searchParams.map(p => p.charAt(0).toUpperCase() + p.slice(1)).join(", ")
    } else {
      return <div></div>
    }
  }

  render () {
    return (
      <div>
        <div className="searchResults">{this.renderDays()}</div>
        <div className="searchResults">{this.renderZip()}</div>
      </div>
    )
  }

}

export default SearchMarkets

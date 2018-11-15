// import React from 'react';
import React, { Component } from 'react';

class SearchMarkets extends Component {

  constructor(props) {
    super(props);
    debugger;
    if (props.searchParams.searchParams !== [] && props.searchParams.zip !== ""){
    this.state = {
      searchParams: props.searchParams.searchParams,
      zip: props.searchParams.zip
    }
  } else if (props.searchParams.searchParams !== [] && props.searchParams.zip === "") {
    this.state = {
      searchParams: props.searchParams.searchParams,
      zip: false
    }
  } else if (props.searchParams.searchParams === [] && props.searchParams.zip !== "") {
    this.state = {
      searchParams: false,
      zip: props.searchParams.zip
    }
  }
  }

  renderZip = () => {
    if (this.state.zip !== false) {
      return "Within the Zip Code: " + this.state.zip
    } else {
      return <div></div>
    }
  }

  render () {

    return (
      <div>
        <div className="searchResults">{this.state.searchParams.map(param => "Searched for Markets Open On: " + param.charAt(0).toUpperCase() + param.slice(1)).join(", ")}</div>
        <div className="searchResults">{this.renderZip()}</div>
      </div>
    )
  }

}

export default SearchMarkets

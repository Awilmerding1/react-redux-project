import React, { Component } from 'react';

class FarmersMarketsInput extends Component {


  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  };

  handleOnChange(event) {
   this.setState({
     text: event.target.value,
   });
 }

 handleOnSubmit(event) {
  event.preventDefault();
  this.props.addFarmersMarket(this.state.text);
  this.setState({
    text: ''
  });
}

  render() {
    return (
      <div>
       <form onSubmit={(event) => this.handleOnSubmit(event)}>
       <label>Search for a Market: </label>
         <input
           type="text"
           value={this.state.text}
           onChange={(event) => this.handleOnChange(event)} />
         <input type="submit" />
       </form>
     </div>
    );
  }
};

export default FarmersMarketsInput;

import React, { Component } from 'react';

class FarmersMarketsInput extends Component {


  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };
  };

  handleOnChange(event) {
   this.setState({
     search: event.target.value,
   });
 }

 handleOnSubmit = (event) => {
  event.preventDefault();
  this.props.handleSubmit(this.state)
}

  render() {
    return (
      <div>
       <form onSubmit={this.handleOnSubmit}>
       <label>Search for a Market: </label>
         <input
           type="text"
           value={this.state.search}
           onChange={(event) => this.handleOnChange(event)} />
         <input type="submit" />
       </form>
     </div>
    );
  }
};

export default FarmersMarketsInput;

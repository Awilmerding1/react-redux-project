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
     search: event.target.value
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
       <label>Search for a Market By ZipCode: </label>
         <input
           type="text"
           value={this.state.search}
           onChange={(event) => this.handleOnChange(event)} />
         <input type="submit" />
         <label>Monday</label><input type="checkbox" name="monday"></input>
         <label>Tuesday</label><input type="checkbox" name="tuesday"></input>
         <label>Wednesday</label><input type="checkbox" name="wednesday"></input>
         <label>Thursday</label><input type="checkbox" name="thursday"></input>
         <label>Friday</label><input type="checkbox" name="friday"></input>
         <label>Saturday</label><input type="checkbox" name="saturday"></input>
         <label>Sunday</label><input type="checkbox" name="sunday"></input>
       </form>
     </div>
    );
  }
};

export default FarmersMarketsInput;

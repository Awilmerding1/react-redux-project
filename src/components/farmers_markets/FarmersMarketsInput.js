import React, { Component } from 'react';

class FarmersMarketsInput extends Component {


  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };
  };

  handleOnChange = (event) =>{
   this.setState({
     [event.target.name]: event.target.value
   });
 }


 handleOnSubmit = (event) => {
  event.preventDefault();
  this.props.handleSubmit(this.state)
  this.setState({
    search: ''
  });
}

  render() {
    return (
      <div>
       <form onSubmit={this.handleOnSubmit}>
       <label>Search for a Market By ZipCode: </label>
         <input
           type="text"
           name='search'
           value={this.state.search}
           onChange={this.handleOnChange} /><br/><br/>
         <label>Monday</label><input type="checkbox" value="monday" name="monday" onChange={this.handleOnChange}></input>
         <label>Tuesday</label><input type="checkbox" value="tuesday" name="tuesday" onChange={this.handleOnChange}></input>
         <label>Wednesday</label><input type="checkbox" value="wednesday" name="wednesday" onChange={this.handleOnChange}></input>
         <label>Thursday</label><input type="checkbox" value="thursday" name="thursday" onChange={this.handleOnChange}></input>
         <label>Friday</label><input type="checkbox" value="friday" name="friday" onChange={this.handleOnChange}></input>
         <label>Saturday</label><input type="checkbox" value="saturday" name="saturday" onChange={this.handleOnChange}></input>
         <label>Sunday</label><input type="checkbox" value="sunday" name="sunday" onChange={this.handleOnChange}></input><br/><br/>
         <input type="submit" />
       </form>
     </div>
    );
  }
};

export default FarmersMarketsInput;

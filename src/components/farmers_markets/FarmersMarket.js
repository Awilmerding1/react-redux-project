
import React, { Component } from 'react';
import GroceryListsContainer from '../../containers/GroceryListsContainer'

const FarmersMarket = ({farmersMarket}) =>
  <div className= "marketSearchandList">
    <div></div>
    <li  className="marketListItem">
      {farmersMarket.facilityname} - {farmersMarket.address}, {farmersMarket.borough} {farmersMarket.zipcode}<br/>
      <GroceryListsContainer farmersMarket={farmersMarket} />
    </li><br/><br/>
  </div>


export default FarmersMarket;

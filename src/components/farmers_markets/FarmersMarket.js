
import React, { Component } from 'react';
import GroceryListsContainer from '../../containers/GroceryListsContainer'

const FarmersMarket = ({farmersMarket}) => {

  const days = Object.keys(farmersMarket).filter(key => key === "monday" || key === "tuesday" || key === "wednesday" || key === "thursday" || key === "friday" || key === "saturday" || key === "sunday")
  const times = Object.values(farmersMarket).filter(key => key === "monday" || key === "tuesday" || key === "wednesday" || key === "thursday" || key === "friday" || key === "saturday" || key === "sunday")


  return (
  <div className= "marketSearchandList">
    <div></div>
    <li  className="marketListItem">
      {farmersMarket.facilityname} - {farmersMarket.address}, {farmersMarket.borough} {farmersMarket.zipcode} <p>{days.map(day => day.charAt(0).toUpperCase() + day.slice(1)).join(", ")} : {times.map(time => time)}</p><br/>
      <GroceryListsContainer farmersMarket={farmersMarket} />
    </li><br/><br/>
  </div>
)
}

export default FarmersMarket;

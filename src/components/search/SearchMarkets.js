import React, { Component } from 'react';
import FarmersMarket from '../farmers_markets/FarmersMarket'

const SearchMarkets = ({searchParams}) =>
    <div>
    <div>Searched for Markets Open On: {searchParams.searchParams.map(param => param.charAt(0).toUpperCase() + param.slice(1)).join(", ")}</div>
    <div>Within the Zip Code: {searchParams.zip}</div>
    </div>

export default SearchMarkets

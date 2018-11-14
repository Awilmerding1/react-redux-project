import React from 'react';

const SearchMarkets = ({searchParams}) =>
    <div>
    <div className="searchResults">Searched for Markets Open On: {searchParams.searchParams.map(param => param.charAt(0).toUpperCase() + param.slice(1)).join(", ")}</div>
    <div className="searchResults">Within the Zip Code: {searchParams.zip}</div>
    </div>

export default SearchMarkets

import React from 'react';

const CombinedGroceryList = ({markets }) =>
  <div>
    {markets.map(market => <li>market</li>)}
  </div>

export default CombinedGroceryList;

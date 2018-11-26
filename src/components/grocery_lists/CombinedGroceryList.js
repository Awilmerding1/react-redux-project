import React from 'react';
import cuid from 'cuid';
export const cuidFn = cuid;

const CombinedGroceryList = ({markets }) => {

  const marketItemArrays = markets.map(market => market.items).flat()
  const items = marketItemArrays.map(item => item.text)

return (
  <div>
    {items.map(item => <li key={cuidFn()}>{item}</li>)}
  </div>

)
}
export default CombinedGroceryList;

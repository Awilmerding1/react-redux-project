import cuid from 'cuid';
export const cuidFn = cuid;

export default function farmersMarketsReducer(state ={farmersMarkets: [], groceryList: []}, action) {
  switch (action.type) {
    case 'ADD_FARMERS_MARKET':
  	 const farmersMarket = {
        id: cuidFn(),
        text: action.farmersMarket
        }
      return { ...state, farmersMarkets: [...state.farmersMarkets, farmersMarket] }
      case 'DELETE_FARMERS_MARKET':
	      const farmersMarkets = state.farmersMarkets.filter(farmersMarket => farmersMarket.id !== action.id)
        return { ...state, farmersMarkets}
      case 'ADD_GROCERY_ITEM':
        const groceryItem = { text: action.groceryItem.text, marketId: action.groceryItem.marketId, id: cuidFn() };
        return { ...state,
          groceryList: [...state.groceryList, groceryItem]
        }

      case 'DELETE_GROCERY_ITEM':
        const groceryList = state.groceryList.filter(groceryItem => groceryItem.id !== action.id);
        return {...state, groceryList }
    default:
      return state;
}
}

import fetch from 'isomorphic-fetch';

export function filterFetchFarmersMarkets(data) {
  return (dispatch) => {
	  dispatch({ type: 'LOADING_MARKETS' })
  return fetch(`https://data.cityofnewyork.us/resource/94pk-v63f.json?zipcode=${data.search}`)
  .then(response => response.json())
  .then(responseJSON => {return responseJSON})
  .then(farmersMarkets => dispatch({ type: 'FETCH_FARMERS_MARKETS', payload: farmersMarkets }))
}
}

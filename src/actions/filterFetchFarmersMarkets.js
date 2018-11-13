import fetch from 'isomorphic-fetch';

export function filterFetchFarmersMarkets(data) {
  let dataValues = Object.values(data)
  dataValues.shift()
  if (data.search !== "") {
  return (dispatch) => {
	  dispatch({ type: 'LOADING_MARKETS' })
  return fetch(`https://data.cityofnewyork.us/resource/94pk-v63f.json?zipcode=${data.search}`)
  .then(response => response.json())
  // .then(responseJSON => {return responseJSON})
  .then(responseJSON => {if(dataValues.length > 0) {return responseJSON.filter(r => r[dataValues[0]])} else {return responseJSON}})
  .then(farmersMarkets => dispatch({ type: 'FETCH_FARMERS_MARKETS', payload: farmersMarkets }))
}
} else {
  return (dispatch) => {
	  dispatch({ type: 'LOADING_MARKETS' })
  return fetch(`https://data.cityofnewyork.us/resource/94pk-v63f.json`)
  .then(response => response.json())
  .then(responseJSON => {return responseJSON.filter(r => r[dataValues[0]])})
  .then(farmersMarkets => dispatch({ type: 'FETCH_FARMERS_MARKETS', payload: farmersMarkets }))
}
}
}

import { fetch } from 'whatwg-fetch';

import AirportActionCreators from '../actions/AirportActionCreators';

const AirCheapAPI = {
  fetchAirports() {
    fetch('airports.json')
    .then((response) => response.json())
    .then((responseData) => {
      AirportActionCreators.fetchAirportsSuccess(responseData);
    })
    .catch((error) => {
      AirportActionCreators.fetchAirportsError(error);
    })
  }
};


export default AirCheapAPI;
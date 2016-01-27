import AppDispatcher from '../AppDispatcher';
import constants from '../constants';
import AirCheapAPI from '../api/aircheap-api';

const AirportActionCreators = {

  fetchAirports() {
    AirCheapAPI.fetchAirports();

    AppDispatcher.dispatch({
      type: constants.FETCH_AIRPORTS
    });
  },

  fetchAirportsSuccess(response) {
    AppDispatcher.dispatch({
      type:constants.FETCH_AIRPORTS_SUCCESS,
      payload: { response }
    })
  },

  fetchAirportsError(response) {
    AppDispatcher.dispatch({
      type:constants.FETCH_AIRPORTS_ERROR,
      payload: { response }
    })
  }
};

export default AirportActionCreators;
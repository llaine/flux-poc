import 'whatwg-fetch';

import AirportActionCreators from '../actions/AirportActionCreators';

const AIRPORTS_ROUTE = 'airports.json';
const TICKETS_ROUTE = 'tickets.json'

const AirCheapAPI = {
  /**
   * Simule l'appel AJAX, par récupérant un fichier JSON contenu dans le dossier
   * public.
   */
  fetchAirports() {
    fetch(AIRPORTS_ROUTE)
    .then((response) => response.json())
    .then((responseData) => {
      AirportActionCreators.fetchAirportsSuccess(responseData);
    })
    .catch((error) => {
      AirportActionCreators.fetchAirportsError(error);
    })
  },

  fetchTickets(origin, destination) {
    fetch(TICKETS_ROUTE)
    .then((response) => response.json())
    .then((responseData) => {
      AirportActionCreators.fetchTicketsSuccess(responseData);
    })
    .catch((error) => {
      AirportActionCreators.fetchTicketsError(error);
    })
  }
};


export default AirCheapAPI;
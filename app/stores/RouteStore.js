/**
 Store qui va garder l'état de la route que l'user choisit
 aka, l'origin et la destionation des inputs.
 */

import AppDispatcher from '../AppDispatcher';
import constants from '../constants';

import { MapStore } from 'flux/utils';

/**
 * Utilisation du MapStore plutôt que du reducer classique
 * pour permettre de retourner une paire key => value
 */
class RouteStore extends MapStore {
  reduce(state, action) {
    switch(action.type) {
      case constants.CHOOSE_AIRPORT: return state.set(action.target, action.code);
      default: return state;
    }
  }
}

export default new RouteStore(AppDispatcher);
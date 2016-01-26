/**
 * Les stores dans Flux, conservent l'état de l'app et "s'abonnent" aux dispatcher.
 * Ainsi, pour chaque action qui est dispatché tout les stores sont invoqués et seul ceux
 * concernant l'action vont changer leur etat et emit un evenement pour que les views soient re-render.
 *
 * Pour rappel : Tout les stores sont des boites noires et il n'y a pas de possibilité
 * d'insérer des données directement. On peut juste, récupère l'état global avec getter.
 */

import AppDispatcher from '../dispatchers/AppDispatcher';
import bankConstants from '../constants/constants';

import {ReduceStore} from 'flux/utils';

class BankBalanceStore extends ReduceStore {
  /**
   * L'état initial de l'application
   * @returns {number}
   */
  getInitialState() {
    return 0;
  }

  /**
   * La fonction reduce, qui
   * @param state
   * @param action
   * @returns {*}
   */
  reduce(state, action) {
    switch (action.type) {
      case bankConstants.CREATED_ACCOUNT:
        return 0;
        break;
      case bankConstants.DEPOSITED_INTO_ACCOUNT:
        return state + action.ammount;
        break;
      case bankConstants.WITHDREW_FROM_ACCOUNT:
        return state - action.ammount;
        break;
      default:
        return state;
    }
  }
}


export default new BankBalanceStore(AppDispatcher);
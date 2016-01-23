/**
 * Les stores dans Flux, conservent l'état de l'app et "s'abonnent" aux dispatcher.
 * Ainsi, pour chaque action qui est dispatché tout les stores sont invoqués et seul ceux
 * concernant l'action vont changer leur etat et emit un evenement pour que les views soient re-render.
 *
 * Pour rappel : Tout les stores sont des boites noires et il n'y a pas de possibilité
 * d'insérer des données directement. On peut juste, récupère l'état global avec getter.
 */

import { EventEmitter } from 'fbemitter';
import AppDispatcher from '../dispatchers/AppDispatcher';
import bankConstants from '../constants/constants';

const CHANGE_EVENT = 'change';
const _emitter = new EventEmitter();

let balance = 0;

const BankBalanceStore = {
  /**
   * Retourne l'état courant du store.
   * @returns {number}
   */
  getState() {
    return balance;
  },

  addListener(callback) {
    return _emitter.addListener(CHANGE_EVENT, callback);
  }
};

/**
 * Petite fonction pour éviter le boilerplate.
 */
const emitChange = () => _emitter.emit(CHANGE_EVENT);

// Le dispatcher de notre application.
BankBalanceStore.dispatchToken = AppDispatcher.register((action) => {
  switch (action.type) {
    case bankConstants.CREATED_ACCOUNT:
      balance = 0;
      emitChange();
      break;
    case bankConstants.DEPOSITED_INTO_ACCOUNT:
      balance = balance + action.ammount;
      emitChange();
      break;
    case bankConstants.WITHDREW_FROM_ACCOUNT:
      balance = balance - action.ammount;
      emitChange();
      break;
  }
});

export default BankBalanceStore;
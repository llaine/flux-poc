/**
 * Ce fichier contient les actions que l'utilisateur
 * peut effectuer dans l'application.
 * En l'occurence ici on est sur les features d'account. 
 */
import AppDispatcher from '../dispatchers/AppDispatcher';
import bankConstants from '../constants/constants';

const BankActions = {

  /**
   * Action de base, permettant de créer un compte
   * ayant une valeur vide.
   */
  createAccount() {
    AppDispatcher.dispatch({
      type: bankConstants.CREATED_ACCOUNT,
      amount: 0
    });
  },

  /**
   * Amount add in the account.
   * @param amount
   */
  depositIntoAccount(amount) {
    AppDispatcher.dispatch({
      type: bankConstants.DEPOSITED_INTO_ACCOUNT,
      amount
    });
  },

  /**
   * Amount to withdraw from the account
   * @param amount
   */
  withdrawFromAccount(amount) {
    AppDispatcher.dispatch({
      type: bankConstants.WITHDREW_FROM_ACCOUNT,
      amount
    });
  }
};

export default BankActions;
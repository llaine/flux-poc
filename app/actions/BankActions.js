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
   * @param ammount
   */
  depositIntoAccount(ammount) {
    AppDispatcher.dispatch({
      type: bankConstants.DEPOSITED_INTO_ACCOUNT,
      ammount
    });
  },

  /**
   * Amount to withdraw from the account
   * @param ammount
   */
  withdrawFromAccount(ammount) {
    AppDispatcher.dispatch({
      type: bankConstants.WITHDREW_FROM_ACCOUNT,
      ammount
    });
  }
};

export default BankActions;
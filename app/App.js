import React, { Component } from 'react';import {render} from 'react-dom';import {Container} from 'flux/utils';import BankBalanceStore from './stores/BankBalanceStore';import BankActions from './actions/BankActions';class App extends Component {  constructor() {    super(...arguments);    BankActions.createAccount();  }  /**   * Déspoer de l'argent sur le compte   */  deposit() {    BankActions.depositIntoAccount(Number(this.refs.ammount.value));    this.refs.ammount.value = '';  }  /**   * Retirer de l'argent du compte   */  withdraw() {    BankActions.withdrawFromAccount(Number(this.refs.ammount.value));    this.refs.ammount.value = '';  }  render(){    return (      <div>        <header>Flux Banking App</header>        <h1>Your balance is ${(this.state.balance).toFixed(2)}</h1>        <div className="atm">          <input type="text" placeholder="Enter ammount" ref="ammount"/>          <br/>          <button onClick={this.withdraw.bind(this)}>Withdraw</button>          <button onClick={this.deposit.bind(this)}>Deposit</button>        </div>      </div>    );  }}App.getStores = () => ([BankBalanceStore]);App.calculateState = (prevState) => ({  balance: BankBalanceStore.getState()});const AppContainer = Container.create(App);render(<AppContainer />, document.getElementById('root'));
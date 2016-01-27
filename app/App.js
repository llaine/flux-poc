import React, { Component } from 'react';
import { render } from 'react-dom';
import { Container } from 'flux/utils';

import Autosuggest from 'react-autosuggest';
import AirportStore from './stores/AirportStore';
import AirportActionCreators from './actions/AirportActionCreators';


class App extends Component {
  componentDidMount() {
    AirportActionCreators.fetchAirports();
  }

  /**
   * Fonction renvoyant un tableau de string formaté pour l'autosuggest.
   *
   * @param input
   * @param callback
   */
  getSuggestions(input, callback) {
    // Nettoie l'user input
    const escapedInput = input.trim().toLowerCase();
    const airportMatchRegex = new RegExp('\\b' + escapedInput, 'i');

    const suggestions = this.state.airports
        // On récupère les aéroports correspondant à l'user input
        .filter(airport => airportMatchRegex.test(airport.city))
        // Trie par ordre alphabétique
        .sort((airport1, airport2) => {
          return airport1.city.toLowerCase().indexOf(escapedInput) - airport2.city.toLowerCase().indexOf(escapedInput);
        })
        // On affiche uniquement es 7 premiers résultats
        .slice(0, 7)
        // Et on renvoie de manière formaté les suggestions.
        .map(airport => `${airport.city} - ${airport.country} (${airport.code}) `);

    callback(null, suggestions);
  }

  render() {
    return (
        <div>
          <header>
            <div className="header-brand">
              <img src="logo.png" height="35"/>
              <p>My Superb app using flux with async actions</p>
            </div>
            <div className="header-route">
              <Autosuggest id='origin'
                           suggestions={this.getSuggestions.bind(this)}
                           inputAttributes={{placeholder:'From'}} />

              <Autosuggest id='destination'
                           suggestions={this.getSuggestions.bind(this)}
                           inputAttributes={{placeholder:'To'}} />
            </div>
          </header>
        </div>
    )
  }
}

App.getStores = () => ([AirportStore]);
// Les props sont passés de cette manière au composant en fonction de l'état du store.
App.calculateState = (prevState) => ({
  airports: AirportStore.getState()
});

const AppContainer = Container.create(App);

render(<AppContainer />, document.getElementById('root'));

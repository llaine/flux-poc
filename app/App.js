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

  getSuggestions() {

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
                           inputAttributes={{placeholder:'From'}} />

              <Autosuggest id='destination'
                           inputAttributes={{placeholder:'To'}} />
            </div>
          </header>
        </div>
    )
  }
}

App.getStores = () => ([AirportStore]);
App.calculateState = (prevState) => ({
  airports: AirportStore.getState()
});

const AppContainer = Container.create(App);

render(<AppContainer />, document.getElementById('root'));

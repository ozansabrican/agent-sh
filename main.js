import Exponent from 'exponent';
import React from 'react';
import {
  NavigationExperimental,
} from 'react-native';

import Navigator from './src/navigator.js';

const {
  StateUtils: NavigationStateUtils,
} = NavigationExperimental;


class App extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      // This defines the initial navigation state.
      navigationState: {
        index: 0, // Starts with first route focused.
        routes: [{ key: 'Initial' }], // Starts with only one route.
      },
    };

    this._onNavigationChange = this._onNavigationChange.bind(this);
  }

  _onNavigationChange(type) {
    // Extract the navigationState from the current state:
    let {navigationState} = this.state;

    switch (type) {
      case 'push':
        // Push a new route, which in our case is an object with a key value.
        // I am fond of cryptic keys (but seriously, keys should be unique)
        let route = { key: ''};
        console.log(navigationState);
        switch (navigationState.routes[navigationState.index].key) {
          case 'Initial':
            route.key= 'Second';
            navigationState = NavigationStateUtils.push(navigationState, route);
            break;
          default:
            break;
        }

        // Use the push reducer provided by NavigationStateUtils
        break;

      case 'pop':
        // Pop the current route using the pop reducer.
        navigationState = NavigationStateUtils.pop(navigationState);
        break;
    }

    // NavigationStateUtils gives you back the same `navigationState` if nothing
    // has changed. We will only update state if it has changed.
    if (this.state.navigationState !== navigationState) {
      // Always use setState() when setting a new state!
      this.setState({ navigationState });
      // If you are new to ES6, the above is equivalent to:
      // this.setState({navigationState: navigationState});
    }
  }
  render() {
    return (
      <Navigator
        navigationState={this.state.navigationState}
        onNavigationChange={this._onNavigationChange}
        onExit={this._exit}
      />
    );
  }
}

Exponent.registerRootComponent(App);

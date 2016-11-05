import Exponent from 'exponent';
import React from 'react'
import { AppRegistry } from 'react-native'

import configureStore from './src/store/configureStore'
const store = configureStore()

import NavigationRootContainer from './src/containers/navRootContainer'
import { Provider } from 'react-redux'

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationRootContainer />
      </Provider>
    );
  }
}

Exponent.registerRootComponent(App);

import Exponent from 'exponent';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Navigator,
  TouchableHighlight,
} from 'react-native';
import HomeScene from './src/components/scenes/HomeScene';

//custom statelss component usage
export default CustomComponent = ({ name, style }) => {
  return (
    <Text style={style}>Hello {name}!</Text>
  );
}

export class Nav extends React.Component {
  render() {
    const routes = [
      { title: 'First Scene', index: 0 },
      { title: 'Second Scene', index: 1 },
    ];
    return (
      <Navigator
        initialRoute={routes[0]}
        initialRouteStack={routes}
        renderScene={(route, navigator) => {
            return <HomeScene name={route.title} navigator={navigator}/>
        }}
        style={{ flex: 1, padding: 100, backgroundColor: 'red' }}
        />
    );
  }
}

class App extends React.Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <HomeScene name={'route.title'}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex:60,
    alignSelf: 'stretch',
  },
  text: {
    flex:10,
    alignSelf: 'stretch',
    backgroundColor: 'yellow',
  },
  custom: {
    flex:30,
    alignSelf: 'stretch',
    textAlign: 'center',
    alignItems: 'center',
    color: 'green',
    backgroundColor: 'red',
  },
});

Exponent.registerRootComponent(App);

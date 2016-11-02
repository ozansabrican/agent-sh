import React from 'react';
import {
  StyleSheet,
  NavigationExperimental,
  View,
  Text,
  UIExplorerStateTitleMap,
  TouchableHighlight,
} from 'react-native';

import HomeScene from './components/scenes/HomeScene';
import InfoScene from './components/scenes/InfoScene';

const {
  CardStack: NavigationCardStack,
  Header: NavigationHeader,
} = NavigationExperimental;

export default class Navigator extends React.Component {

  // This sets up the methods (e.g. Pop, Push) for navigation.
  constructor(props, context) {
    super(props, context);

    this._onPushRoute = this.props.onNavigationChange.bind(null, 'push');
    this._onPopRoute = this.props.onNavigationChange.bind(null, 'pop');

    this._renderScene = this._renderScene.bind(this);
  }

  // Now we finally get to use the `NavigationCardStack` to render the scenes.
  render() {
    return (
      <NavigationCardStack
        onNavigateBack={this._onPopRoute}
        navigationState={this.props.navigationState}
        renderScene={this._renderScene}
        style={styles.navigator}
        renderHeader={(props) => {
          return (props.navigationState.index === 0 ? null :
            <NavigationHeader
              style={{backgroundColor: 'yellow'}}
              {...props}
              onNavigateBack={this._onPopRoute}
              renderTitleComponent={(props) => {
                return (
                  <NavigationHeader.Title  >
                    <Text style={{color: 'red'}}>
                      {props.scene.route.key}
                    </Text>
                  </NavigationHeader.Title>
                )
              }}
              renderLeftComponent={props => {
                return (
                  props.navigationState.index === 0 ? null :
                     <TouchableHighlight
                        style={styles.backButtonContainer}
                        onPress={this._onPopRoute}>
                      <Text style={styles.backButtonTitle}>
                        Back
                      </Text>
                    </TouchableHighlight>
                )
              }}
            />
          )
        }}
      />
    );
  }

  // Render a scene for route.
  // The detailed spec of `sceneProps` is defined at `NavigationTypeDefinition`
  // as type `NavigationSceneRendererProps`.
  // Here you could choose to render a different component for each route, but
  // we'll keep it simple.
  _renderScene(sceneProps) {
    const { navigationState } = sceneProps;
    const currentRoute = navigationState.routes[navigationState.index];
    console.log(currentRoute);
    return ( currentRoute.key === 'Second' ?
      <InfoScene
        route={sceneProps.scene.route}
        onPushRoute={this._onPushRoute}
        onPopRoute={this._onPopRoute}
        onExit={this.props.onExit}
      />
      :
      <HomeScene
        route={sceneProps.scene.route}
        onPushRoute={this._onPushRoute}
        onPopRoute={this._onPopRoute}
        onExit={this.props.onExit}
      />
    );
  }
}

const styles = StyleSheet.create({
  navigator: {
    flex: 1,
  },
  navbar: {
    height: 50,
    alignSelf: 'stretch',
    backgroundColor:'#0D47A1',
    borderBottomColor: '#48209A',
    borderBottomWidth: 1
  },
  backButtonContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  backButtonTitle: {
    alignSelf: 'center',
  }
});

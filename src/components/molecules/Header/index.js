import React from 'react';
import {
  BackAndroid,
  NavigationExperimental,
  TouchableHighlight,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native'

const {
  CardStack: NavigationCardStack,
  Header: NavigationHeader,
} = NavigationExperimental

export default class Header extends React.Component {
    render() {
        const {
            navigationState,
            _goBack,
        } = this.props;
          return (navigationState.index === 0 ? null :
            <NavigationHeader
              style={styles.navbar}
              {...this.props}
              onNavigateBack={this._onPopRoute}
              renderTitleComponent={(props) => {
                return (
                  <NavigationHeader.Title
                    style={{alignItems: 'flex-start'}}
                  >
                    <Text style={styles.title}>
                      {this.props.scene.route.key.toUpperCase()}
                    </Text>
                  </NavigationHeader.Title>
                )
              }}
              renderLeftComponent={props => {
                return (
                  navigationState.index === 0 ? null :
                     <TouchableHighlight
                        style={styles.backButtonContainer}
                        onPress={_goBack}>
                        <View style={styles.backButtonContainer}>
                          <Image
                              style={styles.image}
                              source={require(`../../../assets/back.png`)}
                          />
                          <Text style={styles.backButtonTitle}>
                            Back
                         </Text>
                        </View>
                    </TouchableHighlight>
                )
              }}
            />
          )
    }
}


const styles = StyleSheet.create({
  navigator: {
    flex: 1,
  },
  navbar: {
    height: 60,
    alignSelf: 'stretch',
    backgroundColor:'#2B2A32',
    borderBottomColor: '#48209A',
    borderBottomWidth: 1
  },
  title: {
    color: '#B1C6C9',
  },
  backButtonContainer: {
    flexDirection: 'row',
    paddingLeft: 5,
    paddingTop: 2,
  },
  image: {
    height: 15,
    width: 15,
  },
  backButtonTitle: {
    alignSelf: 'center',
    color: '#007AFF'
  }
});



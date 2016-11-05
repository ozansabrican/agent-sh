import React, { Component } from 'react'
import HomeScene from './scenes/HomeScene'
import InfoScene from './scenes/InfoScene'
import PersonalScene from './scenes/PersonalScene'
import WorkScene from './scenes/WorkScene'
import PassionScene from './scenes/PassionScene'
import PlacesScene from './scenes/PlacesScene'
import Header from './molecules/Header'

import {
  BackAndroid,
  NavigationExperimental,
} from 'react-native'

const {
  CardStack: NavigationCardStack,
} = NavigationExperimental

class NavRoot extends Component {
  constructor (props) {
    super(props)
    this._renderScene = this._renderScene.bind(this)
    this._handleBackAction = this._handleBackAction.bind(this)
  }
  componentDidMount () {
    BackAndroid.addEventListener('hardwareBackPress', this._handleBackAction)
  }
  componentWillUnmount () {
    BackAndroid.removeEventListener('hardwareBackPress', this._handleBackAction)
  }
  _renderScene (props) {
    const { route } = props.scene
    if (route.key === 'home') {
     return <HomeScene
              _handleNavigate={this._handleNavigate.bind(this)} />
    }
    if (route.key === 'info') {
     return (
         <InfoScene
            _goBack={this._handleBackAction.bind(this)}
            _handleNavigate={this._handleNavigate.bind(this)}
         />
     )
    }
    if (route.key === 'personal') {
     return (
         <PersonalScene
            _goBack={this._handleBackAction.bind(this)}
            _handleNavigate={this._handleNavigate.bind(this)}
         />
     )
    }
    if (route.key === 'places') {
     return (
         <PlacesScene
            _goBack={this._handleBackAction.bind(this)}
            _handleNavigate={this._handleNavigate.bind(this)}
         />
     )
    }
    if (route.key === 'work') {
     return (
         <WorkScene
            _goBack={this._handleBackAction.bind(this)}
            _handleNavigate={this._handleNavigate.bind(this)}
         />
     )
    }
    if (route.key === 'passion') {
     return (
         <PassionScene
            _goBack={this._handleBackAction.bind(this)}
            _handleNavigate={this._handleNavigate.bind(this)}
         />
     )
    }
  }
  _handleBackAction () {
    if (this.props.navigation.index === 0) {
      return false
    }
    this.props.popRoute()
    return true
  }
  _handleNavigate (action) {
    switch (action && action.type) {
      case 'push':
        this.props.pushRoute(action.route)
        return true
      case 'back':
      case 'pop':
        return this._handleBackAction()
      default:
        return false
    }
  }
  render () {
    return (
      <NavigationCardStack
        direction='vertical'
        navigationState={this.props.navigation}
        onNavigate={this._handleNavigate.bind(this)}
        renderScene={this._renderScene}
        renderHeader={(props) => (
            <Header
                {...props}
                _goBack={this._handleBackAction.bind(this)}
            />
        )}
        />)
   }
}

export default NavRoot
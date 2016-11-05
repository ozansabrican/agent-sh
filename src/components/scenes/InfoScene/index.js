import React from 'react';
import {
  StyleSheet,
  View,
  PixelRatio,
  ScrollView,
} from 'react-native';
import Row, { TYPE } from '../../atoms/Row';

const routes = {
  personal: {
    type: 'push',
    route: {
      key: 'personal',
      title: 'Personal Info'
    }
  },
  places: {
    type: 'push',
    route: {
      key: 'places',
      title: 'My Homes'
    }
  },
  work: {
    type: 'push',
    route: {
      key: 'work',
      title: 'My Work'
    }
  },
  passion: {
    type: 'push',
    route: {
      key: 'passion',
      title: 'My Passions'
    }
  },
}

export default class InfoScene extends React.Component {
  render() {
    const { _handleNavigate } = this.props;
    return (
      <ScrollView style={styles.scrollView}>
        <Row
          headline={`Who Am I?`}
          subline={`Little bit about me`}
          type={TYPE.PERSONAL}
          onPress={() => _handleNavigate(routes.personal)}
          />
        <Row
          headline={`Where I've called home?`}
          subline={`Places I've lived in`}
          type={TYPE.PLACES}
          onPress={() => _handleNavigate(routes.places)}
          />
        <Row
          headline={`Where I've Called in Sick`}
          subline={`Work work work work`}
          type={TYPE.WORK}
          onPress={() => _handleNavigate(routes.work)}
          />
        <Row
          headline={`What I eat, sleep, and breathe`}
          subline={`Things I am passionate about`}
          type={TYPE.PASSION}
          onPress={() => _handleNavigate(routes.passion)}
          />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    paddingTop: 64,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#327389',
  },
});

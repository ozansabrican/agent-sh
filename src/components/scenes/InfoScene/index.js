import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Navigator,
  TouchableHighlight,
  NavigationExperimental,
  PixelRatio,
  ScrollView,
} from 'react-native';
import Row, { TYPE } from '../../atoms/Row';

class TappableRow extends React.Component {
  render() {
    return (
      <TouchableHighlight
        style={styles.row}
        underlayColor="#D0D0D0"
        onPress={this.props.onPress}>
        <Text style={styles.buttonText}>
          {this.props.text}
        </Text>
      </TouchableHighlight>
    );
  }
}

export default class InfoScene extends React.Component {
  render() {
    return (
      <ScrollView style={styles.scrollView}>
        <Row
          headline={`Who Am I?`}
          subline={`Little bit about me`}
          type={TYPE.PERSONAL}
        />
        <Row
          headline={`Where I've called home?`}
          subline={`Places I've lived in`}
          type={TYPE.PLACES}
        />
        <Row
          headline={`Where I've Called in Sick`}
          subline={`Work work work work`}
          type={TYPE.WORK}
        />
        <Row
          headline={`What I eat, sleep, and breathe`}
          subline={`Things I am passionate about`}
          type={TYPE.PASSION}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  navigator: {
    flex: 1,
  },
  scrollView: {
    paddingTop: 64,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#327389',
  },
  row: {
    backgroundColor: '#B1C6C9',
    borderWidth: 1 / PixelRatio.get(),
    borderRadius: 10,
    borderColor: '#CDCDCD',
    flexDirection: 'row',
    height: 90,
  },
  leftContainer: {
    flex: 2,
    justifyContent: 'center',
    paddingTop: 5,
    alignItems: 'center',
  },
  middleContainer: {
    flex: 6,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 10,
  },
  arrowContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingTop: 10,
    paddingRight: 15,
  },
  image: {
    width: 20,
    height: 15,
  },
  leftImage: {
    width: 40,
    height: 40,
  },
  rowText: {
    fontSize: 17,
  },
  copy: {
    fontSize: 17,
    fontWeight: '500',
  },
  copySmall: {
    fontSize: 14,
  }
});

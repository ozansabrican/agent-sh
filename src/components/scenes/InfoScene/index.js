import React from 'react';
import {
  StyleSheet,
  View,
  PixelRatio,
  ScrollView,
} from 'react-native';
import Row, { TYPE } from '../../atoms/Row';

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
  scrollView: {
    paddingTop: 64,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#327389',
  },
});

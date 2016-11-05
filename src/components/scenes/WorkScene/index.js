import React from 'react';
import {
  StyleSheet,
  ScrollView,
  Image,
  Text,
} from 'react-native';

export default class WorkScene extends React.Component {
  render() {
    return (
      <ScrollView style={styles.scrollView}>
        <Image
            style={styles.company}
            source={require('../../../assets/moni.png')}
        />
        <Text style={styles.text}>
            Worked for Monitise MEA as a native iOS software developer for nearly 1.5 year
        </Text>
        <Image
            style={styles.company}
            source={require('../../../assets/costa.jpeg')}
        />
        <Text style={styles.text}>
            Currently working in a Digital Unit for Costa Crociere group to develop and maintain an online travel agency website seetours.de
        </Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#327389',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
      fontSize: 20,
      paddingBottom: 20,
  },
  company: {
    height: 100,
    borderRadius: 50,
    width: 100,
    alignSelf: 'center',
    marginBottom: 10,
  }
});

import React from 'react';
import {
  StyleSheet,
  ScrollView,
  Image,
  Text,
} from 'react-native';

export default class PassionScene extends React.Component {
  render() {
    return (
      <ScrollView style={styles.scrollView}>
        <Image
            style={styles.image}
            source={require('../../../assets/basketball.jpeg')}
        />
        <Text style={styles.text}>
            I've been playing basketball since forever. I love this game.
        </Text>
        <Image
            style={styles.image}
            source={require('../../../assets/react.png')}
        />
        <Text style={styles.text}>
          I've been writing ReactJS code for a year now. I love everything about it.
        </Text>
        <Image
            style={styles.image}
            source={require('../../../assets/snowboard.jpeg')}
        />
        <Text style={styles.text}>
            I've learned snowboarding during Erasmus 3 years ago. Since then I've been in love with snow!
        </Text>
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
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    alignSelf: 'stretch',
    width: 300,
    paddingBottom: 10,
  },
  image: {
    height: 100,
    borderRadius: 50,
    width: 100,
    alignSelf: 'center',
    marginBottom: 10,
  }
});

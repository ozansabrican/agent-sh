import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
} from 'react-native';
import RoundImage from '../../atoms/RoundImage'

export default class PersonalScene extends React.Component {
  render() {
    return (
      <ScrollView style={styles.scrollView}>
        <View style={styles.headContainer}>
            <RoundImage />
            <Text style={styles.headline}>Sabrican Ozan</Text>
        </View>
        <View style={styles.from}>
            <Text style={styles.headline}>From Turkey</Text>
            <Image
                style={styles.flag}
                source={require('../../../assets/tr.jpg')}
            />
        </View>
        <View style={styles.years}>
            <Text style={styles.big}>
               25
            </Text>
            <Text style={styles.small}>
               years old
            </Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#327389',
    justifyContent: 'center',
  },
  years: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  headContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 15,
  },
  flag: {
      width: 150,
      height: 100,
  },
  from: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    justifyContent: 'space-around',
    marginBottom: 15,
  },
  headline: {
      fontSize: 18,
      paddingLeft: 5,
  },
  big: {
      fontSize: 30,
  },
  small: {
      fontSize: 18,
      alignSelf: 'flex-end'
  }
});

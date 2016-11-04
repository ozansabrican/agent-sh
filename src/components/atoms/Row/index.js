import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  PixelRatio,
} from 'react-native';
export const TYPE = {
    PERSONAL: require(`../../../assets/sasa.png`),
    PLACES: require(`../../../assets/places.png`),
    WORK: require(`../../../assets/coding.png`),
    PASSION: require(`../../../assets/fire.png`),
};

export default class Row extends React.Component {
  render() {
    const { headline, subline, type} = this.props;
    return (
        <View
            style={styles.row}
            onPress={this.props.onPushRoute}
        >
            <View style={styles.leftContainer}>
            <Text style={styles.buttonText}>
                <Image
                style={styles.leftImage}
                // this should be improved
                source={type}
                />
            </Text>
            </View>
            <View style={styles.middleContainer}>
            <Text style={styles.copy}>
                {headline}
            </Text>
            <Text style={styles.copySmall}>
                {subline}
            </Text>
            </View>
            <View style={styles.arrowContainer}>
            <Text style={styles.buttonText}>
                <Image
                style={styles.image}
                source={require('../../../assets/next.png')}
                />
            </Text>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    backgroundColor: '#B1C6C9',
    borderWidth: 1 / PixelRatio.get(),
    borderRadius: 10,
    borderColor: '#CDCDCD',
    flexDirection: 'row',
    height: 90,
    marginBottom: 10,
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
  copy: {
    fontSize: 17,
    fontWeight: '500',
  },
  copySmall: {
    fontSize: 14,
  }
});

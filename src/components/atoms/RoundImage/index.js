import React from 'react';
import {
  StyleSheet,
  Image,
} from 'react-native';


export default class RoundImage extends React.Component {
    render() {
        return (
            <Image
                style={styles.image}
                source={require('../../../assets/sabrican.jpg')}
            />
        );
    }
}


const styles = StyleSheet.create({
    image: {
        height: 150,
        borderRadius: 75,
        width: 150
    },
});


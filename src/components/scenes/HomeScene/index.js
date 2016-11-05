import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableHighlight,
    PixelRatio,
    View,
    StatusBar,
    Image,
} from 'react-native';
import RoundButton from '../../atoms/RoundButton'

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
const route = {
    type: 'push',
    route: {
        key: 'about',
        title: 'About'
    }
}
export default class HomeScene extends React.Component {
    render() {
        const {_handleNavigate} = this.props;
        return (
            <View style={styles.view}>
                <StatusBar hidden={true} />
                <View style={styles.headlineContainer}>
                    <Text style={styles.headline}>
                        Welcome to this awesome app
            </Text>
                </View>
                <View style={styles.imageContainer}>
                    <Text>
                        This is me =>
            </Text>
                    <Image
                        style={styles.image}
                        source={require('../../../assets/sabrican.jpg')}
                        />
                </View>
                <View style={styles.buttonContainer}>
                    <View style={{ flex: 1 }} />
                    <RoundButton
                        text={`Let's start!`}
                        underlayColor='#50433B'
                        onPress={() => _handleNavigate(route)}
                        buttonStyle={styles.roundButton}
                        textStyle={styles.buttonText}
                        />
                    <View style={{ flex: 1 }} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 10,
        backgroundColor: '#327389',
        justifyContent: 'center',
        // backgroundColor: '#FAE0AF',
    },
    headlineContainer: {
        flex: 3,
        flexDirection: 'column-reverse',
        alignItems: 'center',
    },
    headline: {
        color: 'white',
        fontSize: 22,
        marginBottom: 20,
    },
    imageContainer: {
        flex: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        height: 150,
        borderRadius: 75,
        width: 150
    },
    buttonContainer: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    roundButton: {
        flex: 8,
        alignSelf: 'center',
        height: 50,
        borderRadius: 75,
        width: 150,
    },
    buttonText: {
        color: 'white',
    },
});

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
import RoundImage from '../../atoms/RoundImage'

const route = {
    type: 'push',
    route: {
        key: 'info',
        title: 'Info'
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
                        Hello!
                    </Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.description}>
                        Welcome to my first ExponentJS App! This app is all about me.
                    </Text>
                    <Text style={styles.description}>
                        I hope you all like it!
                    </Text>
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
    },
    headlineContainer: {
        flex: 3,
        flexDirection: 'column-reverse',
        alignItems: 'center',
    },
    headline: {
        color: 'white',
        fontSize: 30,
        marginBottom: 20,
    },
    description: {
        color: 'white',
        width: 300,
        textAlign: 'center',
        fontSize: 22,
    },
    container: {
        flex: 5,
        flexDirection: 'column',
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

import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
} from 'react-native';


export default class RoundButton extends React.Component {
    static propTypes = {
        text: React.PropTypes.string,
        buttonStyle: React.PropTypes.any,
        textStyle: React.PropTypes.any,
        underlayColor: React.PropTypes.string,
        onPress: React.PropTypes.func,
    }

    static defaultProps = {
        text: '',
        buttonStyle: {},
        textStyle: {},
        underlayColor: '#50433B',
        onPress: () => {},
    }
    render() {
        const {
            text,
            buttonStyle,
            textStyle,
            underlayColor,
            onPress
        } = this.props
        return (
            <TouchableHighlight
                underlayColor={underlayColor}
                style={[buttonStyle,styles.roundButton]}
                onPress={onPress}>
                <Text style={[textStyle, styles.buttonText]}>
                    {text}
                </Text>
            </TouchableHighlight>
        );
    }
}


const styles = StyleSheet.create({
    roundButton: {
        backgroundColor: '#2B2A32',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
    },
});


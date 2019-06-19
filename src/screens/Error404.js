import React, { Component } from 'react';
import {
    Text,
    View,
    Button,
    Image,
    StyleSheet,
} from 'react-native';
import { Navigation } from 'react-native-navigation';

class Error404 extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../img/noInternet.png')} style={{}}/>
                <Text>Service's not Avalible</Text>
                <Button onPress={() => {Navigation.pop(this.props.componentId)}}  title='Back'/>
            </View>
        )
    }
}

export default Error404;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    }
});
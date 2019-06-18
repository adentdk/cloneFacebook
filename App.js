import React, { Component } from 'react';
import {View, Text,Button} from 'react-native';
import { Navigation } from 'react-native-navigation';

class App extends Component {
    goToScreen = (screenName) => {
        Navigation.push(this.props.componentId, {
          component : {
            name: screenName
          }
        });
    }
    render(){
        return(
            <View>
                <Text>Loading</Text>
                <Button onPress={() => this.goToScreen('Login')} title={'login'} />
            </View>
        );
    }
}

export default App;
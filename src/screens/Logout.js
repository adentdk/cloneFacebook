import React, {Component}  from 'react';
import {
    View,
    Text,
    AsyncStorage
} from 'react-native';
import {Navigation} from 'react-native-navigation';

class Logout extends Component {
    constructor(){
        super();
        AsyncStorage.clear();
    }
    componentDidMount(){
        Navigation.setStackRoot(this.props.componentId, [
            {
            component: {
                  name: 'Login'
            }
          }
        ]);
    }
    render() {
        return(
            <View>
                <Text>Logout</Text>
            </View>
        )
    }
}

export default Logout;
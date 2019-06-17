import React, {Component} from 'react';
import { StyleSheet, Button, Text } from 'react-native';

class HeaderMenu extends Component{
    render(){
        return(
            <View style={style.bg}>
                <Button onPress={() => this.navigate('Halaman1')} title="halaman1" />
                <Button onPress={() => this.navigate('Halaman2')} title="halaman2" />
                <Button onPress={() => this.navigate('Halaman3')} title="halaman3" />        
          </View>
        )
    }
}

export default HeaderMenu;

const style = StyleSheet.create({
    bg:{
        backgroundColor: 'white',
        elevation:1,
    },
})
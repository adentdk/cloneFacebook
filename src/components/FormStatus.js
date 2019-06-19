import React, {Component} from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Image,
} from 'react-native';
class FormStatus extends Component{
    render() {
        let user = require('../img/user.png');
        let photo = require('../img/Photo.png');
        return(
            <View style={styles.formStatus}>
                <Image style={styles.profileFoto} source={user}/>
                <TextInput placeholder="What's on your mind?" placeholderTextColor="#666" style={[styles.textInput]}/>
                <View style={{marginLeft:5}}>
                <Image style={{width:30,height:30}} source={photo}/>
                <Text style={{fontSize:12}}>Photo</Text>
                </View>
            </View>
        );
    }
}

export default FormStatus;

const styles = StyleSheet.create({
  
  formStatus: {
    height: 75,
    padding: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    paddingBottom: 10,
    flexDirection: 'row',
  },
      
  profileFoto: {
    width: 45,
    height:45,
    borderRadius: 25,
    marginLeft: 0,
    marginRight: 5,
  },
  textInput: {
    borderWidth: 1,
    height: 40,
    width: '100%',
    borderColor: '#aaaaaa',
    borderRadius: 20,
    maxWidth:'60%',
    color:'#111'
  },   
})
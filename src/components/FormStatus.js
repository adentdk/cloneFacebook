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
                <Image style={styles.icon} source={photo}/>
                <Text style={{fontSize:12}}>Photo</Text>
                </View>
            </View>
        );
    }
}

export default FormStatus;

const styles = StyleSheet.create({
  
  formStatus: {
    height: 50,
    padding: 0,
    width: '100%',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    paddingBottom: 0,
    flexDirection: 'row',
    padding:5,
  },
      
  profileFoto: {
    width: 40,
    height:40,
    borderRadius: 20,
    marginLeft: 0,
    marginRight: 5,
  },
  icon: {
    marginLeft:5,
    width:20,
    height:20
  },

  textInput: {
    borderWidth: 1,
    height: 35,
    width: "100%",
    borderColor: '#aaaaaa',
    borderRadius: 20,
    maxWidth:'60%',
    color:'#111'
  },   
})
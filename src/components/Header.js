import React, {Component} from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

class Header extends Component {
    render() {
        
    let camera = require('../img/camera.png');
    let messenger = require('../img/messenger.png');


        return(
        <View style={styles.header}>
          <View style={styles.camera}>
            <TouchableOpacity>
              <Image source={camera} style={styles.icon}/>
            </TouchableOpacity>
          </View>
          <View style={styles.search}>
            <TextInput style={[styles.textInput]} placeholder="Search" placeholderTextColor="#dedede" underlineColorAndroid="#eee"/>
          </View>  
          <View style={styles.messenger}>
            <TouchableOpacity>
              <Image source={messenger} style={styles.icon}/>
            </TouchableOpacity>
          </View>
        </View>
        );
    }
}

export default Header;

const styles = StyleSheet.create({

  
  header: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#3B5999',
  },
  
  icon: {
    width:20,
    height:20,
  },
  camera: {
    flex: 1,
    alignItems: 'center',
  },

  search: {
    flex: 8,
  },

  messenger: {
    flex: 1,
    alignItems: 'center',
  },

  textInput: {
    height: 40,
    width: '100%',
  }, 
})
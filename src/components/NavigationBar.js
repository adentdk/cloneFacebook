import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';
import {Navigation} from 'react-native-navigation';

class NavigationBar extends Component{

  
    goToScreen = (screenName) => {
      try{
          Navigation.push(this.props.componentId, {
                component : {
                  name: screenName
                }
              });
       } catch(e){
         console.log(e);
       } 
    }
        
    render(){
        let menu = require('../img/list.png');
        let newsFeed = require('../img/newsFeed.png');
        let friends = require('../img/friends.png');
        let fbVideo = require('../img/fbVideo.png');
        let userIcon = require('../img/userIcon.png');
        let notification = require('../img/notification.png');
        return(
        <View style={styles.navigation}>
          <View style={styles.menu}>
            <TouchableOpacity onPress={() => this.goToScreen('Home')}>
              <Image source={newsFeed} style={styles.icon}/>
            </TouchableOpacity>
          </View>
          <View style={styles.menu}>
            <TouchableOpacity onPress={() => this.goToScreen('Home')}>
              <Image source={friends} style={styles.icon}/>
            </TouchableOpacity>                                           
          </View>
          <View style={styles.menu}>
            <TouchableOpacity onPress={() => this.goToScreen('Home')}>            
              <Image source={fbVideo} style={styles.icon}/>
            </TouchableOpacity>
          </View>
          <View style={styles.menu}>                                           
            <TouchableOpacity onPress={() => this.goToScreen('Home')}>
              <Image source={userIcon} style={styles.icon}/>
            </TouchableOpacity>                                           
          </View>
          <View style={styles.menu}>                                           
            <TouchableOpacity onPress={() => this.goToScreen('Home')}>
              <Image source={notification} style={styles.icon}/>
            </TouchableOpacity>                                           
          </View>
          <View style={styles.menu}>
            <TouchableOpacity onPress={() => this.goToScreen('Menu')}>
              <Image source={menu} style={styles.icon}/>
            </TouchableOpacity>                                           
          </View>
        </View>
        )
    }
}

export default NavigationBar;

const styles = StyleSheet.create({
    navigation: {
        height:50,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        borderBottomColor: '#bebebe',
        borderBottomWidth: 1,
      },
      menu: {
        flex: 1,
        alignItems: 'center',
      },
      icon: {
        width:20,
        height:20,
      },
});
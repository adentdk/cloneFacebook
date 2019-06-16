import React, {Component} from 'react';
import {
  Text,
  TextInput,
  Button,
  View,
  StyleSheet,
  Image,
} from 'react-native';

class News extends Component {
  render(){
    let camera = require('../img/camera.png');
    let messenger = require('../img/messenger.png');
    let newsFeed = require('../img/newsFeed.png');
    let  friends = require('../img/friends.png');
    let notification = require('../img/notification.png');
    let menu = require('../img/list.png');

    return (
      <View style={styles.container}>

        <View style={styles.header}>
          <View style={styles.camera}>
            <Image source={camera} style={styles.icon}/>
          </View>
          <View style={styles.search}>
            <TextInput style={styles.textInput} placeholder="search something"/>
          </View>
          <View style={styles.messenger}>
            <Image source={messenger} style={styles.icon}/>
          </View>
        </View>

        <View style={styles.navigation}>
          <View style={styles.newsFeed}>
            <Image source={newsFeed} style={styles.icon}/>
          </View>
          <View style={styles.friends}>
            <Image source={friends} style={styles.icon}/>
          </View>
          <View style={styles.notification}>
            <Image source={notification} style={styles.icon}/>
          </View>
          <View style={styles.menu}>
            <Image source={menu} style={styles.icon}/>
          </View>
        </View>

        <View style={styles.formStatus}>
          <TextInput placeholder="what's on your mind?" style={styles.textInput}/>
        </View>

        <View style={styles.story}>
          <View style={styles.storyItems}></View>
          <View style={styles.storyItems}></View>
          <View style={styles.storyItems}></View>
        </View>

        <View style={styles.content}>
        </View>
      </View>
    );
  }
}

export default News;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aaaaaa',
  },
  header: {
    flex : 2,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#3B5999',
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


  navigation: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#ffffff',
  },
  newsFeed: {
    flex: 1,
    alignItems: 'center',
  },
  friends: {
    flex: 1,
    alignItems: 'center',
  },
  notification: {
    flex: 1,
    alignItems: 'center',
  },
  menu: {
    flex: 1,
    alignItems: 'center',
  },

  formStatus: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    paddingBottom: 10,
  },

  story: {
    flex: 4,
    borderColor: '#aaaaaa',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    paddingBottom: 10,
  },
  storyItems: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#3B5999',
  },

  content: {
    flex: 8,
    borderColor: '#aaaaaa',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },


  textInput: {
    borderWidth: 1,
    height: 40,
    width: '100%',
    borderColor: '#aaaaaa',
    borderRadius: 20,
  }, 
  icon: {
    width:20,
    height:20,
  },
});
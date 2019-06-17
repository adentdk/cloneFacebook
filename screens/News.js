import React, {Component} from 'react';
import {
  Text,
  TextInput,
  Button,
  View,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';

class News extends Component {
  render(){
    let camera = require('../img/camera.png');
    let messenger = require('../img/messenger.png');
    let newsFeed = require('../img/newsFeed.png');
    let friends = require('../img/friends.png');
    let notification = require('../img/notification.png');
    let menu = require('../img/list.png');
    let user = require('../img/user.png');
    let arkademy = require('../img/arkademy.jpg');
    let world = require('../img/world.png');
    let newsFeed1 = require('../img/newsFeed1.jpg');
    return (
      <View style={styles.container}>

        <View style={styles.header}>
          <View style={styles.camera}>
            <Image source={camera} style={styles.icon}/>
          </View>
          <View style={styles.search}>
            <TextInput style={styles.textInput} placeholder="Search" placeholderTextColor="#dedede"/>
          </View>
          <View style={styles.messenger}>
            <Image source={messenger} style={styles.icon}/>
          </View>
        </View>

        <View style={styles.navigation}>
          <View style={styles.menu}>
            <Image source={newsFeed} style={styles.icon}/>
          </View>
          <View style={styles.menu}>
            <Image source={friends} style={styles.icon}/>
          </View>
          <View style={styles.menu}>
            <Image source={notification} style={styles.icon}/>
          </View>
          <View style={styles.menu}>
            <Image source={menu} style={styles.icon}/>
          </View>
        </View>

        <ScrollView>

          <View style={styles.formStatus}>
            <Image style={styles.profileFoto} source={user}/>
            <TextInput placeholder="what's on your mind?" style={[styles.textInput,{maxWidth:'80%'}]}/>
          </View>

          <ScrollView horizontal={true}>
            <View style={styles.story}>
              <View style={styles.storyItems}></View>
              <View style={styles.storyItems}></View>
              <View style={styles.storyItems}></View>
              <View style={styles.storyItems}></View>
            </View>
          </ScrollView>

          <View style={styles.newsFeed}>
            <View style={styles.newsFeedItems}>
              <View style={styles.newsFeedItemsHeader}>
                <Image source={arkademy} style={[styles.profileFoto]}/>
                <View>
                  <Text style={[styles.textBold,{marginTop:6,minWidth:'70%'}]}>Arkademy</Text>
                  <Text>2 hrs &bull; <Image source={world} style={{width:10,height:10,borderRadius:5}}/></Text>
                </View>
                <Text style={{marginTop:12}}>&bull; &bull; &bull;</Text>
              </View>
              <View style={styles.newsFeedItemsBody}>
                <Text>Bootcamp hari ketiga !</Text>
                <Image source={newsFeed1} style={{maxWidth: '100%',maxHeight:200}}/>
              </View>
              <View style={styles.newsFeedItemsFooter}>
                <Text>Footer</Text>
              </View>
            </View>
          </View>
          </ScrollView>
    </View>        
    );
  }
}

export default News;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#dedede',
  },
  header: {
    height: 50,
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
    height:50,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#ffffff',
  },
  menu: {
    flex: 1,
    alignItems: 'center',
  },

  formStatus: {
    height: 55,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    paddingBottom: 10,
    flexDirection: 'row',
    marginTop: 1,
  },

  story: {
    height: 170,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    paddingBottom: 10,
    marginTop: 7,
  },
  storyItems: {
    backgroundColor: '#bebebe',
    width: 100,
    height: 150,
    marginRight: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#3B5999',
  },

  newsFeed: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginTop: 7,
  },
  newsFeedItems: {
    flexDirection: 'column',
    justifyContent:'flex-start',
  },
  newsFeedItemsHeader: {
    flexDirection: 'row',
  },
  newsFeedItemsBody: {
    maxHeight:'100%',
    padding:10,
  }, 


  textBold:{
    fontWeight: 'bold',
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

  profileFoto: {
    width: 50,
    height:50,
    borderRadius: 25,
    marginLeft: 5,
    marginRight: 5,
  },
});
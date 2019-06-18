import React, {Component} from 'react';
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Navigation } from 'react-native-navigation';


class News extends Component {

  constructor(){
    super();
    this.state = {
      status : require('../data/story.json'),
      newsFeed : require('../data/newsFeed.json'),
    }
  }
  
  goToScreen = (screenName) => {
    Navigation.push(this.props.componentId, {
      component : {
        name: screenName
      }
    });
  }
  render(){
    let camera = require('../img/camera.png');
    let messenger = require('../img/messenger.png');
    let newsFeed = require('../img/newsFeed.png');
    let friends = require('../img/friends.png');
    let fbVideo = require('../img/fbVideo.png');
    let userIcon = require('../img/userIcon.png');
    let notification = require('../img/notification.png');
    let menu = require('../img/list.png');
    let user = require('../img/user.png');
    let photo = require('../img/Photo.png');
    let arkademy = require('../img/arkademy.jpg');
    let world = require('../img/world.png');
    let newsFeed1 = require('../img/newsFeed1.jpg');
    let like = require('../img/like.png');
    let likeAlt = require('../img/likeAlt.png');
    let commentAlt = require('../img/commentAlt.png');
    let shareAlt = require('../img/shareAlt.png');

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.camera}>
            <TouchableOpacity onPress={() => this.goToScreen('PageNotFound')}>
              <Image source={camera} style={styles.icon}/>
            </TouchableOpacity>
          </View>
          <View style={styles.search}>
            <TextInput style={[styles.textInput,{borderRadius:0, borderWidth:0}]} placeholder="Search" placeholderTextColor="#dedede" underlineColorAndroid="#eee"/>
          </View>
          <View style={styles.messenger}>
            <TouchableOpacity onPress={() => this.goToScreen('PageNotFound')}>
              <Image source={messenger} style={styles.icon}/>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.navigation}>
          <View style={styles.menu}>
            <TouchableOpacity onPress={() => this.goToScreen('NewsFeed')}>
              <Image source={newsFeed} style={styles.icon}/>
            </TouchableOpacity>
          </View>
          <View style={styles.menu}>
            <TouchableOpacity onPress={() => this.goToScreen('PageNotFound')}>
              <Image source={friends} style={styles.icon}/>
            </TouchableOpacity>                                           
          </View>
          <View style={styles.menu}>
            <TouchableOpacity onPress={() => this.goToScreen('PageNotFound')}>            
              <Image source={fbVideo} style={styles.icon}/>
            </TouchableOpacity>
          </View>
          <View style={styles.menu}>                                           
            <TouchableOpacity onPress={() => this.goToScreen('PageNotFound')}>
              <Image source={userIcon} style={styles.icon}/>
            </TouchableOpacity>                                           
          </View>
          <View style={styles.menu}>                                           
            <TouchableOpacity onPress={() => this.goToScreen('PageNotFound')}>
              <Image source={notification} style={styles.icon}/>
            </TouchableOpacity>                                           
          </View>
          <View style={styles.menu}>
            <TouchableOpacity onPress={() => this.goToScreen('PageNotFound')}>
              <Image source={menu} style={styles.icon}/>
            </TouchableOpacity>                                           
          </View>
        </View>

        <ScrollView>
          <View style={styles.formStatus}>
            <Image style={styles.profileFoto} source={user}/>
            <TextInput placeholder="What's on your mind?" placeholderTextColor="#666" style={[styles.textInput,{maxWidth:'60%',color:'#111'}]}/>
            <View style={{marginLeft:5}}>
              <Image style={{width:30,height:30}} source={photo}/>
              <Text style={{fontSize:12}}>Photo</Text>
            </View>
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
                  <Text style={{fontSize:12}}>2 hrs &bull; <Image source={world} style={{width:10,height:10,borderRadius:5}}/></Text>
                </View>
                <Text style={{marginTop:12}}>&bull; &bull; &bull;</Text>
              </View>
              <View style={styles.newsFeedItemsBody}>
                <Text>Bootcamp hari ketiga !</Text>
                <Image source={newsFeed1} style={{maxWidth: '100%', maxHeight:200}}/>
                <Text style={{fontSize:12}}><Image source={like} style={{height:15,width:15}} />12,000</Text>
              </View>
              <View style={styles.newsFeedItemsFooter}>
                <View style={{flex:1,flexDirection:'row',padding:10,justifyContent:"center"}}>
                  <Image source={likeAlt} style={{width:20,height:20}}/>
                  <Text style={{fontSize:12,marginTop:2,marginLeft:2}}>Like</Text>
                </View>
                <View style={{flex:1,flexDirection:'row',padding:10,justifyContent:"center"}}>
                  <Image source={commentAlt} style={{width:20,height:20}}/>
                  <Text style={{fontSize:12,marginTop:2,marginLeft:2}}>Comment</Text>
                </View>
                <View style={{flex:1,flexDirection:'row',padding:10,justifyContent:"center"}}>
                  <Image source={shareAlt} style={{width:20,height:20}}/>
                  <Text style={{fontSize:12,marginTop:2,marginLeft:2}}>Share</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={{height:100}}>
            <Text>&nbsp;</Text>
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
    borderBottomColor: '#bebebe',
    borderBottomWidth: 1,
  },
  menu: {
    flex: 1,
    alignItems: 'center',
  },

  formStatus: {
    height: 75,
    padding: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    paddingBottom: 10,
    flexDirection: 'row',
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
    padding:10,
  },
  newsFeedItemsHeader: {
    flexDirection: 'row',
  },
  newsFeedItemsBody: {
    maxHeight: 255,
    paddingBottom:0,
  }, 
  newsFeedItemsFooter: {
    flexDirection:'row',
    borderTopWidth:1,
    borderTopColor:'#bebebe',
    height:100,
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
    width: 45,
    height:45,
    borderRadius: 25,
    marginLeft: 0,
    marginRight: 5,
  },
});
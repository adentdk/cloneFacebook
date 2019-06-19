import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import { Navigation } from 'react-native-navigation';

import Header from '../components/Header';
import NavigationBar from '../components/NavigationBar';
import FormStatus from '../components/FormStatus';


class NewsFeeds extends Component {

  constructor(){
    super();
    this.state = {
      story : require('../data/story.json'),
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
    let arkademy = require('../img/arkademy.jpg');
    let world = require('../img/world.png');
    let newsFeed1 = require('../img/newsFeed1.jpg');
    let like = require('../img/like.png');
    let likeAlt = require('../img/likeAlt.png');
    let commentAlt = require('../img/commentAlt.png');
    let shareAlt = require('../img/shareAlt.png');

    const data = this.state.story.map(function(item, index){
      return (
        <View style={styles.story} key={index}>
          <View style={styles.storyItems}>
            <Image source={ item.statusFoto } style={styles.storyFoto} />
            <Image source={ item.profileFoto } style={[styles.profileFoto,styles.storyProfileFoto]}/>
            <Text style={styles.storyTitle}>{item.name}</Text>
          </View>
        </View>
      );
    });
    return (
      <View style={styles.container}>

        <Header/>
        <NavigationBar/>

        <ScrollView>

          <FormStatus/>

          <ScrollView horizontal={true}>
            {data}
          </ScrollView>

          <View style={styles.newsFeed}>

            <View style={styles.newsFeedItems}>
              <View style={styles.newsFeedItemsHeader}>
                <Image source={arkademy} style={styles.profileFoto}/>
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

          <View style={{height:100}}/>

        </ScrollView>

      </View>        
    );
  }
}

export default NewsFeeds;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#dedede',
  },
  story: {
    height: 210,
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
    height: 160,
    marginRight: 5,
    borderRadius: 10,
    position: 'relative',
  },
  storyProfileFoto: {
    position: 'absolute',
    top:5,
    left:5,
  },
  storyFoto: {
    width: 100,
    height: 160,
    marginRight: 5,
    borderRadius: 10,
    position: 'absolute',
    left:0,
    top:0,
    right:0,
    bottom:0,
  },
  storyTitle: {
    color: '#bebebe',
    position: 'absolute',
    bottom:5,
    left:5,
    shadowColor: 'rgba(0,0,0,0.7)',
    shadowRadius: 1,
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
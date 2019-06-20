import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
} from 'react-native';
import { Item } from 'native-base';

class NewsFeed extends Component{
    render()
    {
        return(
            <View>
              {
                this.props.data.map(function(item, index){
                  return(
                      <View style={styles.newsFeed}  key={index}>
      
                        <View style={styles.newsFeedItems}>
      
                          <View style={styles.newsFeedItemsHeader}>
                            <View style={{flex:2}}>
                              <Image source={{uri : item.profileFoto }} style={styles.profileFoto}/>
                            </View>
                            <View style={{flex:8}}>
                              <Text style={[styles.textBold,{marginLeft:4}]}>{item.name}</Text>
                              <Text style={{marginLeft:4}}>{item.timestamp} &bull; <Image source={require('../img/world.png')} style={styles.bullet}/></Text>
                            </View>
                            <View style={{flex:1}}>
                              <Text>&bull; &bull; &bull;</Text>
                            </View>
      
                          </View>
                          
                          <View style={styles.newsFeedItemsBody}>
      
                            <Text>{item.content}</Text>
                            
                            <Image source={{uri : item.foto}} style={styles.statusFoto}/>
                            
                            <Text>
                                <Image source={require('../img/like.png')} style={{height:15,width:15}} />
                                {item.like + item.super + item.sad + item.lol + item.angry}
                            </Text>
                          </View>
                          <View style={styles.newsFeedItemsFooter}>
                            <View style={styles.buttonFooter}>
                              <Image source={require('../img/likeAlt.png')} style={styles.icon}/>
                            </View>
                            <View style={styles.buttonFooter}>
                              <Image source={require('../img/commentAlt.png')} style={styles.icon}/>   
                            </View>
                            <View style={styles.buttonFooter}>
                              <Image source={require('../img/shareAlt.png')} style={styles.icon}/>
                            </View>
                          </View>
                        </View>
                      </View>
                  )
                })
              }
            </View>
        )
    }
}

export default NewsFeed;

const styles = StyleSheet.create({
    newsFeed: {
    flexDirection: 'column',
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
	height:40,
  },
  bullet: {
    width:10,
    height:10,
    borderRadius:5
  },
  buttonFooter: {
    width:10,
    height:10,
    borderRadius:5
  },
   profileFoto: {
    width:45,
    height:45,
    borderRadius:22,
  },
  statusFoto: {
    maxWidth:'100%',
    height:200,
    minWidth:200,
  },
  buttonFooter:{
      flex:3,
      justifyContent:'center',
      alignContent: 'center',
      alignItems: 'center',
  },
  icon: {
      height:20,
      width:20
  },
  textBold: {
      color:'#000',
      fontWeight:'bold',
      fontSize : 14
  },
})
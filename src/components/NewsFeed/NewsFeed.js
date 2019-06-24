import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
} from 'react-native';
import { Navigation } from 'react-native-navigation';

import NewsFeedHeader from './NewsFeedHeader';
import NewsFeedBody from './NewsFeedBody';
import NewsFeedFooter from './NewsFeedFooter';

class NewsFeed extends Component{
    constructor(){
      super();
    }
    render()
    {
      const componentId = this.props.componentId;
        return(
            <View>
              {
                this.props.data.map(function(NewsFeed, index){
                  return(
                      <View style={styles.newsFeed}  key={index}>
      
                        <View style={styles.newsFeedItems}>
      
                          <NewsFeedHeader id={NewsFeed.id}
                                          profileFoto={NewsFeed.profileFoto}
                                          name={NewsFeed.name}
                                          timestamp={NewsFeed.timestamp}
                                          group={NewsFeed.group}   
                                          componentId={componentId} 
                          />

                          <NewsFeedBody content={NewsFeed.content}
                                        foto={NewsFeed.foto}
                                        componentId={componentId} 
                                        />  

                          <NewsFeedFooter response={NewsFeed.response}
                                          comments={NewsFeed.comments}
                                          componentId={componentId}
                                          />           
                        
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
})
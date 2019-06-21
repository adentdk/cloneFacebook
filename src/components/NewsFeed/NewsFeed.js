import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
} from 'react-native';

import NewsFeedHeader from './NewsFeedHeader';
import NewsFeedBody from './NewsFeedBody';
import NewsFeedFooter from './NewsFeedFooter';

class NewsFeed extends Component{
    render()
    {
        return(
            <View>
              {
                this.props.data.map(function(NewsFeed, index){
                  return(
                      <View style={styles.newsFeed}  key={index}>
      
                        <View style={styles.newsFeedItems}>
      
                          <NewsFeedHeader profileFoto={NewsFeed.profileFoto}
                                          name={NewsFeed.name}
                                          timestamp={NewsFeed.timestamp}
                                          group={NewsFeed.group}    
                          />

                          <NewsFeedBody content={NewsFeed.content}
                                        foto={NewsFeed.foto}
                                        response={NewsFeed.response}
                                        />  

                          <NewsFeedFooter response={NewsFeed.response} />           
                        
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
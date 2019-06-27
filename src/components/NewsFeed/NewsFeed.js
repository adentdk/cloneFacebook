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

    _refresh = () => {
      this.props.refresh()
    }

    render()
    {
      const componentId = this.props.componentId;
      const user_id = this.props.user_id;
      const refresh = this._refresh;
        return(
            <View>
              {
                this.props.data.map(function(NewsFeed, index){
                  return(
                      <View style={styles.newsFeed}  key={index}>
      
                        <View style={styles.newsFeedItems}>
      
                          <NewsFeedHeader id={NewsFeed.id}
                                          user_id={NewsFeed.user_id}
                                          myId={user_id}
                                          profileFoto={NewsFeed.avatar}
                                          name={NewsFeed.name}
                                          timestamp={NewsFeed.createdAt}
                                          group={NewsFeed.from_group}   
                                          componentId={componentId} 
                                          refresh={refresh}
                          />

                          <NewsFeedBody content={NewsFeed.content}
                                        foto={NewsFeed.media}
                                        componentId={componentId} 
                                        />  

                          <NewsFeedFooter response={{
                                            like : NewsFeed.like_count,
                                            super : NewsFeed.super_count,
                                            haha : NewsFeed.haha_count,
                                            wow : NewsFeed.wow_count,
                                            sad : NewsFeed.sad_count,
                                            angry : NewsFeed.angry_count,
                                          }}
                                          comments={[{n:12,m:12,o:12}]}
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
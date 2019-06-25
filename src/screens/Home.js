import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  AsyncStorage
} from 'react-native';

import axios from 'axios';

import Header from '../components/Header';
import NavigationBar from '../components/NavigationBar';
import FormStatus from '../components/FormStatus';
import Story from '../components/Story/Story';
import NewsFeed from '../components/NewsFeed/NewsFeed';


class Home extends Component {

  constructor(){
    super();
    this.state = {
      story : require('../data/story.json'),
      newsFeed : require('../data/newsFeed.json'),
	  token : '',
	  self_stories : [],
      friend_stories: [],
      feeds: [],
    }

    AsyncStorage.getItem('jwt', (error, result) => {
		if(result != null) {
			this.setState({
			  token : result
			})
		}else{
			Navigation.popToRoot(this.props.componentId);
		}
  });
  }

  componentDidMount = async() =>{
	const token = await AsyncStorage.getItem('jwt');
    const config = {
      headers : {
        "Authorization" : `jwt ${token}`
      }
	}
	
    axios.get('http://192.168.0.18:3000/api/stories/friends',config)
    .then(response => {
      this.setState({
        friend_stories : response.data
      });
    })
    .catch(err => {
      console.log("error : ",err);
	})
	
	axios.get('http://192.168.0.18:3000/api/stories/self',config)
    .then(response => {
      this.setState({
        self_stories : response.data
      });
    })
    .catch(err => {
      console.log("error : ",err);
	})
	
	axios.get('http://192.168.0.18:3000/api/feeds',config)
    .then(response => {
      this.setState({
        feeds : response.data
      });
    })
    .catch(err => {
      console.log("error : ",err);
	})
  }
  
  render(){
	const componentId = this.props.componentId;
	
	console.log(this.state.feeds);
	
	
    return (

      <View style={styles.container}>

        <Header/>
        <NavigationBar componentId={componentId}/>

        <ScrollView>

          <FormStatus/>

          <Story data={
						{
							self : this.state.self_stories,
							friends : this.state.friend_stories
						}
					  }
			  componentId={componentId}/>

	
	        <NewsFeed data={this.state.newsFeed} componentId={componentId}/>

            <TouchableOpacity>
            <View style={styles.btnLoadMore}>
              <Text style={styles.txtBtnLoadMore}>Load More ..</Text>
            </View>
            </TouchableOpacity>

          <View style={{height:100}}/>
        </ScrollView>


      </View>        
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#dedede',
    marginBottom:0,
  },
  btnLoadMore: {
    backgroundColor: '#fff',
    margin:10,
    height:40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtBtnLoadMore: {
    color: '#bebebe'
  }
});
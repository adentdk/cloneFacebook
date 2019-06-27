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
      user_id : 0,
      token : '',
      self_stories : [],
      friend_stories: [],
      feeds: [],
      refresh : false
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
    AsyncStorage.getItem('id', (error, result) => {
      this.setState({
        user_id : result
      })
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

  _refresh = () => {
    this.setState({
      refresh : true
    })
  }

  _refreshCek = () => {
    if(this.state.refresh) {
      this.componentDidMount();
      this.setState({
        refresh : false
      })
    }
  }

  
  
  render(){
	  const componentId = this.props.componentId;
    this._refreshCek()
    return (

      <View style={styles.container}>

        <Header/>
        <NavigationBar componentId={componentId}/>

        <ScrollView>

          <FormStatus componentId={componentId} refresh={this._refresh}/>

          <Story data={
						{
							self : this.state.self_stories,
							friends : this.state.friend_stories
						}
					  }
			      componentId={componentId}/>

	
          <NewsFeed user_id={1} 
                    data={this.state.feeds} 
                    response={this.state.newsFeed} 
                    componentId={componentId}
                    refresh={this._refresh}/>

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
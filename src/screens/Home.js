import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

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
      newsFeed : require('../data/newsFeed.json')
    }
  }  
  render(){
    const componentId = this.props.componentId;
    
    return (

      <View style={styles.container}>

        <Header/>
        <NavigationBar componentId={componentId}/>

        <ScrollView>

          <FormStatus/>

          <Story data={this.state.story} componentId={componentId}/>

	
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
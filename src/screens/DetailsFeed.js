import React, { Component } from 'react';
import {
    View,
    FlatList,
    Text,
    StyleSheet,
    ScrollView,
    TextInput,
    AsyncStorage
} from 'react-native';
import { Navigation } from 'react-native-navigation';
import { ListItem,Icon } from 'react-native-elements';

import axios from 'axios';

import NewsFeedHeader from '../components/NewsFeed/NewsFeedHeader';
import {Content,StatusFoto} from '../components/NewsFeed/NewsFeedBody';
import NewsFeedFooter from '../components/NewsFeed/NewsFeedFooter';

class DetailsFeed extends Component {
    constructor(){
        super();
        this.state = {
            feed : {},
            user : {}
        }
    }

    componentDidMount = async () => {
        const token = await AsyncStorage.getItem('jwt');
        const config = {
            headers : {
                "Authorization" : `jwt ${token}`
          }
        }
        const post_id = this.props.post_id;
        axios.get(`http://192.168.0.18:3000/api/feeds/details/${post_id}`,
        config)
        .then( async result => {
            this.setState({
                feed : result.data,
                user : result.data.user
            })
        })
    }

    render() {
        return(
            <View style={{padding:3,backgroundColor:'#fff',flex:1}}>
                <Text>{this.state.user.name}</Text>
                {/* <ScrollView>

                    <Header name={this.state.feed.user.name}
                            componentId={this.props.componentId}
                    />
                   
                    <View style={{marginTop:10}}>

                        <NewsFeedHeader profileFoto={this.state.feed.user.avatar}
                                        name={this.state.feed.user.name}
                                        timestamp={this.state.feed.createAt}
                                        group={this.state.feed.from_group}   
                                        componentId={this.props.componentId} 
                        />

                        <View style={[styles.newsFeedItemsBody]}>
                            <Content text={this.state.feed.content} />
                            <StatusFoto source={this.state.feed.media} />
                        </View>
                    
                        <NewsFeedFooter comments={this.state.feed.comments}
                                        response={this.state.feed.response}
                                        componentId={this.props.componentId}
                        />
                    </View>

                    <View>
                        <FlatList keyExtractor={(item,index)=> index.toString()}
                                  data={this.state.feed.comments}
                                  renderItem={({item}) => <Comments data={item} />}  />
                    </View>
                    <View style={{height:20}} />
                </ScrollView> */}
                
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Icon name="camera" type="simple-line-icon" size={30} color="#ddd" containerStyle={{width:40,padding:5}}/>
                    <TextInput placeholder="Write a comment ..." 
                               placeholderTextColor="#b1b1b1"
                               style={styles.textInput}/>
                </View>
            </View>
        )
    }
}

export default DetailsFeed;

class Header extends Component {
    back = () => {
        Navigation.pop(this.props.componentId);
    }
    render(){
        let name = this.props.name.split(' ').slice(0,1);
        return(
            <View>
                 <ListItem
                        pad={0}
                        titleStyle={{marginLeft:-5}}
                        bottomDivider={true}
                        title={name+" post"}
                        titleStyle={{textAlign:'center',fontWeight:'bold'}}
                        leftElement={<Icon  name="arrow-left-thick" type="material-community" onPress={this.back} />}
                    />
            </View>
        )
    }
}

class Comments extends Component {
    render() {
        const item = this.props.data;
        return(
            <View>
                <ListItem title={item.name}
                          subtitle={item.content}
                          titleStyle={{fontWeight:'bold',marginLeft:10}}
                          subtitleStyle={{marginLeft:10}}
                          containerStyle={{backgroundColor:'transparent',minWidth:50,maxWidth:"90%"}}
                          contentContainerStyle={{backgroundColor: "#eee",borderRadius:15,minHeight:60}}
                          rightElement={<Text/>}
                          leftAvatar={{source : {uri : item.avatar}}}/>
                <Text style={{marginLeft:73,marginTop:-17}}>
                    {item.timestamp}
                    <Text style={{fontWeight:'bold',color:'#aaa'}}> Like Reply</Text>
                </Text> 
            </View>
                            
        )
    }
}

const styles = StyleSheet.create({
    
    newsFeedItemsBody: {
    marginVertical:10,
    maxHeight: 300,
    paddingBottom:0,
    }, 
    textInput: {
        backgroundColor:'#f9f9f9',
        flex:1,
        borderRadius:30,
        height:35,
    }
});
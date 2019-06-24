import React, { Component } from 'react';
import {
    View,
    FlatList,
    Text,
    StyleSheet,
    ScrollView,
    TextInput,
} from 'react-native';
import { Navigation } from 'react-native-navigation';
import { ListItem,Icon } from 'react-native-elements';

import NewsFeedHeader from '../components/NewsFeed/NewsFeedHeader';
import {Content,StatusFoto} from '../components/NewsFeed/NewsFeedBody';
import NewsFeedFooter from '../components/NewsFeed/NewsFeedFooter';

class DetailsFeed extends Component {
    constructor(){
        super();
        this.state = {
            feeds : require('../data/newsFeed.json')
        }
    }
    render() {
        let id = this.props.data;
        let feed = this.state.feeds.find(feed => feed.id == id);
        return(
            <View style={{padding:3,backgroundColor:'#fff',flex:1}}>
                <ScrollView>

                    <Header name={feed.name}
                            componentId={this.props.componentId}
                    />
                   
                    <View style={{marginTop:10}}>

                        <NewsFeedHeader profileFoto={feed.profileFoto}
                                        name={feed.name}
                                        timestamp={feed.timestamp}
                                        group={feed.group}   
                                        componentId={this.props.componentId} 
                        />

                        <View style={[styles.newsFeedItemsBody]}>
                            <Content text={feed.content} />
                            <StatusFoto source={feed.foto} />
                        </View>
                    
                        <NewsFeedFooter comments={feed.comments}
                                        response={feed.response}
                                        componentId={this.props.componentId}
                        />
                    </View>

                    <View>
                        <FlatList keyExtractor={(item,index)=> index.toString()}
                                  data={feed.comments}
                                  renderItem={({item}) => <Comments data={item} />}  />
                    </View>
                    <View style={{height:20}} />
                </ScrollView>
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
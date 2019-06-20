import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
} from 'react-native';
import {ListItem,SearchBar} from 'react-native-elements';
import { Navigation } from 'react-native-navigation';

class Friends extends Component {
    constructor(){
        super();
        this.state = {
            people : require('../data/people.json')
        }
    }

    render(){
        return(
            <View>
                <View style={{backgroundColor:"blue"}}>
                    <SearchBar
                    placeholder="Type Here..."
                    placeholderTextColor="#eee"
                    containerStyle={{backgroundColor:"#3B5999",height:55,padding:0}}
                    inputStyle={{padding:0}}
                    searchIcon={{name:"md-arrow-back", type:"ionicon" }}
                    platform="android"/>
                </View>

                {
                    this.state.people.others.map(function(item,index){
                        return(
                            <ListItem key={index}
                                leftAvatar={{ source : { uri : item.avatar} }}
                                title={item.name}
                                subtitle={item.mutualFriends}/>
                        )
                    })
                }
            </View>
        )
    }
}

export default Friends;

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#dedede',
      marginBottom:0,
    },
});
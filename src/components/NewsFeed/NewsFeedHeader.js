import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    Modal,
    AsyncStorage
} from 'react-native';
import {Icon} from 'react-native-elements';
import TimeAgo from 'react-native-timeago';
import { Navigation } from 'react-native-navigation';

import axios from 'axios';


class NewsFeedHeader extends Component {

    constructor() {
        super();
        this.state = {
            modalVisible : false
        }
    }
    _editPost = (post_id) => {
        this.setState({
            modalVisible : false
        })
        Navigation.push(this.props.componentId, {
            component : {
                name : "CreateNewFeed",
                passProps: {
                    post_id : post_id,
                    refresh : this.props.refresh
                }
            }
        })
    }
    _detailPost = (post_id) => {
         Navigation.push(this.props.componentId, {
            component : {
                name : "DetailsFeed",
                passProps: {
                    post_id : post_id
                }
            }
        })
    }

    _deletePost = async(post_id) => {
        const token = await AsyncStorage.getItem('jwt');
        const config = {
            headers : {
                "Authorization" : `jwt ${token}`
          }
        }
        axios.delete(`http://192.168.0.18:3000/api/feeds/${post_id}`,
        config)
        .then( async result => {
            this.setState({
                modalVisible : false
            })
            try{
                await this.props.refresh()
            }catch(err){
                console.log(err);
                
            }
        })
        
   }

    render(){
        const {profileFoto, name, timestamp, group, id} = this.props;
        return(
            <View style={styles.newsFeedItemsHeader}>

                <View style={{flex:2}}>
                    <Image source={{uri : `http://192.168.0.18:3000/images/users/${profileFoto}` }} style={styles.profileFoto}/>
                </View>
                <View style={{flex:8}}>
                    <TouchableOpacity onPress={() => this._detailPost(id)}>
                        <NameOfPoster name={name} group={group} />
                    <Text style={{marginLeft:4}}>
                    <TimeAgo time={timestamp} interval={30000} />
                        &bull;
                        <Image source={require('../../img/world.png')} style={styles.bullet}/>
                    </Text>
                    </TouchableOpacity>
                </View>
                <View style={{flex:1}}>
                    <TouchableOpacity onPress={() => {this.setState({ modalVisible : true })}}>
                        <Text>&bull; &bull; &bull;</Text>
                    </TouchableOpacity>
                </View>
                <Modal visible={this.state.modalVisible}
                       transparent={true}>
                           <TouchableOpacity onPress={() => {this.setState({ modalVisible : false })} }>
                            <View style={{height:400,backgroundColor:"rgba(0,0,0,0.3)"}}/>
                           </TouchableOpacity>
                           <View style={{flex:1,backgroundColor:"white"}}>
                                {
                                    (this.props.user_id == this.props.myId)
                                    ?
                                    <View style={{justifyContent:"center"}}>
            
                                        <View style={{paddingVertical:15,paddingStart:10,borderBottomColor:"#aaa",borderBottomWidth:1}}>
                                            <TouchableOpacity onPress={() => this._editPost(id)}>
                                                <Text style={{fontSize:15,}}>Edit</Text>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{paddingVertical:15,paddingStart:10,borderBottomColor:"#aaa",borderBottomWidth:1}}>
                                        <TouchableOpacity onPress={() => this._deletePost(id)}>
                                                <Text style={{fontSize:15,}}>Delete</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    :
                                    <View style={{justifyContent:"center"}}>
                                 
                                        <View style={{paddingVertical:15,paddingStart:10,borderBottomColor:"#aaa",borderBottomWidth:1}}>
                                            <Text style={{fontSize:15,}}>Save</Text>
                                        </View>
                                    
                                    </View>
                                }
                           </View>
                </Modal>
            </View>
        )
    }
}

export default NewsFeedHeader;

class NameOfPoster extends Component {
    render(){
        let group = (this.props.group) 
                        ?
                        <View style={{flexDirection:'row'}}>
                            <Icon name="triangle-right" type="entypo" color="#cecece" size={20}/>
                            <Text style={[styles.textBold,{marginLeft:4}]}>{this.props.group}</Text>
                        </View>
                        :
                        <Text/>;
        return(
            <View style={{flexDirection:'row'}}>
                <Text style={[styles.textBold,{marginLeft:4}]}> {this.props.name}</Text>
                {group}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    newsFeedItemsHeader: {
        flexDirection: 'row',
    },
    bullet: {
        width:10,
        height:10,
        borderRadius:5
    },
    profileFoto: {
        width:45,
        height:45,
        borderRadius:22,
    },
    textBold: {
        color:'#000',
        fontWeight:'bold',
        fontSize : 14
    },
})
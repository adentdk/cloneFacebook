import React, {Component} from 'react';
import {
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableHighlight,
  AsyncStorage,
  Modal
} from 'react-native';
import {ListItem, Icon, Button} from 'react-native-elements';
import {Navigation} from 'react-native-navigation';
import axios from 'axios';

class CreateNewFeed extends Component {
    constructor()
    {
        super();
        this.state = {
        feed: '',
        token : '',
        post_id : null,
        title : "Create new Post",
        titleAction : 'Send',
        action : this._sendfeed
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
    
    componentDidMount = async() => {
        if(this.props.post_id){
            const token = await AsyncStorage.getItem('jwt');
            const config = {
            headers : {
                "Authorization" : `jwt ${token}`
                }
            }
            axios.get(`http:/192.168.0.18:3000/api/feeds/${this.props.post_id}`,config)
            .then(result => {
                this.setState({
                    feed : result.data.content,
                    title : "Edit old Post",
                    titleAction : 'Edit',
                    action : this._editfeed,
                    post_id : result.data.id
                })
            }).catch(err => {
                console.log(err);
                
            })
        }
    }

    _sendfeed = () => {
        const token =  this.state.token;
        const config = {
        headers : {
            "Authorization" : `jwt ${token}`
        }
        };
        let content = this.state.feed;

        axios.post('http://192.168.0.18:3000/api/feeds/',{
        "content" : content
        },config)
        .then(result => {
            this.setState({
                feed: ''
            })
            Navigation.pop(this.props.componentId);
            this.props.refresh();
        
        })
        .catch(err=>{
        console.log(err);
        })
    }
    _editfeed = () => {
        const token =  this.state.token;
        const config = {
        headers : {
            "Authorization" : `jwt ${token}`
        }
        };
        let content = this.state.feed;

        axios.patch(`http://192.168.0.18:3000/api/feeds/${this.state.post_id}`,{
        "content" : content
        },config)
        .then(result => {
            this.setState({
                feed: '',
                post_id : null,
                title : "Create new Post",
                titleAction : 'Send',
                action: this._sendfeed
            })
            Navigation.pop(this.props.componentId);
            this.props.refresh();
        
        })
        .catch(err=>{
        console.log(err);
        })
    }

    
    render() {
        return(
            <View>
                <Modal visible={true}>
                <ListItem
                    title={this.state.title}
                    leftElement={
                    <Icon name="arrowleft"
                            type="antdesign"
                            color="#eee"
                            onPress={() =>  Navigation.pop(this.props.componentId) }/>
                    }
                    rightTitle={
                    <TouchableHighlight onPress={this.state.action}>
                        <Text style={{color:"#ddd"}}>{this.state.titleAction}</Text>
                    </TouchableHighlight>
                    }
                    containerStyle={{height:35,padding:5,backgroundColor:'#3b5999'}}
                    titleStyle={{color:'#eee'}}
                    />
                    <ListItem
                    title={"Aden Trisna Daud Kurnia"}
                    subtitle={
                    <View style={{flexDirection:'row'}}>
                        <Button type={"outline"}
                                title={"Public"}
                                icon={{
                                    name:"caretdown",
                                    type:"antdesign",
                                    size:10,
                                    color:"#555"
                                }}
                                iconRight
                                iconContainerStyle={{
                                width:10,
                                padding:0,
                                margin:0
                                }}
                                titleStyle={{fontSize:11,color:"#555"}}
                                buttonStyle={{height:12,borderColor:"#555"}}
                                containerStyle={{marginRight:5}}/>
                        <Button type={"outline"}
                                title={"Album"}
                                icon={{
                                name:"caretdown",
                                type:"antdesign",
                                size:10,
                                color:"#555"
                                }}
                                iconRight
                                iconContainerStyle={{
                                width:10,
                                padding:0,
                                margin:0
                                }}
                                titleStyle={{fontSize:11,color:"#555"}}
                                buttonStyle={{height:12,borderColor:"#555"}}/>
                    </View>
                    }
                    leftAvatar={{source:{uri : 'http://192.168.0.18:3000/images/users/user3.jpg'}}}
                    containerStyle={{height:50,padding:5}}
                    titleStyle={{color:'#222',fontWeight:'bold',marginTop:-10,fontSize:12}}
                    />
                <ScrollView>
                <View style={{flex:1,minHeight:300}}>
                    <TextInput placeholder={"What's on your mind?"}
                                placeholderTextColor={"#555"} 
                                multiline={true}
                                value={this.state.feed}
                                onChangeText={(text) => this.setState({feed: text})}
                                />
                </View>
                </ScrollView>
                
                <View>
                    <View style={{flexDirection:'row',borderTopColor:'#aaa',borderTopWidth:1,padding:5}}>
                        <View style={{flex:4}}>
                        <Text>Add to your post</Text>
                        </View>
                        <View style={{flex:3,flexDirection:'row',justifyContent:"flex-end"}}>
                        <Icon name={"picture"} type={"antdesign"} color={"green"} containerStyle={{marginLeft:3}}/>
                        <Icon name={"add-user"} type={"entypo"} color={"blue"} containerStyle={{marginLeft:3}} size={20}/>
                        <Icon name={"emoticon"} type={"material-community"} color={"orange"} containerStyle={{marginLeft:3}}/>
                        <Icon name={"location-pin"} type={"entypo"} color={"red"} containerStyle={{marginLeft:3}}/>
                        </View>
                    </View>
                </View>
            </Modal>
        </View> 
        )
        
    }
}

export default CreateNewFeed;
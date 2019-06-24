import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import {Icon,Tooltip} from 'react-native-elements';
import { Navigation } from 'react-native-navigation';


class NewsFeedHeader extends Component {
    _detailPost = (post_id) => {
         Navigation.push(this.props.componentId, {
            component : {
                name : "DetailsFeed",
                passProps: {
                    data : post_id
                }
            }
        })
    }
    render(){
        const {profileFoto, name, timestamp, group, id} = this.props;
        return(
            <View style={styles.newsFeedItemsHeader}>

                <View style={{flex:2}}>
                    <Image source={{uri : profileFoto }} style={styles.profileFoto}/>
                </View>
                <View style={{flex:8}}>
                    <TouchableOpacity onPress={() => this._detailPost(id)}>
                        <NameOfPoster name={name} group={group} />
                    <Text style={{marginLeft:4}}>
                        {timestamp}
                        &bull;
                        <Image source={require('../../img/world.png')} style={styles.bullet}/>
                    </Text>
                    </TouchableOpacity>
                </View>
                <View style={{flex:1}}>
                    <Tooltip backgroundColor='#eee'
                             withOverlay={false}
                             popover={
                                <FeedOption name={name} />
                             } 
                             containerStyle={{}} >
                        <Text>&bull; &bull; &bull;</Text>
                    </Tooltip>
                </View>

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
                        </View> : <Text/>;
        return(
            <View style={{flexDirection:'row'}}>
                <Text style={[styles.textBold,{marginLeft:4}]}> {this.props.name}</Text>
                {group}
            </View>
        )
    }
}


class FeedOption extends Component {
    render() {
        return(
            <Text>
                Halo
            </Text>
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
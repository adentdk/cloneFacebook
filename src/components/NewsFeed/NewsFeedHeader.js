import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';
import {Icon} from 'react-native-elements';


class NewsFeedHeader extends Component {
    render(){
        const {profileFoto, name, timestamp, group} = this.props;
        return(
            <View style={styles.newsFeedItemsHeader}>

                <View style={{flex:2}}>
                    <Image source={{uri : profileFoto }} style={styles.profileFoto}/>
                </View>
                <View style={{flex:8}}>

                    <NameOfPoster name={name} group={group} />
                    <Text style={{marginLeft:4}}>
                        {timestamp}
                        &bull;
                        <Image source={require('../../img/world.png')} style={styles.bullet}/>
                    </Text>
                </View>
                <View style={{flex:1}}>
                    <Text>&bull; &bull; &bull;</Text>
                </View>

            </View>
        )
    }
}

export default NewsFeedHeader;

class NameOfPoster extends Component {
    render(){
        let group = (this.props.group) ? <View style={{flexDirection:'row'}}>
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
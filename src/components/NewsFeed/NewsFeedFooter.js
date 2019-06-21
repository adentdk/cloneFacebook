import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import {Icon} from 'react-native-elements';


class NewsFeedFoooter extends Component {
    constructor(){
        super();
        this.state = {
            iconName : 'like2',
            iconType : 'antdesign',
            iconColor : '#aaa',
            iconPress : false,

            tooltip : false,
        }
    }

    _presIcon = (icon,pressed) => {
        if(pressed){
            this.setState({
                iconName : 'like2',
                iconType : 'antdesign',
                iconColor : '#aaa',
                iconPress : false
            });
        }else{
            switch (icon) {
                    case 'angry':
                        this.setState({
                            iconName : 'emoticon-angry',
                            iconType : 'material-community',
                            iconColor : '#e74c3c',
                            iconPress : true
                        })
                        break;
                    case 'sad':
                        this.setState({
                            iconName : 'emoticon-sad',
                            iconType : 'material-community',
                            iconColor : '#f1c40f',
                            iconPress : true
                        })
                        break;
                        case 'grin':
                        this.setState({
                            iconName : 'emoticon-excited',
                            iconType : 'material-community',
                            iconColor : '#f1c40f',
                            iconPress : true
                        })
                        break;
                    case 'super':
                        this.setState({
                            iconName : 'heart',
                            iconType : 'material-community',
                            iconColor : '#e74c3c',
                            iconPress : true
                        })
                        break;
                        case 'like':
                        this.setState({
                            iconName : 'like1',
                            iconType : 'antdesign',
                            iconColor : '#3498db',
                            iconPress : true
                        })
                        break;
                
                    default:
                        this.setState({
                            iconName : 'like2',
                            iconType : 'antdesign',
                            iconColor : '#aaa',
                            iconPress : false
                        });
                        break;
            }
        }
    }
    _longPressIcon = () => {
        this.setState({
            tooltip : true
        })
    }
    render(){
        let data = this.props.response;  
        let total = data.reduce((a,b) => a + b.count,0);
        return(
            <View>
                <View style={{flexDirection:'row'}}>
                    <BodyBottom response={this.props.response} />
                    <Text>{total}</Text>
                </View>

                <View style={styles.newsFeedItemsFooter}>
                    <View style={styles.buttonFooter}>
                        <Icon name={this.state.iconName}
                            type={this.state.iconType}
                            color={this.state.iconColor}
                            onPress={() => this._presIcon('like',this.state.iconPress)}
                            onLongPress={this._longPressIcon}/>
                    </View>
                    <View style={styles.buttonFooter}>
                        <Icon name="comment" type="octicon" color="#aaa"/> 
                    </View>
                    <View style={styles.buttonFooter}>
                        <Icon name="share-outline" type="material-community" color="#aaa"/>
                    </View>
                </View>
            </View>
        )
    }
}

export default NewsFeedFoooter;

class BodyBottom extends  Component {
    render() {
        let data = this.props.response;
        data = data.sort((a, b) => b.count - a.count);
        let topThree = data.slice(0,3);
        return(
            <View style={{flexDirection:"row"}}>
                {                
                    topThree.map(function(response, index){
                        return(
                            <Icon name={response.name} type={response.type} color={response.color} size={18} key={index} />
                        )
                    })
                }
            </View>
        )

    }
}
const styles = StyleSheet.create({
    
  newsFeedItemsFooter: {
    flexDirection:'row',
    borderTopWidth:1,
    borderTopColor:'#bebebe',
	height:40,
  },
  buttonFooter: {
    flex:3,
    justifyContent:'center',
    alignContent: 'center',
    alignItems: 'center',
},
});
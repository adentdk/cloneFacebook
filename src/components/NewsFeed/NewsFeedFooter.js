import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import {Icon} from 'react-native-elements';
import Popover from 'react-native-popover-view';


class NewsFeedFoooter extends Component {
    constructor(){
        super();
        this.state = {
            iconName : 'like2',
            iconType : 'antdesign',
            iconColor : '#aaa',
            iconPress : false,
            response : [],
            comments : [],
            totalResponse : 0,
            totalComments : 0,

            popoverVisibilty : false,
        }
    }
    _setTotalResponse = () => {
        return this.props.response.reduce((a,b) => a + b.count,0);
    }
    _setTotalComments = () => {
        let comments = this.props.comments;
        return comments.length
        
    }
    componentDidMount(){
        this.setState({
            totalResponse : this._setTotalResponse(),
            totalComments : this._setTotalComments(),
            response: this.props.response,
            comments: this.props.comments
        })
    }

    _presIcon = (icon) => {
        if(this.state.iconPress){
            this.setState({
                iconName : 'like2',
                iconType : 'antdesign',
                iconColor : '#aaa',
                iconPress : false,
                totalResponse : this.state.totalResponse - 1
            });
        }else{
            switch (icon) {
                case 'angry':
                    this.setState({
                    iconName : 'emoticon-angry',
                    iconType : 'material-community',
                    iconColor : '#e74c3c',
                    iconPress : true,
                    totalResponse : this.state.totalResponse + 1
                })
                break;
                case 'sad':
                    this.setState({
                    iconName : 'emoticon-sad',
                    iconType : 'material-community',
                    iconColor : '#f1c40f',
                    iconPress : true,
                    totalResponse : this.state.totalResponse + 1
                })
                break;
                case 'grin':
                    this.setState({
                    iconName : 'emoticon-excited',
                    iconType : 'material-community',
                    iconColor : '#f1c40f',
                    iconPress : true,
                    totalResponse : this.state.totalResponse + 1
                })
                break;
                    case 'super':
                    this.setState({
                    iconName : 'heart',
                    iconType : 'material-community',
                    iconColor : '#e74c3c',
                    iconPress : true,
                    totalResponse : this.state.totalResponse + 1
                    })
                break;
                case 'like':
                    this.setState({
                    iconName : 'like1',
                    iconType : 'antdesign',
                    iconColor : '#3498db',
                    iconPress : true,
                    totalResponse : this.state.totalResponse + 1
                })
                break;
            }
        }

        this.setState({
            popoverVisibilty : false
        });
    }
    
    _showPopover = (boolean) => {
        this.setState({
            iconPress : !boolean,
            popoverVisibilty : boolean
        })
    }

    render(){
        return(
            <View>
                <View style={{flexDirection:'row'}}>
                    <View style={{flexDirection:"row",flex:1}}>
                        <BodyBottom response={this.state.response} comments={this.state.comments} />
                        <Text>{this.state.totalResponse}</Text>
                    </View>
                    <View style={{flex:1}}>
                        {
                            (this.state.totalComments > 0) ? <Text style={{textAlign:'right'}}>{this.state.totalComments} Comments</Text> : <Text/>
                        }
                    </View>
                </View>

                <View style={styles.newsFeedItemsFooter}>
                    <View style={styles.buttonFooter}>
                        
                        <Popover isVisible={this.state.popoverVisibilty} onRequestClose={() => this._showPopover(false)}>
                        <View style={{flexDirection:"row"}}>
                            <Icon name="like1"
                                type="antdesign"
                                color="#3498db"
                                size={34}
                                onPress={() => this._presIcon('like')}
                            />

                            <Icon name="heart" 
                                type="material-community"
                                color="#e74c3c"
                                size={34}
                                onPress={() => this._presIcon('super')}
                            />

                            <Icon name="emoticon-excited"
                                type="material-community"
                                color="#f1c40f"
                                size={34}
                                onPress={() => this._presIcon('grin')}
                            />
                            <Icon name="emoticon-sad"
                                type="material-community"
                                color="#f1c40f"
                                size={34}
                                onPress={() => this._presIcon('sad')}
                            />
                            <Icon name="emoticon-angry"
                                type="material-community"
                                color="#e74c3c"
                                size={34}
                                onPress={() => this._presIcon('angry')}
                            />
                        </View>

                        </Popover>

                        <Icon name={this.state.iconName}
                            type={this.state.iconType}
                            color={this.state.iconColor}
                            onPress={() => this._presIcon('like',this.state.iconPress)}
                            onLongPress={() => this._showPopover(true)}/>
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
                            <Icon name={response.name}
                                  type={response.type} 
                                  color={response.color} 
                                  size={20} 
                                  key={index} />
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
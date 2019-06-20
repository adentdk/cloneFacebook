import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  ScrollView
} from 'react-native';
import { ListItem,Divider } from 'react-native-elements';

import Header from '../components/Header';
import NavigationBar from '../components/NavigationBar';
import { Navigation } from 'react-native-navigation';

class Menu extends Component {

    constructor() {
        super();
        this.state = {
            list : require('../data/menu.json')
        }
    }

    goToScreen = (screenName) => {
        try{
            Navigation.push(this.props.componentId, {
                  component : {
                    name: screenName
                  }
                });
         } catch(e){
           console.log(e);
         } 
      }

    render(){
        return(
            <View style={styles.container}>
                <ScrollView>

                
                <Header/>
                <NavigationBar componentId={this.props.componentId}/>
                <ListItem title="a"  subtitle="s" onPress={() => this.goToScreen('Friends')} />
                {
                    this.state.list.profile.map(function(item, index){
                        return (
                            <ListItem key={index}
                                      leftAvatar={{ source : { uri : item.avatar} }}
                                      title={item.title}
                                      subtitle={item.subtitle}
                                      onPress={() => this.goToScreen('Home')}/>
                        )
                    })
                }
                <Divider style={{backgroundColor:'#bebebe'}}/>
                {
                     this.state.list.shortcut.map(function(item, index){
                        return (
                            <ListItem key={index}
                                      title={item.title}
                                      subtitle={item.subtitle}
                                      leftIcon={{ name: item.icon, color: '#3B5999', type: item.type }}
                                      onPress={() => this.goToScreen('Friends')}/>
                        )
                    })
                }

                </ScrollView>
            </View>
        )
    }
}

export default Menu;

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#dedede',
      marginBottom:0,
    },
});
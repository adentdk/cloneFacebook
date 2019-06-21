import React,{Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';
import {Icon} from 'react-native-elements';

class NewsFeedBody extends Component {
    render() {
        const {content, foto, response} = this.props;
        return (
            <View style={styles.newsFeedItemsBody}>
      
                <Text>{content}</Text>
                
                <StatusFoto source={foto} />

            </View>
          
        )
    }
}

export default NewsFeedBody;

class StatusFoto extends Component {
    _cekFoto = (img) => {
        if(img != ''){
            return(
                <View>
                    <Image source={{uri : img}} style={styles.statusFoto} />
                </View>
            )
        }else{
            return(
                <View/>
            )
        }
    }
    render(){
        return(
            <View>
                {
                    this._cekFoto(this.props.source)
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    
  newsFeedItemsBody: {
    maxHeight: 300,
    paddingBottom:0,
  }, 
    statusFoto: {
        maxWidth:'100%',
        height:200,
        minWidth:200,
    },
})

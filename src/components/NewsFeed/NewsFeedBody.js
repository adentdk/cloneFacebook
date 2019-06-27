import React,{Component} from 'react';
import {
    View,
    Text,
    Image,
    TouchableWithoutFeedback,
    StyleSheet
} from 'react-native';

class NewsFeedBody extends Component {
    render() {
        const {content, foto} = this.props;
        return (
            <View style={styles.newsFeedItemsBody}>
                   <Text>{content}</Text>
                    <StatusFoto source={foto} />
            </View>
          
        )
    }
}

export default NewsFeedBody;

export class StatusFoto extends Component {
    _cekFoto = (img) => {
        if(img != null){
            return(
                <View>
                    <Image source={{uri : `http://192.168.0.18:3000/images/feeds/${img}`}} style={styles.statusFoto} />
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
    marginVertical:10
  }, 
    statusFoto: {
        maxWidth:'100%',
        height:200,
        minWidth:200,
    },
})

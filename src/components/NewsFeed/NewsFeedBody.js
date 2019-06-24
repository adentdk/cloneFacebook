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
                    <Content text={content} />
                    <StatusFoto source={foto} />
            </View>
          
        )
    }
}

export default NewsFeedBody;

export class Content extends Component {

    constructor() {
        super();
        this.state = {
            fullContent : '',
            content : '',
            btnViewDetails : true,
        }
    }

    componentWillMount(){
        content = (this.props.text.length  > 128) ? this.props.text.slice(0,128) + "...." : this.props.text;
        this.setState({
            fullContent : this.props.text,
            content : content
        })
    }

    _viewDetails = () => {
        this.setState({
            content : fullContent
        })
    }

    render(){
        return(
            <View>
                <Text>{this.state.content}</Text>
                <TouchableWithoutFeedback onPress={() => {}} style={{display:'none'}}>
                    <Text style={{color:"#aeaeae"}}>view more</Text>
                </TouchableWithoutFeedback>
            </View>
        )
    }
}
export class StatusFoto extends Component {
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
    marginVertical:10
  }, 
    statusFoto: {
        maxWidth:'100%',
        height:200,
        minWidth:200,
    },
})

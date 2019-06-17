import React, { Component } from 'react';
import {
    Text,
    TextInput,
    Button,
    View,
    StyleSheet,
    Image,
} from 'react-native';

class Login extends Component {
    constructor()
    {
        super();

    }

    render(){
        return(
            <View style={styles.container}>

                <View style={styles.header}>
                    <Image source={require('../img/facebookBanner.jpg')} style={styles.banner}/>
                </View>

                <View style={styles.main}>
                    <View style={styles.languages}>
                        <Text style={[styles.language,styles.link,{fontSize:12}]}>English</Text>
                        <Text style={[styles.language,styles.link,{fontSize:12}]}>&bull; Indonesian</Text>
                        <Text style={[styles.language,styles.link,{fontSize:12}]}>&bull; Others</Text>
                    </View>
                    
                    <View style={styles.formWrapper}>
                        <View>
                            <TextInput placeholder='Mobile number or email address' placeholderTextColor='#aeaeae' underlineColorAndroid="lightblue" style={styles.textInput}/>
                        </View>
                        <View>
                            <TextInput placeholder='Password' placeholderTextColor='#aeaeae' secureTextEntry={true} underlineColorAndroid="lightblue" style={styles.textInput}/>
                        </View>
                    </View>
                    <View style={{marginTop:10}}>
                        <Button title='Log In' style={styles.button}/>
                    </View>
                    <View>
                        <Text style={[styles.link,styles.center,{marginTop:10, fontSize:12}]}>forgotten password?</Text>
                    </View>
                    <View style={styles.textOrWrapper}>
                        <View style={styles.hr}>
                            <Text>&nbsp;</Text>
                        </View>
                        <View>
                            <Text>or</Text>
                        </View>
                        <View style={styles.hr}>
                            <Text>&nbsp;</Text>
                        </View>
                    </View>
                    <View style={{alignItems:'center',alignContent:'flex-end',marginTop:20}}>
                        <View style={styles.width80}>
                            <Button title='Create New Account' color="green"/>
                        </View>
                    </View>

                </View>               

            </View>
        );
    }
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eeeeee',
    },
    header: {
       height:180,
       justifyContent: 'center',
       alignItems: 'center',
    },
    banner: {
        width:'100%',
        height:180,
    },
    headerTitle: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white',
          
    },
     main: {
        flex: 12,
        padding: 10,
        backgroundColor: 'transparent',
    },
    languages: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    language: {
        margin:3,
    },
    formWrapper: {
        backgroundColor: 'transparent',
    },

    footer: {
        flex: 2,
        backgroundColor: 'white',
    },
    textOrWrapper:{
        marginTop: 10,
        height:30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    textInput: {
        height: 40,
        width: '100%',
        backgroundColor: 'transparent'
    },
    button: {
          borderRadius:4,
    },
      borderBottom: {
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#bebebe',
    },
    hr: {
        width: '45%',
        borderTopWidth: 1,
        borderTopColor: '#bebebe',
        marginTop:23,
        marginLeft: 5,
        marginRight: 5,
    },
    center: {
        alignContent: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
    link:{
        color: 'blue',
    },
    width80: {
        width:'80%',
    },
      
});
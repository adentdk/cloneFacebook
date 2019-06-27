import React, { Component } from 'react';
import {
    Text,
    TextInput,
    Button,
    View,
    Image,
    StyleSheet,
    TouchableOpacity,
    TouchableHighlight,
    ScrollView,
    AsyncStorage
} from 'react-native';
import { Navigation } from 'react-native-navigation';
import AwesomeAlert from 'react-native-awesome-alerts';

import axios from 'axios';

class Login extends Component {

    constructor()
    {
        super();
        this.state = {
            showAlert : false,
            inputEmail :  '',
            inputPassword : ''
        }
    }

    componentDidMount(){
        AsyncStorage.getItem('jwt', (error, result) => {
            if(result != null) {
                Navigation.push(this.props.componentId, {
                    component : {
                      name: "Home"
                    }
                });
            }
        });
    }

    handleLogin = () => {

        axios.post('http://192.168.0.18:3000/auth/signin',{
            "email" : this.state.inputEmail,
            "password" : this.state.inputPassword
        })
        .then(res => {
            const data = res.data.data
            axios.post("http://192.168.0.18:3000/auth/create/authorization",{
                "user_id" : data.id,
                "name" : data.name,
                "email" : data.email
            })
            .then(res => {
                AsyncStorage.setItem('jwt',res.data.data.token);
                AsyncStorage.setItem('id',data.id);
                Navigation.push(this.props.componentId, {
                    component : {
                      name: "Home"
                    }
                });
            })
            .catch(err => {
                console.log(err);
                
                this.setState({
                    showAlert: true
                })
            })
        })
        .catch(err => {
            console.log(err);
            
            this.setState({
                showAlert: true
            })
        })
    }

    goToScreen = (screenName) => {
        Navigation.push(this.props.componentId, {
          component : {
            name: screenName
          }
        });
    }

    render(){
        return(
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.header}>
                        <Image source={require('../img/facebookBanner.jpg')} style={styles.banner}/>
                    </View>
                    <View style={styles.main}>


                        <View style={styles.languages}>

                            <TouchableOpacity onPress={() =>  {} }>
                                <Text style={styles.languageText}>
                                    Indonesia
                                    &nbsp; &bull; &nbsp;
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {} }>
                                <Text style={styles.languageText}>
                                    English
                                    &nbsp; &bull; &nbsp;
                                </Text>
                            </TouchableOpacity>
                            <TouchableHighlight onPress={() => {} }>
                                <Text style={styles.languageText}>
                                    Others
                                </Text>
                            </TouchableHighlight>
                            
                        </View>
                        

                        <View style={styles.formWrapper}>
                            <TextInput placeholder={"Email or Phone number"}
                                    placeholderTextColor='#aeaeae' 
                                    underlineColorAndroid="lightblue" 
                                    style={styles.textInput}
                                    onChangeText={
                                        (text) => {
                                            this.setState({
                                                inputEmail : text
                                            })
                                        }
                                    }/>
                            <TextInput placeholder={"Password"} 
                                    placeholderTextColor='#aeaeae' 
                                    secureTextEntry={true} 
                                    underlineColorAndroid="lightblue" 
                                    style={styles.textInput}
                                    onChangeText={
                                            (text) => {
                                                this.setState({
                                                    inputPassword : text
                                                })
                                            }
                                    }/>
                        </View>


                        <View style={{marginTop:10}}>
                            <Button onPress={this.handleLogin}  title="Login" style={styles.button} />
                        </View>

                        <View>
                            <Text style={[styles.link,styles.center]}>{"forgotten password?"}</Text>
                        </View>

                        <View style={styles.textOrWrapper}>

                            <Text style={styles.hr}/>
                            <Text>{"Or"}</Text>
                            <Text style={styles.hr}/>

                        </View>
                        
                        <View>
                            <View style={styles.width80}>
                                <Button title={"Create New Account"} color="green"/>
                            </View>
                        </View>

                    </View>               
                </ScrollView>
                <AwesomeAlert
                    show={this.state.showAlert}
                    showProgress={false}
                    title="Login Failed"
                    message="make sure your email and your password is correct"
                    closeOnTouchOutside={true}
                    closeOnHardwareBackPress={true}
                    />
            </View>
        );
    }
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'column',
        justifyContent: 'flex-end',
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
        alignContent:'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
      
});
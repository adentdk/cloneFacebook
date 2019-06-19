import React, { Component } from 'react';
import {
    Text,
    TextInput,
    Button,
    View,
    Image,
    Modal,
    StyleSheet,
    TouchableOpacity,
    TouchableHighlight,
} from 'react-native';
import { Navigation } from 'react-native-navigation';

class Login extends Component {
    constructor()
    {
        super();
        this.state = {
            modalVisible : false,
            inputEmail : "Mobile Number or Email Address",
            inputPassword : "Password",
            buttonLogin : 'Log In',
            textForgottenPassword : 'Forgotten Password?',
            textOr : 'or',
            buttonCreateNewAccount : 'Create New Account',
            close: 'Close',
            others : 'Others'
        }

    }

    indonesian = () => {
        this.setState({
            modalVisible : false,
            inputEmail : "Telepon atau Email",
            inputPassword : "Kata Sandi",
            buttonLogin : 'Masuk',
            textForgottenPassword : 'Lupa Kata Sandi?',
            textOr : 'atau',
            buttonCreateNewAccount : 'Buat Akun Baru',
            close : 'Tutup',
            others : 'Lainnya'
        });
    }

    
    goToScreen = (screenName) => {
        Navigation.push(this.props.componentId, {
          component : {
            name: screenName
          }
        });
    }
    setModalVisible = (value) => {
        this.setState({
            modalVisible : value
        })
    }

    changeLanguage = () => {
        this.setState({
            modalVisible : false
        });
    }

    render(){
        return(
            <View style={styles.container}>

                <Modal animationType="slide" transparent={false} visible={() => this.state.modalVisible}>
                    <View style={{padding:20}}>

                        <TouchableOpacity onPress={() =>  this.changeLanguage('Indonesia') }>
                            <Text style={styles.languageText}>Indonesia</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() =>  this.changeLanguage('English') }>
                            <Text style={styles.languageText}>English</Text>
                        </TouchableOpacity>
                        <TouchableHighlight onPress={() => this.setModalVisible(false)}>
                            <Text style={styles.languageText}>Close</Text>
                        </TouchableHighlight>

                    </View>
                </Modal>

                <View style={styles.header}>
                    <Image source={require('../img/facebookBanner.jpg')} style={styles.banner}/>
                </View>


                <View style={styles.main}>


                    <View style={styles.languages}>

                        <TouchableOpacity onPress={() =>  this.changeLanguage('Indonesia') }>
                            <Text style={styles.languageText}>Indonesia</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() =>  this.changeLanguage('English') }>
                            <Text style={styles.languageText}>English</Text>
                        </TouchableOpacity>
                        <TouchableHighlight onPress={() => this.setModalVisible(true)}>
                            <Text style={styles.languageText}>Others</Text>
                        </TouchableHighlight>
                        
                    </View>
                    
                    <View style={styles.formWrapper}>
                        <TextInput placeholder={this.state.inputEmail} placeholderTextColor='#aeaeae' underlineColorAndroid="lightblue" style={styles.textInput}/>
                        <TextInput placeholder={this.state.inputPassword} placeholderTextColor='#aeaeae' secureTextEntry={true} underlineColorAndroid="lightblue" style={styles.textInput}/>
                    </View>

                    <View style={{marginTop:10}}>
                        <Button onPress={() => this.goToScreen('Home')}  title={this.state.buttonLogin} style={styles.button} />
                    </View>

                    <View>
                        <Text style={[styles.link,styles.center]}>{this.state.textForgottenPassword}</Text>
                    </View>

                    <View style={styles.textOrWrapper}>

                        <View style={styles.hr}/>
                        <View><Text>{this.state.textOr}</Text></View>
                        <View style={styles.hr}/>

                    </View>
                    
                    <View>
                        <View style={styles.width80}>
                            <Button title={this.state.buttonCreateNewAccount} color="green"/>
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
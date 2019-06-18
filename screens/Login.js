import React, { Component } from 'react';
import {
    Text,
    TextInput,
    Button,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    Modal,
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

    setModalVisible = (visible) => {
        this.setState({
            modalVisible : visible
        });
    }

    indonesian = () => {
        this.setState({
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

    english = () => {
        this.setState({
            inputEmail : "Mobile Number or Email Address",
            inputPassword : "Password",
            buttonLogin : 'Log In',
            textForgottenPassword : 'Forgotten Password?',
            textOr : 'or',
            buttonCreateNewAccount : 'Create New Account',
            close: 'Close',
            others : 'Others'
        });
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
                <Modal animationType="slide" transparent={false} visible={this.state.modalVisible}>
                    <View style={{padding:20}}>
                        <TouchableOpacity>
                            <Text>Afrikaans</Text>
                        </TouchableOpacity>
                        <TouchableHighlight onPress={() => {this.setModalVisible(false)}}>
                            <Text style={[styles.language,styles.link,{fontSize:12}]}>{this.state.close}</Text>
                        </TouchableHighlight>
                    </View>
                </Modal>
                <View style={styles.header}>
                    <Image source={require('../img/facebookBanner.jpg')} style={styles.banner}/>
                </View>

                <View style={styles.main}>
                    <View style={styles.languages}>
                        <TouchableOpacity onPress={this.english}>
                            <Text style={[styles.language,styles.link,{fontSize:12}]}>English</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.indonesian}>
                            <Text style={[styles.language,styles.link,{fontSize:12}]}>&bull; Bahasa indonesia</Text>
                        </TouchableOpacity>
                        <TouchableHighlight onPress={() => {this.setModalVisible(true)}}>
                            <Text style={[styles.language,styles.link,{fontSize:12}]}>&bull; {this.state.others}...</Text>
                        </TouchableHighlight>
                    </View>
                    
                    <View style={styles.formWrapper}>
                        <View>
                            <TextInput placeholder={this.state.inputEmail} placeholderTextColor='#aeaeae' underlineColorAndroid="lightblue" style={styles.textInput}/>
                        </View>
                        <View>
                            <TextInput placeholder={this.state.inputPassword} placeholderTextColor='#aeaeae' secureTextEntry={true} underlineColorAndroid="lightblue" style={styles.textInput}/>
                        </View>
                    </View>
                    <View style={{marginTop:10}}>
                        <Button onPress={() => this.goToScreen('NewsFeed')}  title={this.state.buttonLogin} style={styles.button} />
                    </View>
                    <View>
                        <Text style={[styles.link,styles.center,{marginTop:10, fontSize:12}]}>{this.state.textForgottenPassword}</Text>
                    </View>
                    <View style={styles.textOrWrapper}>
                        <View style={styles.hr}/>
                        <View>
                            <Text>{this.state.textOr}</Text>
                        </View>
                        <View style={styles.hr}>
                            <Text>&nbsp;</Text>
                        </View>
                    </View>
                    <View style={{alignItems:'center',alignContent:'flex-end',marginTop:20}}>
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
        width:'80%',
    },
      
});
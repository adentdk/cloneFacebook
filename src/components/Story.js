import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';

class Story extends Component {
    render()
    {
        const data = this.props.data.map(function(item, index){
            return (
                <View style={styles.storyItems} key={index}>
                  <Image source={{uri : item.statusFoto }} style={styles.storyFoto} />
                  <Image source={{uri : item.profileFoto }} style={[styles.profileFoto,styles.storyProfileFoto]}/>
                  <Text style={styles.storyTitle}>{item.name}</Text>
                </View>
            );
        });

        return(
            <ScrollView horizontal={true}>

                <View style={styles.story}>
                    <View style={styles.storyItems}>
                        <Image source={{uri : 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg' }} style={styles.storyFoto} />
                        <Image source={require('../img/plus.png')} style={[styles.profileFoto,styles.storyProfileFoto]}/>
                        <Text style={styles.storyTitle}>Add to Story</Text>
                    </View>

                    {data}

                </View>
            </ScrollView>
        )
    }
}

export default Story;

const styles = StyleSheet.create({
    story: {
        height: 210,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        paddingBottom: 10,
        marginTop: 7,
      },
      storyItems: {
        backgroundColor: '#bebebe',
        width: 100,
        height: 160,
        marginHorizontal: 3,
        borderRadius: 10,
        position: 'relative',
      },
      storyProfileFoto: {
        position: 'absolute',
        top:5,
        left:5,
      },
      storyFoto: {
        width: 100,
        height: 160,
        marginRight: 5,
        borderRadius: 10,
        position: 'absolute',
        left:0,
        top:0,
        right:0,
        bottom:0,
      },
      storyTitle: {
        color: '#fff',
        position: 'absolute',
        bottom:5,
        left:5,
        shadowColor: 'rgba(0,0,0,0.7)',
        shadowRadius: 1,
      },
      
        profileFoto: {
            width: 45,
            height:45,
            borderRadius: 25,
            marginLeft: 0,
            marginRight: 5,
        },
})
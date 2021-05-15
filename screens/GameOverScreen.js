import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

//import Color from '../Constants/color'



const GameOverScreen = props => {
    
   
    return(
        <View style={styles.screen}>
           <Text style={styles.imageText} > The game is over</Text>
           <View style={styles.imageContainer} >
            <Image
                style={styles.image} 
                source={require('../assets/success.png')}
               /* source={{uri:'https/....'}}*/
                resizeMode='cover'
            />
           </View>
           
           <Text style={styles.textContain} > Number of rounds: <Text  style={styles.innterText} >{props.roundsNumber}</Text></Text>
           <Text style={styles.textContain} > Number was: <Text  style={styles.innterText} >{props.userNumber}</Text> </Text>
           <Button title='New Game' onPress={props.onRestart}></Button>
        </View>
        
    )
};


const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    image:{
        width: '100%',
        height:'100%',        
    },
    imageContainer:{
        width: '80%',
        height: 300,  
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
    },
    imageText:{
        fontFamily: 'open-sans-bold',
        fontSize:28,
        paddingBottom:10
        
    },
    innterText:{
        color: Colors.primary,
       
    },
    textContain:{
        paddingVertical: 10,
        fontSize:18
    }
 
});

export default GameOverScreen;
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';


const Card = props => {
    return(
        <View style={{...styles.card, ...props.style}} >
            {props.children}
        </View>
    )
};

const styles = StyleSheet.create({
    card: {
     
        padding: 20,
        borderRadius:10,
        backgroundColor: 'white',
        //shadow only on ios
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2   
        },
        shadowRadius: 6,
        shadowOpacity: 0.26,        
        // only android
        elevation:5,
    },
   
});

export default Card;
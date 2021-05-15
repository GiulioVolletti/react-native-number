import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Color from '../Constants/color'


const Input = props => {
    return(
        <View style={styles.container}>
            <Text style={styles.number}>{props.children}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: Color.accent,
        borderRadius:10,
        padding: 10,
        alignItems: 'center',
        marginVertical:10,
        justifyContent:'center'

    },
    number:{
        color: Color.accent,
        fontSize: 22,
    }
   
});

export default Input;
import React from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';

const BodyText = props => <Text style={style.body}>{props.children}</Text>

const style = StyleSheet.create({
    body:{
        fontFamily: 'open-sans',
    }
})

export default BodyText;
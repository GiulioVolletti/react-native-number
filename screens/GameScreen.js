import React, {useState} from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
//import Color from '../Constants/color'

import NumberContainer from '../component/NumberContainer';
import Card from '../component/Card';


const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) +min;
    if (rndNum === exclude) {
        return  generateRandomBetween = (min, max, exclude)
    } else {
        return rndNum;
    }
}

const GameScreen = props => {
    const [ currentGuest, setCurrentGuess] = useState(generateRandomBetween(1, 100, props.userChoise))
    return(
        <View style={styles.screen}>
            <Text>Opponent's Guest</Text>
            <NumberContainer>{currentGuest}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <Button title='Lower' onPress={()=>{}} />
                <Button title='Greater' onPress={()=>{}} />
            </Card>
        </View>
        
    )
};


const styles = StyleSheet.create({
    screen:{
        flex: 1,
        padding:10,
        alignItems:'center'
    },
    buttonContainer:{
        flexDirection:'row',
        justifyContent: 'space-around',
        marginTop:20,
        width: 300,
        maxWidth:'80%'
    }
});

export default GameScreen;
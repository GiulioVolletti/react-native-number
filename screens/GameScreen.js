import React, {useState, useRef, useEffect} from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
//import Color from '../Constants/color'

import NumberContainer from '../component/NumberContainer';
import Card from '../component/Card';



const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) {
      return generateRandomBetween(min, max, exclude);
    } else {
      return rndNum;
    }
};

const GameScreen = props => {
    const [ currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, props.userChoise));
    const [ rounds, setRounds] = useState(0);
    const currentLow = useRef(1);
    const currentHigh = useRef(100);
    const {userChoice,onGameOver} = props;
    useEffect(()=>{
        if (currentGuess === props.userChoise) {
            props.onGameOver(rounds);
        }
    }, [currentGuess,userChoice,onGameOver])

    const nextGuessHandler = direction => {
        if ((direction === 'lower' && currentGuess < props.userChoise) || ( direction === 'greater' && currentGuess > props.userChoise)) {
            Alert.alert('Don\'t lie', 'you know that is wrong...', [{text:'Sorry', style:'cancel'}])
            return;
        }
        if (direction === 'lower') {
            currentHigh.current = currentGuess;
        }else{
            currentLow.current = currentGuess;
        }
        const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess);
        setCurrentGuess(nextNumber);
        setRounds(currentRounds => currentRounds + 1)
    };
    return(
        <View style={styles.screen}>
            <Text>Opponent's Guest</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <Button title='Lower' onPress={nextGuessHandler.bind(this, 'lower')} />
                <Button title='Greater'  onPress={nextGuessHandler.bind(this, 'greater')} />
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
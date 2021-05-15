import React, {useState} from 'react';
import { StyleSheet, View, Text, TextInput,Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import Card from '../component/Card'
import Color from '../Constants/color'
import Input from '../component/Input'
import NumberContainer from '../component/NumberContainer'
import BodyText from '../component/BodyText'


const StartGameScreen = props => {
    const [enteredValue, setEnteredValue]= useState('');
    const [confirm, setConfirm]= useState(false);
    const [selectNumber, setSelectNumber]= useState();

    const numberInputTextHandler = inputText =>{ 
        
        {/* replace every not a number globaly in text and replace with empty string */ }
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    };

    const resetInputHandler = () =>{        
       setEnteredValue('');
       setConfirm(false);
    };
    const confirmInputHandler = () =>{  
        const choseNumber = parseInt(enteredValue);
        if(isNaN(choseNumber) || choseNumber <= 0 || choseNumber > 99) {
            Alert.alert('Invalid number!','The number betwen 1-99', [{text:'Okay', style:'destructive', onPress: resetInputHandler}])
            return;
        } 
        setConfirm(true);
        setSelectNumber(choseNumber);
        setEnteredValue('');
        Keyboard.dismiss();        
    };
    let confirmInputOutrput;
    if(confirm){
        confirmInputOutrput = (
        <Card style={styles.summaryContainer}>
            <BodyText>You slected: </BodyText>
            <NumberContainer>{selectNumber}</NumberContainer>
            <Button title='START GAME' onPress={() => props.onStartGame(selectNumber) }/>
        </Card>)
    }

    return(
        <TouchableWithoutFeedback onPress={()=>{
            Keyboard.dismiss();
        }}>
            <View style={styles.screen} >
            <Text style={styles.title}>Start a New Game</Text>
            <Card style={styles.inputContainer}>
                <Text style={styles.newtext}>Select a number</Text>
                {/* input in game */}
                <Input autoCapitalize='none' 
                    autoCorrect={false} 
                    keyboardType='number-pad' 
                    maxLength={2} 
                    style={styles.input}
                     onChangeText={numberInputTextHandler} 
                     value={enteredValue}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button color={Color.accent} title='Reset'onPress={resetInputHandler}/>  
                    </View>
                    <View style={styles.button}>
                        <Button color={Color.primary} title='Confirm' onPress={confirmInputHandler}/>  
                    </View>
                    
                               
                </View>
            </Card>
            {confirmInputOutrput}
            
        </View>

        </TouchableWithoutFeedback>
        
    )
};

const styles = StyleSheet.create({
    screen: {
        flex:1,        
        padding: 10,       
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    button:{
        width: 100
    },
    buttonContainer:{
        flexDirection:'row',
        width:'100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    inputContainer:{
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',        
    },
    title:{
        fontSize:20,
        marginVertical:10,
        fontFamily: 'open-sans-bold',

    },
    input:{
        width: 50,
        textAlign: 'center',
    },
  
    summaryContainer:{
        marginTop: 20,
        alignItems:'center',
    },
    newtext:{
        fontFamily: 'open-sans-bold',
    }
});

export default StartGameScreen;
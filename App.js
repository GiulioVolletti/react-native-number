import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './component/Header'
import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen'



export default function App() {
  const [useNumber, setUseNumber] = useState()

  const startGameHandler = (selectedNumber)=>{
    setUseNumber(selectedNumber)
  }

  let content = <StartGameScreen onStartGame={startGameHandler}/>;

  if (useNumber){
    content = <GameScreen userChoice={useNumber}/>
  }

  return (
    <View style={styles.screen} >
      <Header title='Guess Number' />
      {content}      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
 
});

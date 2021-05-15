import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './component/Header'
import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen'
import GameOverScreen from './screens/GameOverScreen'

import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans' : require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold' : require('./assets/fonts/OpenSans-Bold.ttf')
  });
}



export default function App() {
  const [useNumber, setUseNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);

  const [dataLoaded, setDataLoader]= useState(false)
  //fetchFonts();
  if(!dataLoaded){
    return <AppLoading startAsync={fetchFonts} onFinish={()=> setDataLoader(true)} onError={(err)=> console.log(err)}/>;
  }

  const configureNewGameHandler = () =>{
    setGuessRounds(0);
    setUseNumber(null);
  }

  const startGameHandler = (selectedNumber)=>{
    setUseNumber(selectedNumber);
    setGuessRounds(0)
  }
  const gameOverHandler = (numOfRound)=>{
    setGuessRounds(numOfRound)
  }

  let content = <StartGameScreen onStartGame={startGameHandler} />;

  if (useNumber && guessRounds <= 0){
    content = <GameScreen userChoise={useNumber} onGameOver={gameOverHandler}/>
  } else if (guessRounds > 0) {
    content = <GameOverScreen roundsNumber={guessRounds} userNumber={useNumber} onRestart={configureNewGameHandler}/>
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

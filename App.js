import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import SignInScreen from './src/screens/SignInScreen';


const App = () => {

  return (
    <SafeAreaView style={styles.root}>
        <SignInScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root :{
    flex: 1,
  }
})


export default App;

import React, { useEffect } from 'react';
import StackContainer from './src/navigation';
import messaging from '@react-native-firebase/messaging';
import { requestUserPermission } from '../Staker/src/utils/pushnotification_helper'
import SplashScreen from 'react-native-splash-screen';
import { StatusBar } from 'react-native';

function App() {
  useEffect(() => {
    SplashScreen.hide()
    messaging()
      .requestPermission()
      .then(() => {
        console.log('Permission granted');
      })
      .catch(error => {
        console.log('Permission denied', error);
      });
  }, []);

  useEffect(() => {
    requestUserPermission();
  }, [])

  return (
    <>
      <StackContainer />
      <StatusBar
        backgroundColor='#0A0B0F'
        barStyle='light-content'
        hidden={false} />
    </>
  );
}

export default App;
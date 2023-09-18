import React, { useEffect } from 'react';
import StackContainer from './src/navigation';
import messaging from '@react-native-firebase/messaging';
import { requestUserPermission } from '../Staker/src/utils/pushnotification_helper'
import LogType from './src/component/LogtypeModal';
import SplashScreen from 'react-native-splash-screen';

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
    </>
  );
}

export default App;
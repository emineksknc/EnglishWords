import React, {useEffect, useState} from 'react';
import {SafeAreaProvider} from "react-native-safe-area-context";
import { Alert } from 'react-native';
import MyStack from './navigation';
import {NavigationContainer} from '@react-navigation/native';


const App = () => {

 
  return (
    <SafeAreaProvider>
      {/* Rest of your app code */}
      <MyStack />
    </SafeAreaProvider>

  );
};

export default App;

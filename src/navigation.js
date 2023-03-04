
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


import HomeScreen from './views/home'
import AddScreen from './views/add';
import ListScreen from './views/list';
import TestScreen from './views/test';


const Stack = createNativeStackNavigator();

function MyStack () {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerTitleAlign: "center", headerShown: false}}
        />
        <Stack.Screen name="Add Word" component={AddScreen} options={{headerTitleAlign: "center", headerShown: false}}/>
        <Stack.Screen name="List Word" component={ListScreen} />
        <Stack.Screen name="Start Test" component={TestScreen} />
        
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack

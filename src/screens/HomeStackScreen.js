import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// components
import { HomeScreen } from './Home/HomeScreen';


export const HomeStackScreen = () => {
  const HomeStack = createStackNavigator();
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'My home' }}
      />
    </HomeStack.Navigator>
  );
 }
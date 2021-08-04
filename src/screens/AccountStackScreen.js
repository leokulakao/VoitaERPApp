import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// components
import { AccountScreen } from './Account/AccountScreen';

export const AccountStackScreen = () => {
  const AccountStack = createStackNavigator();
  return (
    <AccountStack.Navigator>
      <AccountStack.Screen
        name="Account"
        component={AccountScreen}
        options={{ title: 'Account' }}
      />
    </AccountStack.Navigator>
  );
}
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// components
import { SellingListScreen } from './SellingList/SellingListScreen';

export const SellingListStackScreen = () => {
  const SellingListStack = createStackNavigator();
  return (
    <SellingListStack.Navigator>
      <SellingListStack.Screen
        name="Selling List"
        component={SellingListScreen}
        options={{ title: 'Selling List' }}
      />
    </SellingListStack.Navigator>
  );
}
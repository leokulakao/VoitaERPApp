import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// components Screens
import { HomeStackScreen } from './screens/HomeStackScreen';
import { SellingListStackScreen } from './screens/SellingListStackScreen';
import { AccountStackScreen } from './screens/AccountStackScreen';

// modals
import { LoginModal } from './modals/LoginModal';

const MainStack = createStackNavigator();
const Tab = createBottomTabNavigator();


export const AppNavigation = () => {
    return (
        <NavigationContainer>
            <MainStack.Navigator>
                <MainStack.Screen
                    name='MainTabs'
                    component={MainTabs}
                    options={{headerShown: false}}
                />
            </MainStack.Navigator>
        </NavigationContainer>
        
    );
}

export const MainTabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeStackScreen} />
            <Tab.Screen name="Selling List" component={SellingListStackScreen} />
            <Tab.Screen name="Account" component={AccountStackScreen} />
        </Tab.Navigator> 
    );
}
import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { useDispatch } from 'react-redux';
import { setNavigationRef } from '../../store/navigation/navigation.actions';

import { LoginModal } from '../../modals/LoginModal';

export const HomeScreen = ({ navigation }) => {
    const dispatch = useDispatch();

    const [loginVisible, setLoginVisible] = useState(false);

    useEffect(() => {
        dispatch(setNavigationRef(navigation));
    }, []);

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <LoginModal
                    visible={loginVisible}
                />
            </View>
        </SafeAreaView>
    );
  }
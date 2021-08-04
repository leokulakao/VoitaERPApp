import React from 'react';
import { View, Text, Modal, SafeAreaView, Button, TextInput } from 'react-native';

export const LoginModal = ({visible}) => {
    return (
        <Modal animationType='slide' visible={visible}>
            <SafeAreaView style={{flex: 1}}>
                <View>
                    <Text>Login Modal</Text>
                </View>
            </SafeAreaView>
        </Modal>
    );
}
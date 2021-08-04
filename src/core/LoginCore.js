import React, { useEffect } from 'react';
import { View } from 'react-native';

import { useSelector } from 'react-redux';

export const LogicCore = () => {
    const navigationRef = useSelector(state => state.navigation.navigationRef);

    useEffect(() => {
        if (!!navigationRef) {
            console.log(navigationRef);
        }
    }, [navigationRef]);

    return (
        <View></View>
    )
};


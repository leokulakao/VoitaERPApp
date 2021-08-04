/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type { Node } from 'react';
import { SafeAreaView } from 'react-native';

import { Provider } from 'react-redux';
import store from './src/store';

import { LogicCore } from './src/core/LoginCore';
import { AppNavigation } from './src/AppNavigation';

const App: () => Node = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Provider store={store}>
        <LogicCore></LogicCore>
        <AppNavigation></AppNavigation>
      </Provider>
    </SafeAreaView>
  );
};

export default App;

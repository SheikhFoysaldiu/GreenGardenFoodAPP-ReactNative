import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import 'react-native-gesture-handler';


import MainTabNavigator from './src/component/Navigator/Main/MainNav.component';
import { StyleSheet } from 'react-native';

import { Provider } from 'react-redux';
import store from './src/redux/store';










const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainTabNavigator />
      </NavigationContainer>
    </Provider>
  );


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
  },
});

export default App;















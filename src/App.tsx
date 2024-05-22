import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {PaperProvider, Text} from 'react-native-paper';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {App_Navigation} from './App_Navigation';

export const App = () => {
  return (
    <PaperProvider settings={{icon: props => <Icon {...props} />}}>
      <NavigationContainer>
        <App_Navigation />
      </NavigationContainer>
    </PaperProvider>
  );
};

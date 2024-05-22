import React, {useState} from 'react';
import {AuthNavigation} from './navigation/AuthNavigation';
import {Text} from 'react-native-paper';
import {SafeAreaView, View} from 'react-native';

export const App_Navigation = () => {
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  return (
    <>
      {userLoggedIn ? (
        <View>
          <Text>Hola mundooooo</Text>
        </View>
      ) : (
        <AuthNavigation />
      )}
    </>
  );
};

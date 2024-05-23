import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {RootStackParamList} from '../types/navigationTypes';
// import {Home} from '../presentation/screens/auth-screens';
import {Home} from '../presentation/screens/auth-screens/Home';
import LoginScreen from '../presentation/screens/auth-screens/Login';
import {CreateAccount} from '../presentation/screens/auth-screens/CreateAccount';
const Stack = createStackNavigator<RootStackParamList>();

export const AuthNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: '#fff',
        },
        cardStyleInterpolator: ({current}) => ({
          cardStyle: {
            opacity: current.progress,
          },
        }),
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="CreateAccount" component={CreateAccount} />
    </Stack.Navigator>
  );
};

import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {RootStackParamList} from '../types/navigationTypes';
// import {Home} from '../presentation/screens/auth-screens';
import {Home} from '../presentation/screens/auth-screens/Home';
import LoginScreen from '../presentation/screens/auth-screens/Login';
import {CreateAccountScreen} from '../presentation/screens/auth-screens/CreateAccount';
import ForgotPassword from '../presentation/screens/auth-screens/ForgotPassword';
import OtpVerification from '../presentation/screens/auth-screens/OTPVerification';
// import {LoadingScreen} from '../presentation/screens/Loaders/MainLoader';
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
      {/* <Stack.Screen name="Loading" component={LoadingScreen} /> */}
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="CreateAccount" component={CreateAccountScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="OTPVerification" component={OtpVerification} />
    </Stack.Navigator>
  );
};

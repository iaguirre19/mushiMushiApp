import {StackNavigationProp} from '@react-navigation/stack';

interface User {
  id: string;
  name: string;
  email: string;
}

export type RootStackParamList = {
  Home: undefined;
  AuthUser: undefined;
  Dashboard: {data: {user: User; isLoggedIn: boolean; isLoading: boolean}};
  ForgotPassword: undefined;
  Login: undefined;
  CreateAccount: undefined;
  OTPVerification: undefined;
};

export type RootNavigationProp = StackNavigationProp<RootStackParamList>;

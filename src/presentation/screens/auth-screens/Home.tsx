import React from 'react';
import {Image, View} from 'react-native';
import {Button, Text} from 'react-native-paper';
import {authGlobalStyles, colors} from '../../theme/authGlobalStyles';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {RootNavigationProp} from '../../../types/navigationTypes';
import CustomButton from '../../components/CustomButton';

type Props = {
  navigation: RootNavigationProp;
};

export const Home: React.FC<Props> = ({navigation}) => {
  const handleLogin = () => {
    navigation.navigate('Login');
  };

  const handleCreateAccount = () => {
    navigation.navigate('CreateAccount');
  };

  return (
    <View style={[authGlobalStyles.container, {width: responsiveWidth(100)}]}>
      <View style={authGlobalStyles.topContent}>
        <Image
          source={require('../../../assets/img/logo.png')}
          style={[
            authGlobalStyles.topContentCardImage,
            {width: responsiveWidth(60), height: responsiveHeight(35)},
          ]}
        />
      </View>
      <View
        style={[authGlobalStyles.bottomContent, {width: responsiveWidth(100)}]}>
        <View
          style={{
            width: '100%',
            marginBottom: responsiveHeight(2.5),
            rowGap: responsiveHeight(1.8),
          }}>
          <Text
            variant="headlineSmall"
            numberOfLines={2}
            style={{
              width: '100%',
              textAlign: 'center',
              alignContent: 'center',
              justifyContent: 'center',
              fontSize: responsiveFontSize(2.7),
            }}>
            Bienvenido a <Text>mushi mushi</Text>{' '}
            <Icon
              style={{color: colors.primary}}
              name="creation"
              size={responsiveFontSize(3.25)}
            />
          </Text>
          <Text
            variant="bodyLarge"
            style={{
              width: '100%',
              textAlign: 'center',
              color: colors.subTextColor,
              fontSize: responsiveFontSize(1.8),
            }}>
            Comparte tus creaciones, descubre nuevas ideas y conectate con
            personas apasionadas por el arte de tejer
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignContent: 'center',
            width: '100%',
            marginBottom: responsiveHeight(2),
            rowGap: responsiveHeight(2),
          }}>
          <CustomButton
            iconName="login"
            text="Iniciar sesión"
            onPress={handleLogin}
            mode="contained"
          />
          <CustomButton
            iconName="account-plus"
            text="Crear cuenta"
            onPress={handleCreateAccount}
            mode="outlined"
          />
        </View>
      </View>
    </View>
  );
};

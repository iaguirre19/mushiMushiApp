import React from 'react';
import {Image, SafeAreaView, View} from 'react-native';
import {Button, Text} from 'react-native-paper';
import {authGlobalStyles, colors} from '../../theme/authGlobalStyles';
import {Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {RootNavigationProp} from '../../../types/navigationTypes';

type Props = {
  navigation: RootNavigationProp;
};

export const Home: React.FC<Props> = ({navigation}) => {
  const {width, height} = Dimensions.get('window');

  const handleLogin = () => {
    navigation.navigate('Login');
  };

  const handleCreateAccount = () => {
    navigation.navigate('CreateAccount');
  };
  return (
    <View style={[authGlobalStyles.container, {width: width}]}>
      <View style={authGlobalStyles.topContent}>
        <Image
          source={require('../../../assets/img/logo.png')}
          style={authGlobalStyles.topContentCardImage}
        />
      </View>
      <View style={[authGlobalStyles.bottomContent, {width: width}]}>
        <View style={{width: '100%', rowGap: 20}}>
          <Text
            variant="headlineSmall"
            numberOfLines={2}
            style={{
              width: '100%',
              textAlign: 'center',
              alignContent: 'center',
              justifyContent: 'center',
            }}>
            Bienvenido a <Text>mushi mushi</Text>{' '}
            <Icon style={{color: colors.primary}} name="creation" size={26} />
          </Text>
          <Text
            variant="bodyLarge"
            style={{
              width: '100%',
              textAlign: 'center',
              color: colors.subTextColor,
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
            columnGap: 20,
            rowGap: 20,
          }}>
          <Button
            icon={'login'}
            onPress={handleLogin}
            mode="contained-tonal"
            labelStyle={{color: 'white', fontWeight: 'bold'}}
            style={[{backgroundColor: colors.primary}]}>
            Iniciar sesión
          </Button>
          <Button
            icon={'account-plus'}
            onPress={handleCreateAccount}
            mode="outlined"
            labelStyle={{color: colors.tertiary}}
            style={[{borderColor: colors.tertiary}]}>
            Crear cuenta
          </Button>
        </View>
      </View>
    </View>
  );
};

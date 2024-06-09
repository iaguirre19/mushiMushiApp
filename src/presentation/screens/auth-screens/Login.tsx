import React, {useState} from 'react';
import {
  View,
  KeyboardAvoidingView,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Image,
  useWindowDimensions,
} from 'react-native';
import {Button, Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {globalStyles, colors} from '../../theme/authGlobalStyles';
import RememberMeView from '../../components/RemembermeView';
import {RootNavigationProp} from '../../../types/navigationTypes';
import CustomInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButton';

type Props = {
  navigation: RootNavigationProp;
};

const Login: React.FC<Props> = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {width, height} = useWindowDimensions();

  const handleLogin = () => {
    navigation.navigate('Home');
  };

  const handleGoToHome = () => {
    navigation.navigate('Home');
  };

  const handleCreateAccount = () => {
    navigation.navigate('CreateAccount');
  };

  const handleForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'position' : 'height'}
      style={{...styles.container, height: height, width: width}}
      keyboardVerticalOffset={30}>
      <View
        style={{
          flex: 1,
          width: '100%',
          height: '100%',
        }}>
        <View
          style={{
            width: '100%',
            height: responsiveHeight(10),
            alignItems: 'flex-start',
            justifyContent: 'center',
            zIndex: 10,
          }}>
          <TouchableOpacity
            style={{
              ...globalStyles.btnBack,
            }}
            onPress={handleGoToHome}>
            <Icon
              style={{color: colors.primary}}
              name="arrow-left-top"
              size={responsiveFontSize(3)}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '90%',
          }}>
          <View
            style={{
              flex: width > 410 ? 2 : 1,
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: responsiveHeight(10),
              width: '100%',
              height: '100%',
            }}>
            <Image
              source={require('../../../assets/img/logo-naranja.png')}
              style={{
                ...globalStyles.orangeLogo,
                width: responsiveWidth(80),
                height: responsiveHeight(40),
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
            }}>
            <Text
              variant="headlineMedium"
              style={[
                globalStyles.textColor,
                {fontSize: responsiveFontSize(2.5)},
              ]}>
              Bienvenido de nuevo
            </Text>
            <Icon
              style={[{color: colors.primary}]}
              name="creation"
              size={responsiveFontSize(3)}
            />
          </View>
          <Text
            variant="titleMedium"
            style={[
              globalStyles.subText,
              {textAlign: 'center', marginBottom: responsiveHeight(3)},
            ]}>
            Inicia sesión en tu cuenta
          </Text>
          <CustomInput
            placeholder="Ingresa tu correo"
            label="Correo Electrónico"
            iconName="email-outline"
            value={email}
            onChangeText={text => setEmail(text)}
            secureTextEntry={false}
            keyboardType="email-address"
          />
          <CustomInput
            placeholder="Ingresa tu contraseña"
            label="Contraseña"
            iconName="lock-outline"
            value={password}
            onChangeText={text => setPassword(text)}
            secureTextEntry={true}
            keyboardType="default"
          />
          <View
            style={{
              width: '100%',
              justifyContent: 'space-between',
            }}>
            <RememberMeView onPress={handleForgotPassword} />
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
              text="Iniciar Sesión"
              onPress={handleLogin}
              mode="contained"
            />
          </View>
          <TouchableOpacity onPress={handleCreateAccount}>
            <Text style={globalStyles.registerText}>
              ¿No tienes una cuenta?{' '}
              <Text style={{color: colors.primary}}>Crear Cuenta</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: responsiveWidth(6),
    paddingVertical: responsiveHeight(4),
  },
  scrollView: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'red',
    alignContent: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: '100%',
  },
  form: {
    width: '100%',
    alignItems: 'center',
  },
  textInput: {
    height: responsiveHeight(5),
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
    marginBottom: responsiveHeight(2),
    paddingHorizontal: responsiveWidth(2.5),
  },
});

export default Login;

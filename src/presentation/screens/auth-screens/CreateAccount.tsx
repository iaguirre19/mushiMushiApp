import React, {useState} from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  View,
  useWindowDimensions,
  StyleSheet,
} from 'react-native';
import {Text, Button} from 'react-native-paper';
import {colors, globalStyles} from '../../theme/authGlobalStyles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {RootNavigationProp} from '../../../types/navigationTypes';
import CustomInput from '../../components/CustomTextInput';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import CustomButton from '../../components/CustomButton';

type Props = {
  navigation: RootNavigationProp;
};

export const CreateAccountScreen: React.FC<Props> = ({navigation}) => {
  const {width, height} = useWindowDimensions();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const handleGoToHome = () => {
    navigation.navigate('Home');
  };
  const handleGoToLogin = () => {
    navigation.navigate('Login');
  };

  const handleGoOTP = () => {
    navigation.navigate('OTPVerification');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'position' : 'height'}
      style={{...styles.container, height: height, width: width}}
      keyboardVerticalOffset={50}>
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
                width: responsiveWidth(90),
                height: responsiveHeight(90),
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
              Crear cuenta de mushi mushi
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
              {
                textAlign: 'center',
                marginBottom: responsiveHeight(3),
                fontSize: responsiveFontSize(2),
              },
            ]}>
            Por favor, complete los campos de abajo
          </Text>
          <CustomInput
            placeholder="Ingresa tu nombre"
            label="Nombre"
            iconName="account"
            value={name}
            onChangeText={text => setName(text)}
            secureTextEntry={false}
            keyboardType="default"
          />
          <CustomInput
            placeholder="Ingresa tu email"
            label="Email"
            iconName="email-outline"
            value={email}
            onChangeText={text => setEmail(text)}
            secureTextEntry={false}
            keyboardType="email-address"
          />
          <View
            style={{
              marginTop: responsiveHeight(2),
              flexDirection: 'column',
              justifyContent: 'center',
              alignContent: 'center',
              width: '100%',
              marginBottom: responsiveHeight(2),
              rowGap: responsiveHeight(2),
            }}>
            <CustomButton
              iconName="account-plus"
              text="Crear cuenta"
              onPress={handleGoOTP}
              mode="contained"
            />
          </View>
          <TouchableOpacity onPress={handleGoToLogin}>
            <Text style={globalStyles.registerText}>
              ¿Ya tienes una cuenta?{' '}
              <Text style={{color: colors.primary}}>Iniciar Sesión</Text>
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
});

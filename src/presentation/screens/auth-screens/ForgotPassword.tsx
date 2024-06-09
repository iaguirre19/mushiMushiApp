import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Dimensions,
  useWindowDimensions,
} from 'react-native';
import {Button, Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  authGlobalStyles,
  colors,
  globalStyles,
} from '../../theme/authGlobalStyles';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {RootNavigationProp} from '../../../types/navigationTypes';
import CustomInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButton';

type Props = {
  navigation: RootNavigationProp;
};

const ForgotPasswordScreen: React.FC<Props> = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [smallDevice, setSmallDevice] = useState<boolean>(false);

  const {width, height} = useWindowDimensions();

  useEffect(() => {
    if (Dimensions.get('window').width < 412) {
      setSmallDevice(true);
    }
  }, []);

  console.log(smallDevice);

  const handleSendResetLink = () => {
    // Lógica para enviar el enlace de restablecimiento de contraseña
  };

  const handleGoBack = () => {
    navigation.goBack();
  };
  const handleGoToHome = () => {
    navigation.navigate('Home');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={[styles.container, {flex: 1}]}
      keyboardVerticalOffset={30}>
      <View style={{flex: 1, width: '100%', height: '100%'}}>
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
            onPress={handleGoBack}>
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
            height: '80%',
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
              marginBottom: responsiveHeight(1),
            }}>
            <Text
              variant="headlineMedium"
              style={[
                globalStyles.textColor,
                {fontSize: responsiveFontSize(2.5)},
              ]}>
              ¿Olvidaste tu contraseña?
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
            Ingresa tu correo electrónico para restablecer tu contraseña
          </Text>
          <CustomInput
            label="Correo Electrónico"
            placeholder="Ingresa tu correo"
            value={email}
            onChangeText={text => setEmail(text)}
            iconName="email-outline"
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
              text="Crear Cuenta"
              onPress={handleGoToHome}
              mode="contained"
            />
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 32,
  },
  responsiveContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  responsiveHeader: {
    width: '100%',
    height: '10%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    zIndex: 10,
  },
  responsiveContent: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '90%',
  },
});
export default ForgotPasswordScreen;

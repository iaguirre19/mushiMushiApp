import React, {useState, useEffect} from 'react';
import {
  View,
  KeyboardAvoidingView,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Image,
  useWindowDimensions,
} from 'react-native';
import {Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {globalStyles, colors} from '../../theme/authGlobalStyles';
import RememberMeView from '../../components/RemembermeView';
import {RootNavigationProp} from '../../../types/navigationTypes';
import {useForm, Controller, set} from 'react-hook-form';
import CustomButton from '../../components/CustomButton';
import TextInputWithIcon from '../../components/TextInputWithIcon';
import {authenticateUser} from '../../../api/api';
import BackBtn from '../../components/BackBtn';

type Props = {
  navigation: RootNavigationProp;
};

interface FormData {
  email: string;
  password: string;
}

const Login: React.FC<Props> = ({navigation}) => {
  const {width, height} = useWindowDimensions();
  const [error, setError] = useState<string | null>(null);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      const response = await authenticateUser(data.email, data.password);
      console.log(response);
      if (response) {
        navigation.navigate('Home');
      }
    } catch (error) {
      console.log(error);
      setError('Usuario o contraseña incorrectos, intenta de nuevo');
    }
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
      keyboardVerticalOffset={0}>
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
          <BackBtn navigation={navigation} />
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
                width: responsiveWidth(140),
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
                {fontSize: responsiveFontSize(3.5)},
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
            variant="titleLarge"
            style={[
              globalStyles.subText,
              {textAlign: 'center', marginBottom: responsiveHeight(3.4)},
            ]}>
            Inicia sesión en tu cuenta
          </Text>
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInputWithIcon
                label="Correo Electrónico"
                iconName="email-outline"
                placeholder="Ingresa tu correo"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                keyboardType="email-address"
                error={errors.email ? errors.email.message : null}
              />
            )}
            name="email"
            rules={{
              required: 'Email es requerido.',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Formato de correo electrónico inválido',
              },
            }}
            defaultValue=""
          />

          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInputWithIcon
                label="Contraseña"
                iconName="lock-outline"
                placeholder="Ingresa tu contraseña"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                secureTextEntry
                error={errors.password ? 'Contraseña es requerida.' : null}
              />
            )}
            name="password"
            rules={{required: 'Contraseña es requerida.'}}
            defaultValue=""
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
              onPress={handleSubmit(onSubmit)}
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
  errorAuth: {
    position: 'absolute',
    bottom: responsiveHeight(5),
    right: responsiveWidth(-14),
    width: responsiveWidth(50),
    height: responsiveHeight(6),
    backgroundColor: 'white',
    borderRadius: responsiveWidth(1),
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
  },
  textInput: {
    height: responsiveHeight(6),
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
    marginBottom: responsiveHeight(2),
    paddingHorizontal: responsiveWidth(2.5),
    borderRadius: 5,
    paddingLeft: responsiveWidth(10),
    fontSize: responsiveFontSize(1.6),
  },
  errorText: {
    color: 'red',
    left: responsiveWidth(2),
    bottom: responsiveHeight(2),
    width: '100%',
    fontSize: responsiveFontSize(1.6),
    fontWeight: '600',
    marginTop: responsiveHeight(0.5),
  },
  textInputLabel: {
    fontSize: responsiveFontSize(2),
    marginBottom: responsiveHeight(1.2),
    textAlign: 'left',
    width: '100%',
    fontWeight: 'semibold',
  },
});

export default Login;

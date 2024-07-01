import React, {useState} from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  View,
  useWindowDimensions,
  StyleSheet,
  Keyboard,
} from 'react-native';
import {Text} from 'react-native-paper';
import {colors, globalStyles} from '../../theme/authGlobalStyles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {RootNavigationProp} from '../../../types/navigationTypes';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import CustomButton from '../../components/CustomButton';
import {useForm, Controller} from 'react-hook-form';
import {createUser} from '../../../api/api';
import TextInputWithIcon from '../../components/TextInputWithIcon';
import BackBtn from '../../components/BackBtn';

type Props = {
  navigation: RootNavigationProp;
};

interface FormData {
  name: string;
  email: string;
}

export const CreateAccountScreen: React.FC<Props> = ({navigation}) => {
  const {width, height} = useWindowDimensions();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormData>();
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (data: FormData) => {
    try {
      Keyboard.dismiss();
      const response = await createUser(data);
      if (response) {
        setTimeout(() => {
          navigation.navigate('OTPVerification');
        }, 1000);
      } else {
        setError('Usuario o contraseña incorrectos, intenta de nuevo');
      }
    } catch (error) {
      console.log(error);
      setError('Usuario o contraseña incorrectos, intenta de nuevo');
    }
  };

  const handleGoToHome = () => {
    navigation.navigate('Home');
  };
  const handleGoToLogin = () => {
    navigation.navigate('Login');
  };

  const handleGoOTP = () => navigation.navigate('OTPVerification');
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
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInputWithIcon
                label="Ingresa tu nombre completo"
                iconName="account-outline"
                placeholder="Ingresa tu nombre"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                keyboardType="default"
                error={errors.name ? errors.name.message : null}
              />
            )}
            name="name"
            rules={{
              required: 'Nombre es requerido.',
            }}
            defaultValue=""
          />
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
              // onPress={handleSubmit(onSubmit)}
              onPress={() => navigation.navigate('OTPVerification')}
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

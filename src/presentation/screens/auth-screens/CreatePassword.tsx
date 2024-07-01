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
import {Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {globalStyles, colors} from '../../theme/authGlobalStyles';
import {RootNavigationProp} from '../../../types/navigationTypes';
import CustomButton from '../../components/CustomButton';
import {Controller, useForm} from 'react-hook-form';
import TextInputWithIcon from '../../components/TextInputWithIcon';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import BackBtn from '../../components/BackBtn';

type Props = {
  navigation: RootNavigationProp;
};

interface PasswordData {
  password: string;
  confirmPassword: string;
}

export const CreatePassword: React.FC<Props> = ({navigation}) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<PasswordData>();
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const {width, height} = useWindowDimensions();
  const handleGoToHome = () => {
    navigation.navigate('Home');
  };
  const handleLogin = () => {
    navigation.navigate('Home');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'position' : 'height'}
      style={{...styles.container, height: height, width: width}}
      keyboardVerticalOffset={50}>
      <View style={{flex: 1, width: '100%', height: '100%'}}>
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
              Crear contraseña
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
            Por favor, complete los campos de abajo
          </Text>
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInputWithIcon
                label="Ingresa tu contraseña"
                iconName="lock-outline"
                placeholder="Ingresa tu contraseña"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                keyboardType="default"
                secureTextEntry
                error={errors.password ? errors.password.message : null}
              />
            )}
            name="password"
            rules={{
              required: 'Contraseña es requerida.',
              minLength: {
                value: 8,
                message: 'La contraseña debe tener al menos 8 caracteres',
              },
            }}
            defaultValue=""
          />
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInputWithIcon
                label="Confirma tu contraseña"
                iconName="lock-outline"
                placeholder="Confirma tu contraseña"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                keyboardType="default"
                secureTextEntry
                error={
                  errors.confirmPassword ? errors.confirmPassword.message : null
                }
              />
            )}
            name="confirmPassword"
            rules={{
              required: 'Confirma tu contraseña',
              minLength: {
                value: 8,
                message: 'La contraseña debe tener al menos 8 caracteres',
              },
              validate: value =>
                value === password || 'Las contraseñas no coinciden',
            }}
            defaultValue=""
          />
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
              iconName="account-plus"
              text="Crear Cuenta"
              onPress={handleLogin}
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

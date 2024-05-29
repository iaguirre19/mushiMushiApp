import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import {Button, Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomInput from '../../components/CustomInput';
import {
  authGlobalStyles,
  colors,
  globalStyles,
} from '../../theme/authGlobalStyles';
import {RootNavigationProp} from '../../../types/navigationTypes';

type Props = {
  navigation: RootNavigationProp;
};

const ForgotPasswordScreen: React.FC<Props> = ({navigation}) => {
  const [email, setEmail] = useState('');

  const handleSendResetLink = () => {
    // Lógica para enviar el enlace de restablecimiento de contraseña
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}
      keyboardVerticalOffset={10} // Ajuste opcional para desplazamiento vertical
    >
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          width: '100%',
          height: '100%',
        }}>
        <View style={globalStyles.inner}>
          <View style={[globalStyles.mainContent]}>
            <View style={[globalStyles.header]}>
              <TouchableOpacity
                style={globalStyles.btnBack}
                onPress={handleGoBack}>
                <Icon
                  style={{color: colors.primary}}
                  name="arrow-left-top"
                  size={26}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                alignContent: 'center',
                justifyContent: 'flex-start',
                // backgroundColor: 'red',
                flex: 11,
              }}>
              <View style={globalStyles.logoContainer}>
                <Image
                  source={require('../../../assets/img/logo-naranja.png')}
                  style={globalStyles.orangeLogo}
                />
              </View>
              <Text
                variant="headlineMedium"
                style={[globalStyles.textColor, {textAlign: 'center'}]}
                numberOfLines={2}>
                ¿Olvidaste tu contraseña?
              </Text>
              <Text
                variant="titleMedium"
                style={[
                  globalStyles.subText,
                  {textAlign: 'center', marginBottom: 20},
                ]}>
                Ingresa tu correo electrónico para restablecer tu contraseña
              </Text>
              <CustomInput
                label="Correo Electrónico"
                placeholder="Ingresa tu correo"
                value={email}
                onChangeText={text => setEmail(text)}
                icon="email"
              />
              <Button
                mode="contained"
                onPress={handleSendResetLink}
                style={[
                  {
                    backgroundColor: colors.tertiary,
                    paddingVertical: 4,
                    marginTop: 20,
                  },
                ]}
                icon="send">
                Enviar enlace de restablecimiento
              </Button>
            </View>
          </View>
        </View>
        {/* <View style={globalStyles.inner}>
          <View style={[globalStyles.header]}>
            <TouchableOpacity
              style={globalStyles.btnBack}
              onPress={handleGoBack}>
              <Icon
                style={{color: colors.primary}}
                name="arrow-left-top"
                size={26}
              />
            </TouchableOpacity>
          </View>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Image
              source={require('../../../assets/img/logo-naranja.png')}
              style={globalStyles.orangeLogo}
            />
          </View>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Text variant="headlineMedium" style={globalStyles.textColor}>
              ¿Olvidaste tu contraseña?
            </Text>
            <Text
              variant="titleMedium"
              style={[globalStyles.subText, {textAlign: 'center'}]}>
              Ingresa tu correo electrónico para restablecer tu contraseña
            </Text>
          </View>
          <CustomInput
            label="Correo Electrónico"
            placeholder="Ingresa tu correo"
            value={email}
            onChangeText={text => setEmail(text)}
            icon="email"
          />

          <View style={[globalStyles.btnContainer, {flex: 1}]}>
            <Button
              mode="contained"
              onPress={handleSendResetLink}
              style={[{backgroundColor: colors.tertiary, paddingVertical: 4}]}
              icon="send">
              Enviar enlace de restablecimiento
            </Button>

            <TouchableOpacity onPress={handleGoBack}>
              <Text style={globalStyles.registerText}>
                Recordaste tu contraseña? Iniciar Sesión
              </Text>
            </TouchableOpacity>
          </View>
        </View> */}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ForgotPasswordScreen;

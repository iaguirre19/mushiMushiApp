import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
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
    <View style={globalStyles.mainContainer}>
      <View
        style={{
          flex: 3,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableOpacity style={globalStyles.btnBack} onPress={handleGoBack}>
          <Icon
            style={[{color: colors.primary}]}
            name="arrow-left-top"
            size={26}
          />
        </TouchableOpacity>
      </View>
      <View style={{flex: 1}}></View>
      <View style={{flex: 1}}>
        <Text variant="headlineMedium" style={globalStyles.textColor}>
          ¿Olvidaste tu contraseña?
        </Text>
        <Text variant="titleMedium" style={globalStyles.subText}>
          Ingresa tu correo electrónico para restablecer tu contraseña
        </Text>
      </View>
      <View style={{flex: 1}}>
        <CustomInput
          label="Correo Electrónico"
          placeholder="Ingresa tu correo"
          value={email}
          onChangeText={text => setEmail(text)}
          icon="email"
        />
      </View>
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
    </View>
  );
};

export default ForgotPasswordScreen;

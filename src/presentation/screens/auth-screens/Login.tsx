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
import RememberMeView from '../../components/RemembermeView';

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Logging in with', email, password);
  };

  return (
    <View style={globalStyles.containerInput}>
      <View
        style={{
          flex: 3,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View style={{flex: 2, marginTop: 60}}></View>
        <TouchableOpacity style={globalStyles.btnBack}>
          <Icon
            style={[{color: colors.primary}]}
            name="arrow-left-top"
            size={26}
          />
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignContent: 'center',
            width: '100%',
            columnGap: 8,
          }}>
          <Text variant="headlineMedium" style={globalStyles.textColor}>
            Bienvenido de nuevo
          </Text>
          <Icon style={[{color: colors.primary}]} name="creation" size={26} />
        </View>

        <Text variant="titleMedium" style={globalStyles.subText}>
          Inicia sesion en tu cuenta
        </Text>
      </View>
      <View style={{flex: 1}}>
        <CustomInput
          label="Correo Electrónico"
          placeholder="Enter your email"
          value={email}
          onChangeText={text => setEmail(text)}
          icon="email"
        />
        <CustomInput
          label="Contraseña"
          placeholder="Enter your password"
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry
          icon="lock"
          password
        />
      </View>
      <View
        style={{
          flex: 0.6,
          justifyContent: 'flex-start',
          //   backgroundColor: 'red',
          marginTop: 8,
        }}>
        <RememberMeView />
      </View>
      <View style={[globalStyles.btnContainer, {flex: 1}]}>
        <Button
          mode="contained"
          onPress={handleLogin}
          style={[
            authGlobalStyles.btnStyles,
            {backgroundColor: colors.tertiary},
          ]}
          icon="login">
          Iniciar Sesión
        </Button>
        <Text style={globalStyles.registerText}>
          ¿No tienes una cuenta? Crear Cuenta
        </Text>
      </View>
    </View>
  );
};

export default LoginScreen;

// onPress={() => navigation.navigate('RegisterScreen')}

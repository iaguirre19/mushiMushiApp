import React, {useState, useEffect} from 'react';
import {
  View,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Text, Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Asegúrate de importar el icono correctamente
import {globalStyles, colors} from '../../theme/authGlobalStyles';
import CustomInput from '../../components/CustomInput';
import RememberMeView from '../../components/RemembermeView';
import {RootNavigationProp} from '../../../types/navigationTypes';

type Props = {
  navigation: RootNavigationProp;
};

const App: React.FC<Props> = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
    // Lógica para enviar el enlace de restablecimiento de contraseña
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
      keyboardVerticalOffset={60} // Ajuste opcional para desplazamiento vertical
    >
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={globalStyles.inner}>
          <View style={[globalStyles.header]}>
            <TouchableOpacity
              style={globalStyles.btnBack}
              onPress={handleGoToHome}>
              <Icon
                style={{color: colors.primary}}
                name="arrow-left-top"
                size={26}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'flex-start',
              width: '100%',
            }}>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('../../../assets/img/logo-naranja.png')}
                style={styles.orangeLogo}
              />
            </View>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
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
                <Icon
                  style={[{color: colors.primary}]}
                  name="creation"
                  size={26}
                />
              </View>
              <Text
                variant="titleMedium"
                style={[globalStyles.subText, {marginBottom: 40}]}>
                Inicia sesión en tu cuenta
              </Text>
            </View>
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
              secureTextEntry={true}
              icon="lock"
              password
            />
            <RememberMeView onPress={handleForgotPassword} />
            <View style={[globalStyles.btnContainer, {flex: 1, marginTop: 60}]}>
              <Button
                mode="contained"
                onPress={handleLogin}
                style={[{backgroundColor: colors.tertiary, paddingVertical: 4}]}
                icon="login">
                Iniciar Sesión
              </Button>
              <TouchableOpacity onPress={handleCreateAccount}>
                <Text style={globalStyles.registerText}>
                  ¿No tienes una cuenta? Crear Cuenta
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
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
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  orangeLogo: {
    width: 800,
    height: 390,
    resizeMode: 'contain',
    borderColor: '#eee',
    borderWidth: 0,
    borderRadius: 0,
  },
});

export default App;

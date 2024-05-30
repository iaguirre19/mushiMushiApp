import React, {useState, useEffect} from 'react';
import {
  View,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Image,
  useWindowDimensions,
  Dimensions,
  TextInput,
} from 'react-native';
import {Text, Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Asegúrate de importar el icono correctamente
import {globalStyles, colors} from '../../theme/authGlobalStyles';
// import CustomInput from '../../components/CustomInput';
import RememberMeView from '../../components/RemembermeView';
import {RootNavigationProp} from '../../../types/navigationTypes';
import CustomInput from '../../components/CustomTextInput';
type Props = {
  navigation: RootNavigationProp;
};

const App: React.FC<Props> = ({navigation}) => {
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
      keyboardVerticalOffset={60} // Ajuste opcional para desplazamiento vertical
    >
      <View
        style={{
          flex: 1,
          width: '100%',
          height: '100%',
          position: 'relative',
        }}>
        <View
          style={{
            width: '100%',
            height: '10%',
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
              size={26}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'flex-end',
            alignItems: 'center',
            width: '100%',
            height: '90%',
          }}>
          <View
            style={{
              flex: width > 410 ? 2 : 1,
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 40,
            }}>
            <Image
              source={require('../../../assets/img/logo-naranja.png')}
              style={{
                ...styles.orangeLogo,
                width: Dimensions.get('window').width > 410 ? 520 : 800,
              }}
            />
          </View>
          <View style={{flex: 1, width: '100%'}}>
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
                  {fontSize: Dimensions.get('window').width < 412 ? 24 : 32},
                ]}>
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
              style={[globalStyles.subText, {textAlign: 'center'}]}>
              Inicia sesión en tu cuenta
            </Text>
          </View>
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
            style={[globalStyles.btnContainer, {marginTop: 40, width: '100%'}]}>
            <Button
              mode="contained"
              onPress={handleLogin}
              style={[
                {
                  backgroundColor: colors.tertiary,
                  width: '100%',
                  minHeight: 40,
                },
              ]}
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
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 32,
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

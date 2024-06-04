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
} from 'react-native';
import {Button, Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  authGlobalStyles,
  colors,
  globalStyles,
} from '../../theme/authGlobalStyles';
import {RootNavigationProp} from '../../../types/navigationTypes';
import CustomInput from '../../components/CustomTextInput';

type Props = {
  navigation: RootNavigationProp;
};

const ForgotPasswordScreen: React.FC<Props> = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [smallDevice, setSmallDevice] = useState<boolean>(false);

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

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={[styles.container, {flex: 1}]}
      keyboardVerticalOffset={30} // Ajuste opcional para desplazamiento vertical
    >
      <View style={styles.responsiveContainer}>
        <View style={styles.responsiveHeader}>
          <TouchableOpacity
            style={{
              ...globalStyles.btnBack,
            }}
            onPress={handleGoBack}>
            <Icon
              style={{color: colors.primary}}
              name="arrow-left-top"
              size={26}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.responsiveContent}>
          <View style={{width: '100%'}}>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 110,
              }}>
              <Image
                source={require('../../../assets/img/logo-naranja.png')}
                style={{
                  ...globalStyles.orangeLogo,
                  width: Dimensions.get('window').width > 410 ? 420 : 800,
                }}
              />
            </View>
            <View>
              <Text
                variant="headlineMedium"
                style={[
                  globalStyles.textColor,
                  {
                    textAlign: 'center',
                    fontSize: smallDevice ? 24 : 32,
                  },
                ]}>
                ¿Olvidaste tu contraseña?
              </Text>
              <Text
                variant="titleMedium"
                style={[
                  globalStyles.subText,
                  {
                    textAlign: 'center',
                    marginBottom: 20,
                    fontSize: smallDevice ? 16 : 20,
                  },
                ]}>
                Ingresa tu correo electrónico para restablecer tu contraseña
              </Text>
            </View>
            <CustomInput
              label="Correo Electrónico"
              placeholder="Ingresa tu correo"
              value={email}
              onChangeText={text => setEmail(text)}
              iconName="email-outline"
            />
            <Button
              mode="contained"
              onPress={handleSendResetLink}
              style={[
                {
                  backgroundColor: colors.tertiary,
                  marginTop: 20,
                  width: '100%',
                },
              ]}
              icon="send">
              Enviar enlace de restablecimiento
            </Button>
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
  orangeLogo: {
    width: 800,
    height: 390,
    resizeMode: 'contain',
    borderColor: '#eee',
    borderWidth: 0,
    borderRadius: 0,
  },
});
export default ForgotPasswordScreen;

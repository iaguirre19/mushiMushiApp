import {useState} from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import {Text, Button} from 'react-native-paper';
import {
  authGlobalStyles,
  colors,
  globalStyles,
} from '../../theme/authGlobalStyles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {RootNavigationProp} from '../../../types/navigationTypes';
import {createAccountStyles} from '../../theme/authGlobalStyles';
import CustomInput from '../../components/CustomInput';
import {StyleSheet} from 'react-native';

type Props = {
  navigation: RootNavigationProp;
};
export const CreateAccount: React.FC<Props> = ({navigation}) => {
  const handleGoToHome = () => {
    navigation.navigate('OTPVerification');
  };
  const handleGoBack = () => {
    navigation.goBack();
  };

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
      // keyboardVerticalOffset={300} // Ajuste opcional para desplazamiento vertical
    >
      <ScrollView
        contentContainerStyle={{flexGrow: 1, width: '100%', height: '100%'}}>
        <View style={globalStyles.inner}>
          <View style={globalStyles.mainContent}>
            <View style={globalStyles.header}>
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
            <View style={globalStyles.logoContainer}>
              <Image
                source={require('../../../assets/img/logo-naranja.png')}
                style={globalStyles.orangeLogo}
              />
            </View>
            <Text
              variant="headlineMedium"
              style={[globalStyles.textColor, {textAlign: 'center'}]}>
              Crear Cuenta de{' '}
              <Text style={{color: colors.secondary}}>Mushi Mushi</Text>
            </Text>
            <Text
              variant="titleMedium"
              style={[
                globalStyles.subText,
                {textAlign: 'center', marginBottom: 20},
              ]}>
              Por favor, complete los campos de abajo
            </Text>
            <CustomInput
              label="Nombre"
              placeholder="Enter your name"
              value={name}
              onChangeText={text => setName(text)}
              icon="account"
            />
            <CustomInput
              label="Email"
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
            <CustomInput
              label="Confirmar Contraseña"
              placeholder="Confirm your password"
              value={password}
              onChangeText={text => setPassword(text)}
              secureTextEntry={true}
              icon="lock"
              password
            />
            <Button
              mode="contained"
              onPress={handleGoToHome}
              icon={'account-plus'}
              style={[
                {
                  backgroundColor: colors.tertiary,
                  paddingVertical: 4,
                  marginTop: 20,
                },
              ]}>
              Crear Cuenta
            </Button>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {},
});

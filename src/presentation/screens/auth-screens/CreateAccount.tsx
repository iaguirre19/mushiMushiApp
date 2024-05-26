import {useState} from 'react';
import {SafeAreaView, TouchableOpacity, View} from 'react-native';
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

type Props = {
  navigation: RootNavigationProp;
};
export const CreateAccount: React.FC<Props> = ({navigation}) => {
  const handleGoToHome = () => {
    navigation.navigate('OTPVerification');
  };

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={createAccountStyles.container}>
        <View style={createAccountStyles.iconContainer}>
          <TouchableOpacity
            style={{
              flex: 1,
              position: 'absolute',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 50,
              width: 50,
              height: 50,
              borderColor: '#eee',
              borderWidth: 1,
              borderRadius: 10,
              top: 0,
              left: 0,
            }}
            onPress={() => navigation.navigate('Home')}>
            <Icon
              style={[{color: colors.primary}]}
              name="arrow-left-top"
              size={26}
            />
          </TouchableOpacity>
        </View>
        <View style={createAccountStyles.titleSection}>
          <Text variant="titleLarge">
            Crear Cuenta de{' '}
            <Text style={{color: colors.secondary}}>Mushi Mushi</Text>
          </Text>
          <Text variant="bodyMedium" style={{color: '#4A4A4A'}}>
            Por favor, complete los campos de abajo
          </Text>
        </View>
        <View style={createAccountStyles.inputContainer}>
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
        </View>
        <View style={createAccountStyles.btnContainer}>
          <Button
            mode="contained"
            onPress={handleGoToHome}
            icon={'account-plus'}
            style={[{backgroundColor: colors.tertiary, paddingVertical: 4}]}>
            Crear Cuenta
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

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
    navigation.navigate('Home');
  };

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={createAccountStyles.container}>
        <View style={createAccountStyles.iconContainer}>
          <TouchableOpacity
            style={globalStyles.btnBack}
            onPress={handleGoToHome}>
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
          <Text variant="bodyMedium" style={{color: '#B0B5B3'}}>
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
            style={[
              authGlobalStyles.btnStyles,
              {backgroundColor: colors.tertiary},
            ]}>
            Crear Cuenta
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

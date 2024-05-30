import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {TextInput as PaperTextInput, Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../theme/authGlobalStyles';

interface CustomInputProps {
  label: string;
  iconName: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
  placeholder: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
  placeholder,
  label,
  iconName,
  value,
  onChangeText,
  secureTextEntry = false,
  keyboardType = 'default',
}) => {
  const [isPasswordVisible, setPasswordVisible] = useState(secureTextEntry);
  const [isFocused, setIsFocused] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <Text variant={'titleMedium'}>{label}</Text>
      <PaperTextInput
        mode="outlined"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={isPasswordVisible}
        placeholder={placeholder}
        keyboardType={keyboardType}
        left={<PaperTextInput.Icon color={colors.primary} icon={iconName} />}
        right={
          secureTextEntry ? (
            <PaperTextInput.Icon
              icon={isPasswordVisible ? 'eye-off' : 'eye'}
              onPress={() => setPasswordVisible(!isPasswordVisible)}
            />
          ) : null
        }
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={styles.input}
        theme={{
          colors: {
            primary: isFocused ? 'orange' : colors.primary,
          },
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 8,
    width: '100%',
    rowGap: 8,
  },
  input: {
    backgroundColor: 'white',
    width: '100%', // Ajusta este valor según sea necesario
  },
});

export default CustomInput;

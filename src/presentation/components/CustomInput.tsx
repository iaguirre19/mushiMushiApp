import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {TextInput, Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {globalStyles} from '../theme/authGlobalStyles';

interface CustomInputProps {
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  icon?: string;
  password?: boolean;
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  icon = 'account',
  password = false,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const LeftIcon = ({iconName}: {iconName: string}) => (
    <Icon color={globalStyles.borderColor.color} name={iconName} size={20} />
  );

  const RightIcon = ({isVisible}: {isVisible: boolean}) => (
    <Icon name={isVisible ? 'eye-off' : 'eye'} size={20} />
  );

  return (
    <View style={styles.inputContainer}>
      <Text variant="labelLarge" style={styles.label}>
        {label}
      </Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={styles.input}
        mode="outlined"
        left={<TextInput.Icon icon={() => <LeftIcon iconName={icon} />} />}
        right={
          password && (
            <TextInput.Icon
              icon={() => <RightIcon isVisible={passwordVisible} />}
              onPress={() => setPasswordVisible(!passwordVisible)}
            />
          )
        }
        secureTextEntry={password ? !passwordVisible : secureTextEntry}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        theme={{
          colors: {
            text: globalStyles.textColor.color,
            placeholder: globalStyles.placeholderColor.color,
            primary: isFocused ? 'orange' : globalStyles.borderColor.color,
          },
          roundness: 12,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 10,
  },
  label: {
    color: 'gray',
    marginBottom: 5,
    fontWeight: '500',
  },
  input: {
    height: 50,
    backgroundColor: 'white',
  },
});

export default CustomInput;

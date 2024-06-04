import React, {useState, useEffect} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {Text} from 'react-native-paper';
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
  label,
  iconName,
  value,
  onChangeText,
  secureTextEntry = false,
  keyboardType = 'default',
  placeholder,
}) => {
  const [isPasswordVisible, setPasswordVisible] = useState(secureTextEntry);
  const [isFocused, setIsFocused] = useState(false);
  const [smallDevice, setSmallDevice] = useState(false);

  useEffect(() => {
    if (Dimensions.get('window').width < 412) {
      setSmallDevice(true);
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View
        style={[styles.inputContainer, isFocused && {borderColor: 'orange'}]}>
        <Icon name={iconName} size={20} color="gray" style={styles.icon} />
        <TextInput
          style={[
            styles.input,
            {height: smallDevice ? 45 : 50, fontSize: smallDevice ? 16 : 20},
          ]}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          secureTextEntry={isPasswordVisible}
          keyboardType={keyboardType}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          multiline={false}
          numberOfLines={1}
          textAlignVertical="center"
        />
        {secureTextEntry && (
          <TouchableOpacity
            onPress={() => setPasswordVisible(!isPasswordVisible)}
            style={styles.icon}>
            <Icon
              name={isPasswordVisible ? 'eye-off' : 'eye'}
              size={20}
              color="gray"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 8,
    width: '100%',
  },
  label: {
    fontSize: 16,
    marginBottom: 4,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 12,
    backgroundColor: 'white',
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 8,
    color: colors.primary,
  },
  input: {
    flex: 1,
    paddingVertical: 0,
    paddingHorizontal: 0,
  },
});

export default CustomInput;

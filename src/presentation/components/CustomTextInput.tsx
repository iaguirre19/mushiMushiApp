import React, {useState, useEffect} from 'react';
import {View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../theme/authGlobalStyles';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

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

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View
        style={[styles.inputContainer, isFocused && {borderColor: 'orange'}]}>
        <Icon
          name={iconName}
          size={responsiveFontSize(2.5)}
          color="gray"
          style={styles.icon}
        />
        <TextInput
          style={[styles.input]}
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
              size={responsiveFontSize(2.5)}
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
    marginBottom: responsiveHeight(2.4),
    width: '100%',
  },
  label: {
    fontSize: responsiveFontSize(2),
    marginBottom: responsiveHeight(1.2),
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: responsiveWidth(3),
    backgroundColor: 'white',
    paddingHorizontal: responsiveWidth(2),
  },
  icon: {
    marginRight: responsiveWidth(2),
    color: colors.primary,
  },
  input: {
    flex: 1,
    paddingVertical: responsiveHeight(1),
    paddingHorizontal: 0,
    fontSize: responsiveFontSize(2),
  },
});

export default CustomInput;

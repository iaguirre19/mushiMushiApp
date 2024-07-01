// TextInputWithIcon.tsx
import React, {useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {colors} from '../theme/authGlobalStyles';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

interface TextInputWithIconProps {
  label: string;
  iconName: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  onBlur: () => void;
  keyboardType?: 'default' | 'email-address' | 'numeric';
  secureTextEntry?: boolean;
  error?: string | null;
}

const TextInputWithIcon: React.FC<TextInputWithIconProps> = ({
  label,
  iconName,
  placeholder,
  value,
  onChangeText,
  onBlur,
  keyboardType = 'default',
  secureTextEntry = false,
  error = null,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <View style={{width: '100%'}}>
      <Text variant="labelLarge" style={styles.textInputLabel}>
        {label}
      </Text>
      <View style={{width: '100%'}}>
        <Icon
          name={iconName}
          size={responsiveFontSize(2.5)}
          style={{
            position: 'absolute',
            left: 12,
            top: 16,
            color: colors.primary,
          }}
        />
        <TextInput
          style={styles.textInput}
          placeholder={placeholder}
          onChangeText={onChangeText}
          onBlur={onBlur}
          value={value}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry && !isPasswordVisible}
        />
        {secureTextEntry && (
          <Icon
            name={isPasswordVisible ? 'eye-off' : 'eye'}
            size={responsiveFontSize(2.5)}
            color="gray"
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
            style={{
              position: 'absolute',
              right: 15,
              top: 16,
            }}
          />
        )}
        {error && <Text style={styles.errorText}>{error}</Text>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textInputLabel: {
    fontSize: responsiveFontSize(1.8),
    marginBottom: responsiveHeight(1.2),
    textAlign: 'left',
    width: '100%',
  },
  textInput: {
    height: responsiveHeight(6),
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
    marginBottom: responsiveHeight(2),
    paddingHorizontal: responsiveWidth(2.5),
    borderRadius: responsiveWidth(3),
    paddingLeft: responsiveWidth(10),
    fontSize: responsiveFontSize(1.6),
  },
  errorText: {
    color: 'red',
    left: responsiveWidth(2),
    bottom: responsiveHeight(2),
    width: '100%',
    fontSize: responsiveFontSize(1.6),
    fontWeight: '600',
    marginTop: responsiveHeight(0.5),
  },
});

export default TextInputWithIcon;

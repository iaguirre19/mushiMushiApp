import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../theme/authGlobalStyles';

type CustomButtonProps = {
  iconName: string;
  text: string;
  onPress: () => void;
  mode?: 'text' | 'outlined' | 'contained';
};

const CustomButton: React.FC<CustomButtonProps> = ({
  iconName,
  text,
  onPress,
  mode = 'contained',
}) => {
  const isContained = mode === 'contained';
  const isOutlined = mode === 'outlined';

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        isContained && styles.containedButton,
        isOutlined && styles.outlinedButton,
        mode === 'text' && styles.textButton,
      ]}
      activeOpacity={0.9}>
      <View style={styles.iconWrapper}>
        <Icon
          name={iconName}
          size={responsiveFontSize(2.5)}
          style={[
            styles.icon,
            isContained && styles.iconContained,
            isOutlined && styles.iconOutlined,
          ]}
        />
        <Text
          style={[
            styles.text,
            isContained && styles.textContained,
            isOutlined && styles.textOutlined,
          ]}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: responsiveHeight(5),
    alignSelf: 'center',
    justifyContent: 'center',
    paddingVertical: responsiveHeight(1.2),
    borderRadius: 18,
    marginVertical: responsiveHeight(0),
  },
  containedButton: {
    backgroundColor: colors.primary,
  },
  outlinedButton: {
    borderColor: colors.primary,
    borderWidth: 1,
  },
  textButton: {
    backgroundColor: 'transparent',
  },
  iconWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    marginRight: responsiveWidth(2),
  },
  iconContained: {
    color: 'white',
  },
  iconOutlined: {
    color: colors.primary,
  },
  text: {
    fontSize: responsiveFontSize(1.6),
    fontWeight: 'bold',
  },
  textContained: {
    color: 'white',
  },
  textOutlined: {
    color: colors.primary,
  },
  textMode: {
    color: colors.primary,
  },
});

export default CustomButton;

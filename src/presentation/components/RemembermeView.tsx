import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Checkbox, Text} from 'react-native-paper';
import {colors} from '../theme/authGlobalStyles';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

type Props = {
  onPress: () => void;
};

const RememberMeView = ({onPress}: Props) => {
  const [checked, setChecked] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.checkboxContainer}>
        <Checkbox
          status={checked ? 'checked' : 'unchecked'}
          onPress={() => setChecked(!checked)}
          color={colors.primary}
          uncheckedColor={colors.primary}
        />
        <Text style={styles.label}>Recuérdame</Text>
      </View>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.forgotPassword}>Olvidé mi contraseña</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingVertical: responsiveHeight(1),
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    marginLeft: responsiveWidth(2),
    fontSize: responsiveFontSize(2),
  },
  forgotPassword: {
    textDecorationLine: 'underline',
    fontSize: responsiveFontSize(2),
    color: colors.primary,
  },
});

export default RememberMeView;

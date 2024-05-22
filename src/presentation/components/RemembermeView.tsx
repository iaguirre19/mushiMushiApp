import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Checkbox, Text, useTheme} from 'react-native-paper';

const RememberMeView = () => {
  const [checked, setChecked] = useState(false);
  const {colors} = useTheme();

  return (
    <View style={styles.container}>
      <View style={styles.checkboxContainer}>
        <Checkbox
          status={checked ? 'checked' : 'unchecked'}
          onPress={() => setChecked(!checked)}
          color={colors.primary}
          uncheckedColor={'red'}
        />
        <Text style={styles.label}>Recuérdame</Text>
      </View>
      <TouchableOpacity
        onPress={() => console.log('Navigate to forgot password screen')}>
        <Text style={[styles.forgotPassword, {color: colors.primary}]}>
          Olvidé mi contraseña
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // padding: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    marginLeft: 8,
    fontSize: 16,
  },
  forgotPassword: {
    textDecorationLine: 'underline',
    fontSize: 16,
  },
});

export default RememberMeView;
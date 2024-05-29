import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Checkbox, Text, useTheme} from 'react-native-paper';

type Props = {
  onPress: () => void;
};

const RememberMeView = ({onPress}: Props) => {
  const [checked, setChecked] = useState(false);
  const {colors} = useTheme();

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <View style={styles.checkboxContainer}>
        <Checkbox
          status={checked ? 'checked' : 'unchecked'}
          onPress={() => setChecked(!checked)}
          color={colors.primary}
          uncheckedColor={'red'}
        />
        <Text style={styles.label}>Recuérdame</Text>
      </View>
      <TouchableOpacity onPress={onPress}>
        <Text style={[styles.forgotPassword, {color: colors.primary}]}>
          Olvidé mi contraseña
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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

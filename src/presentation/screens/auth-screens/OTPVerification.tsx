import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Text, TextInput, Button} from 'react-native-paper';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../../theme/authGlobalStyles';
import {RootNavigationProp} from '../../../types/navigationTypes';

type Props = {
  navigation: RootNavigationProp;
};
export const OtpVerification: React.FC<Props> = ({navigation}) => {
  const [otp, setOTP] = useState<string[]>(['', '', '', '', '']);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const numberButtons = [1, 2, 3, 4, 5, 6, 7, 8, 9, '#', 0, 'delete'];
  const [timer, setTimer] = useState<number>(60);
  const [isResendDisabled, setIsResendDisabled] = useState<boolean>(true);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer(prev => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setIsResendDisabled(false);
    }
  }, [timer]);

  const handleOTPInput = (digit: string) => {
    const newOTP = [...otp];
    newOTP[currentIndex] = digit;
    setOTP(newOTP);

    if (currentIndex < 4) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleBackspace = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      const newOTP = [...otp];
      newOTP[currentIndex] = '';
      setOTP(newOTP);
    } else if (currentIndex === 0) {
      const newOTP = [...otp];
      newOTP[0] = '';
      setOTP(newOTP);
    }
    if (!isResendDisabled) {
      // Logic to resend the OTP code
      setTimer(60);
      setIsResendDisabled(true);
    }
  };

  return (
    <View style={styles.container}>
      <View style={[styles.content, {paddingHorizontal: 28}]}>
        <View style={[styles.header, {marginTop: -38}]}>
          <TouchableOpacity
            style={styles.btnBack}
            onPress={() => {
              navigation.goBack();
            }}>
            <IconM
              style={[{color: colors.primary}]}
              name="arrow-left-top"
              size={26}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.titleSection}>
          <Text variant="headlineSmall" style={styles.title}>
            OTP verification
          </Text>
          <Text variant="titleMedium" style={styles.subtitle}>
            Por favor, ingresa el OTP (Contraseña de un solo uso) enviado a tu
            correo electronico para completar tu verificación.
          </Text>
        </View>
        <View style={styles.otpContainer}>
          {otp.map((digit = '', index) => (
            <TextInput
              key={index}
              style={[
                styles.otpInput,
                index === currentIndex && styles.focusedInput,
              ]}
              value={digit}
              maxLength={1}
              keyboardType="number-pad"
              underlineColor="transparent"
              activeUnderlineColor="transparent"
            />
          ))}
        </View>
        <View style={styles.timerContainer}>
          <Text style={styles.timerText}>Resend code in {timer} seconds</Text>
          <Button
            mode="text"
            // onPress={handleResendCode}
            disabled={isResendDisabled}>
            Resend Code
          </Button>
        </View>
        <View style={{marginBottom: 20}}>
          <Button
            mode="contained"
            onPress={() => {
              /* Add OTP verification functionality */
            }}
            style={styles.verifyButton}
            icon="check">
            Verify Code
          </Button>
        </View>
        <View style={styles.keyboardContainer}>
          {numberButtons.map((value, index) => (
            <TouchableOpacity
              key={index}
              style={styles.keyboardButton}
              onPress={() =>
                value === 'delete'
                  ? handleBackspace()
                  : handleOTPInput(value.toString())
              }>
              <Text variant="headlineSmall" style={styles.keyboardButtonText}>
                {value === 'delete' ? (
                  <Icon style={styles.deleteIcon} name={'backspace'} />
                ) : (
                  value
                )}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  icon: {
    width: 100,
    height: 100,
  },
  content: {
    flex: 1,
    marginTop: 20,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
    paddingTop: 40,
  },
  btnBack: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    borderColor: '#eee',
    borderWidth: 1,
    borderRadius: 10,
  },
  backIcon: {
    fontSize: 22,
    color: colors.primary,
  },
  titleSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  title: {
    color: colors.primary,
    fontWeight: 'bold',
  },
  subtitle: {
    color: colors.subTextColor,
    textAlign: 'center',
    marginTop: 10,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  otpInput: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 4,
    marginHorizontal: 8,
    fontSize: 18,
    textAlign: 'center',
    backgroundColor: colors.whiteColor,
  },
  focusedInput: {
    borderColor: colors.primary,
  },
  timerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  timerText: {
    color: colors.subTextColor,
    marginRight: 10,
  },
  resendButton: {
    color: colors.primary,
  },
  verifyButton: {
    backgroundColor: colors.tertiary,
    paddingVertical: 4,
  },
  keyboardContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '100%',
  },
  keyboardButton: {
    width: '28%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
    marginVertical: 8,
  },
  keyboardButtonText: {
    fontWeight: '500',
  },
  deleteIcon: {
    fontSize: 30,
  },
});

export default OtpVerification;

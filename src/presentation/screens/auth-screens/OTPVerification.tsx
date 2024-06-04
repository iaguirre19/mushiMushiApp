import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Dimensions,
} from 'react-native';
import {Button, Text, TextInput} from 'react-native-paper';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors, globalStyles} from '../../theme/authGlobalStyles';
import {RootNavigationProp} from '../../../types/navigationTypes';

type Props = {
  navigation: RootNavigationProp;
};

const OtpVerification: React.FC<Props> = ({navigation}) => {
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
      setTimer(60);
      setIsResendDisabled(true);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={[styles.container, {flex: 1}]}
      keyboardVerticalOffset={30} // Ajuste opcional para desplazamiento vertical
    >
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.responsiveContainer}>
          <View style={styles.responsiveHeader}>
            <TouchableOpacity
              style={globalStyles.btnBack}
              onPress={() => {
                navigation.goBack();
              }}>
              <IconM
                style={{color: colors.primary}}
                name="arrow-left-top"
                size={26}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.responsiveContent}>
            <View style={styles.titleSection}>
              <Text variant="headlineSmall" style={styles.title}>
                OTP verification
              </Text>
              <Text variant="titleMedium" style={styles.subtitle}>
                Por favor, ingresa el OTP (Contraseña de un solo uso) enviado a
                tu correo electronico para completar tu verificación.
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
              <Text style={styles.timerText}>
                Resend code in {timer} seconds
              </Text>
              <Button mode="text" disabled={isResendDisabled}>
                Resend Code
              </Button>
            </View>
            <View style={{marginBottom: 20, width: '100%'}}>
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
                  <Text
                    variant="headlineSmall"
                    style={styles.keyboardButtonText}>
                    {value === 'delete' ? (
                      <IconM
                        style={styles.deleteIcon}
                        name={'arrow-left-bottom'}
                      />
                    ) : (
                      value
                    )}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 32,
  },
  contentContainer: {
    flexGrow: 1,
  },
  responsiveContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  responsiveHeader: {
    width: '100%',
    height: '10%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    zIndex: 10,
  },
  responsiveContent: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    height: '90%',
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
    width: '100%',
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

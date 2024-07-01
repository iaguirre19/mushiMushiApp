import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  useWindowDimensions,
  Keyboard,
} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {Button, Text, TextInput as PaperTextInput} from 'react-native-paper';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors, globalStyles} from '../../theme/authGlobalStyles';
import {RootNavigationProp} from '../../../types/navigationTypes';
import CustomButton from '../../components/CustomButton';
import {verifyOtp} from '../../../api/api';
import BackBtn from '../../components/BackBtn';

type Props = {
  navigation: RootNavigationProp;
};

const OtpVerification: React.FC<Props> = ({navigation}) => {
  const [otp, setOTP] = useState<string[]>(['', '', '', '', '']);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const numberButtons = [1, 2, 3, 4, 5, 6, 7, 8, 9, '#', 0, 'delete'];
  const [timer, setTimer] = useState<number>(60);
  const [isResendDisabled, setIsResendDisabled] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const {width, height} = useWindowDimensions();

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

  const handleGoToHome = () => {
    navigation.navigate('Home');
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

  const handleResendOtp = () => {
    setTimer(60);
    setIsResendDisabled(true);
  };

  const handleVerifyOtp = async () => {
    const otpString = otp.join('');
    try {
      const response = await verifyOtp(otpString);
      if (response.success) {
        navigation.navigate('CreatePassword');
      } else {
        setError(response.message);
        setTimeout(() => {
          setError(null);
        }, 5000); // Ocultar el mensaje de error después de 5 segundos
      }
    } catch (error) {
      console.log('Error en verifyOtp:', error);
      setError('Error verificando el OTP, intenta de nuevo');
      setTimeout(() => {
        setError(null);
      }, 5000); // Ocultar el mensaje de error después de 5 segundos
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'position' : 'height'}
      style={{...styles.container, height: height, width: width}}
      keyboardVerticalOffset={50}>
      <View
        style={{
          flex: 1,
          width: '100%',
          height: '100%',
        }}>
        <View style={styles.responsiveHeader}>
          <BackBtn navigation={navigation} />
        </View>
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '80%',
          }}>
          <View style={styles.titleSection}>
            <Text variant="headlineSmall" style={styles.title}>
              OTP verification
            </Text>
            <Text
              variant="titleSmall"
              style={[
                styles.subtitle,
                {textAlign: 'center', marginBottom: responsiveHeight(3)},
              ]}>
              Por favor, ingresa el OTP (Contraseña de un solo uso) enviado a tu
              correo electronico para completar tu verificación.
            </Text>
          </View>
          <View style={styles.otpContainer}>
            {otp.map((digit = '', index) => (
              <PaperTextInput
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
                editable={false}
                onFocus={() => Keyboard.dismiss()}
              />
            ))}
          </View>
          {error && <Text style={{color: 'red'}}>{error}</Text>}
          <View style={styles.timerContainer}>
            <Text style={styles.timerText}>Resend code in {timer} seconds</Text>
            <Button
              mode="text"
              disabled={isResendDisabled}
              onPress={handleResendOtp}>
              Resend Code
            </Button>
          </View>
          <View style={{marginBottom: 20, width: '100%'}}>
            <CustomButton
              iconName="check"
              text="Verificar Codigo"
              onPress={handleVerifyOtp}
              mode="contained"
            />
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
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: responsiveWidth(4),
    paddingVertical: responsiveHeight(2),
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
    height: responsiveHeight(10),
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
    marginTop: responsiveHeight(2),
  },
  title: {
    color: colors.primary,
    fontWeight: 'bold',
    fontSize: responsiveFontSize(2.8),
  },
  subtitle: {
    color: colors.subTextColor,
    textAlign: 'center',
    marginTop: responsiveHeight(1),
    fontSize: responsiveFontSize(1.7),
  },
  otpContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // marginBottom: responsiveHeight(2),
  },
  otpInput: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: responsiveWidth(14),
    height: responsiveHeight(8),
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: responsiveWidth(1),
    marginHorizontal: responsiveWidth(2),
    fontSize: responsiveFontSize(2),
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
    marginVertical: responsiveHeight(1),
  },
  timerText: {
    color: colors.subTextColor,
    marginRight: responsiveWidth(2),
  },
  verifyButton: {
    backgroundColor: colors.tertiary,
    paddingVertical: responsiveHeight(0.5),
  },
  keyboardContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '100%',
    marginBottom: responsiveHeight(18),
  },
  keyboardButton: {
    width: '28%',
    height: responsiveHeight(8),
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: responsiveWidth(1),
    marginVertical: responsiveHeight(1),
  },
  keyboardButtonText: {
    fontWeight: '500',
    fontSize: responsiveFontSize(2.6),
  },
  deleteIcon: {
    fontSize: responsiveFontSize(3),
  },
});

export default OtpVerification;

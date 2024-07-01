import {Platform, StyleSheet} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

export const colors = {
  primary: '#dc6c1c',
  secondary: '#e48038',
  tertiary: '#E47D36',
  error: '#FF0000',
  success: '#00FF00',
  warning: '#FFFF00',
  primaryShade: '#f4d4b4',
  primaryLight: '#f8ceb1',
  subTextColor: '#4A4A4A',
  whiteColor: '#faf9f9',
};

export const authGlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    position: 'relative',
    alignContent: 'center',
  },
  topContent: {
    marginTop: Platform.OS === 'ios' ? 0 : 0,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '60%',
    backgroundColor: colors.primary,
    borderBottomEndRadius: 140,
  },
  topContentCard: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    borderRadius: 26,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  topContentCardImage: {
    width: '80%',
    height: '80%',
    resizeMode: 'contain',
  },
  bottomContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 20,
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingTop: 40,
    rowGap: 20,
  },
  btnStyles: {
    width: 'auto',
    height: 52,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const globalStyles = StyleSheet.create<any>({
  mainContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    paddingHorizontal: responsiveWidth(8),
    justifyContent: 'flex-start',
  },
  containerInput: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: responsiveWidth(8),
    backgroundColor: '#fff',
    rowGap: responsiveHeight(3.5),
  },
  inputContainer: {
    marginVertical: responsiveHeight(1),
  },
  input: {
    backgroundColor: 'transparent',
    borderRadius: responsiveHeight(3),
  },
  button: {
    marginBottom: responsiveHeight(2),
    backgroundColor: colors.tertiary,
  },
  icon: {
    alignSelf: 'center',
    marginBottom: responsiveHeight(5),
  },
  registerText: {
    textAlign: 'center',
    color: colors.subTextColor,
    fontSize: responsiveFontSize(1.8),
  },
  textColor: {
    color: '#000',
  },
  placeholderColor: {
    color: '#666',
  },
  borderColor: {
    color: colors.primary,
  },
  btnContainer: {
    flex: 1,
    flexDirection: 'column',
    rowGap: responsiveHeight(2),
  },
  subText: {
    color: colors.subTextColor,
    textAlign: 'center',
  },
  btnBack: {
    alignItems: 'center',
    justifyContent: 'center',
    width: responsiveWidth(12),
    height: responsiveWidth(12),
    borderColor: '#eee',
    borderWidth: 1,
    borderRadius: responsiveWidth(2),
  },
  inner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: responsiveHeight(4),
  },
  header: {
    flex: 1,
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    position: 'relative',
  },
  mainContent: {
    flex: 11,
    width: '100%',
    height: '100%',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  orangeLogo: {
    resizeMode: 'contain',
    borderColor: '#eee',
    borderWidth: 0,
    borderRadius: 0,
  },
});

export const createAccountStyles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    paddingHorizontal: 32,
    justifyContent: 'flex-start',
  },
  iconContainer: {
    flex: 2,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  titleSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    rowGap: 8,
  },
  inputContainer: {
    flex: 4,
    justifyContent: 'center',
  },
  btnContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});

import {Platform, StyleSheet} from 'react-native';

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

export const globalStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    paddingHorizontal: 32,
    justifyContent: 'flex-start',
  },
  containerInput: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 32,
    backgroundColor: '#fff',
    rowGap: 28,
  },
  inputContainer: {
    marginVertical: 8,
  },
  input: {
    backgroundColor: 'transparent',
    borderRadius: 30,
  },
  button: {
    marginBottom: 16,
    backgroundColor: '#6200ee',
  },
  icon: {
    alignSelf: 'center',
    marginBottom: 32,
  },
  registerText: {
    textAlign: 'center',
    color: colors.tertiary,
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
    rowGap: 20,
  },
  subText: {
    color: colors.subTextColor,
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
  inner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 28,
    // backgroundColor: 'blue',
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
    width: 800,
    // height: 390,
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

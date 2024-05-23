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
    paddingHorizontal: 40,
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
  containerInput: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 28,
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
    color: colors.primaryLight,
  },
  btnBack: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 90,
    width: 50,
    height: 50,
    borderColor: '#eee',
    borderWidth: 1,
    borderRadius: 10,
    position: 'absolute',
    top: 0,
    left: 0,
  },
});

export const createAccountStyles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    paddingHorizontal: 24,
    justifyContent: 'flex-start',
  },
  iconContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    // backgroundColor: 'green',
  },
  titleSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
    rowGap: 8,
    // backgroundColor: 'blue',
  },
  inputContainer: {
    flex: 4,
    justifyContent: 'center',
    // backgroundColor: 'yellow',
  },
  btnContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    // backgroundColor: 'red',
  },
});

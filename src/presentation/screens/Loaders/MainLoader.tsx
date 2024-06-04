import {useEffect, useState} from 'react';
import {View, ActivityIndicator, Image} from 'react-native';
// import { colors } from '../../theme/GlobalStyles';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {Text} from 'react-native-paper';
import {colors} from '../../theme/authGlobalStyles';
// import { RootStackParamList } from '../../../types/navigationTypes';
import {RootStackParamList} from '../../../types/navigationTypes';
export const LoadingScreen = () => {
  // const [showLoader, setShowLoader] = useState(false);

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  // useEffect(() => {
  //     const firstTimeout = setTimeout(() => {
  //         setShowLoader(true);
  //     }, 1000);

  //     const secondTimeout = setTimeout(() => {
  //         setUserLoggedIn(true);
  //     }, 3000);

  //     return () => {
  //         clearTimeout(firstTimeout);
  //         clearTimeout(secondTimeout);
  //     };
  // }, [navigation, setUserLoggedIn]);

  // const params = useRoute<RouteProp<RootStackParamList, 'Loading'>>().params;

  // return (
  //     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  //         {showLoader && params?.userLoged && (
  //             <ActivityIndicator size={80} animating={true} color={colors.ab} />
  //         )}
  //     </View>
  // );

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary,
      }}>
      <Image
        style={{width: 800, height: 390, resizeMode: 'contain'}}
        source={require('../../../assets/img/logo.png')}
      />
    </View>
  );
};

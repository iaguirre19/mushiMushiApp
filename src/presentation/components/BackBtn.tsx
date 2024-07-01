import IconM from 'react-native-vector-icons/MaterialCommunityIcons';

import React from 'react';
import {TouchableOpacity} from 'react-native';
import {colors, globalStyles} from '../theme/authGlobalStyles';
import {RootNavigationProp} from '../../types/navigationTypes';

type Props = {
  navigation: RootNavigationProp;
};

const BackBtn = ({navigation}: Props) => {
  return (
    <>
      <TouchableOpacity
        style={[globalStyles.btnBack, {backgroundColor: colors.primary}]}
        onPress={() => {
          navigation.goBack();
        }}>
        <IconM style={{color: 'white'}} name="arrow-left-top" size={26} />
      </TouchableOpacity>
    </>
  );
};

export default BackBtn;

import {View, Text} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import BottomSheet1 from '../../../BottomSheet/BottomSheet';

const Links = () => {
  return (
    <View>
      <Text>Links</Text>
      <BottomSheet1 />
    </View>
  );
};

export default Links;

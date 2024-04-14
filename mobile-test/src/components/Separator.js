import React from 'react';
import { View } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const Separator = ({ x, height, width }) => {
  return (
    <View
      style={{
        height: height ? hp(`${2 * x}%`) : 0,
        width: width ? wp(`${2 * x}%`) : 0,
      }}
    />
  );
};

Separator.defaultProps = {
  x: 1,
};
export default Separator;

import React from 'react';
import { View, Text } from 'react-native';
import { widthPercentageToDP } from 'react-native-responsive-screen';

import { PopOver } from './PopOver';
import Vehicle from './Vehicle';

export const UsersCard = ({
  item, onPress
}) => {
  return (
    <View
      style={{
        width: '100%',
        opacity: isEarliestDate || isAllowedState ? 1 : 0.5,
        borderRadius: 15,
        marginBottom: 2,
        borderWidth: 1,
        flex: 1,
        borderColor: '#e5e7eb',
      }}>
     <Text>

    </Text>
    </View>
  );
};

import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { widthPercentageToDP } from 'react-native-responsive-screen';

import Separator from './Separator';

export const Loading = () => {
  return (
    <View style={{ alignSelf: 'center', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
      <View
        style={{ flexDirection: 'row', justifyContent: 'center', padding: widthPercentageToDP(2) }}>
        <ActivityIndicator color="#0077E6" />
        <Separator width />
        <Text style={{ color: '#0077E6', fontSize: 18, fontWeight: 'bold' }}>Cargando</Text>
      </View>
    </View>
  );
};

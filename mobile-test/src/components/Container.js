import React from 'react';
import { Platform, SafeAreaView, StatusBar } from 'react-native';
import { heightPercentageToDP } from 'react-native-responsive-screen';

const Container = ({ children, color, style }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: color ? color : '#ffffff',
        ...style,
        marginTop: Platform.OS === "android" && heightPercentageToDP(5)
      }}>
      <StatusBar backgroundColor={color ? color : '#ffffff'} barStyle="dark-content" />
      {children}
    </SafeAreaView>
  );
};
export default Container;

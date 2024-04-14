import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import HomeScreen from "../screens/homeScreen/HomeScreen";
import DetailsScreen from "../screens/detailsScreen/DetailsScreen";

const AppStack = createStackNavigator();
const AppStackNavigator = () => {
  return (
      <AppStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home">
        <AppStack.Screen name="Home" component={HomeScreen} />
        <AppStack.Screen name="Details" component={DetailsScreen} />

      </AppStack.Navigator>
  );
};

export default AppStackNavigator;

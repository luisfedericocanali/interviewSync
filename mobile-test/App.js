import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";

export default function App() {
  return (
      <NavigationContainer>{/* Rest of your app code */}</NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

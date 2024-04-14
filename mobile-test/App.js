import {NavigationContainer} from "@react-navigation/native";
import AppStackNavigator from "./src/router";
import {QueryClient, QueryClientProvider,} from "@tanstack/react-query";
const queryClient = new QueryClient()
export default function App() {
  return (
      <NavigationContainer>
        <QueryClientProvider client={queryClient}>
          <AppStackNavigator />
        </QueryClientProvider>
      </NavigationContainer>
  );
}


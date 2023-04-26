import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dashboard from "./screens/Dashboard";
import LogIn from "./screens/LogIn";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LogIn"
          component={LogIn}
          options={{title: "Log In"}}
        />
         <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{title: "Dashboard"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
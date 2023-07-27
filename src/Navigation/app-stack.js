import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Loading from "../Screens/loading";
import Login from "../Screens/login";
import Welcome from "../Screens/welcome";
import Home from "../Screens/home"


//Create navigation stack and tab stack
const Stack = createNativeStackNavigator();
// const Tab = createMaterialTopTabNavigator();

export default function AppStack() {
  return (
    <SafeAreaProvider>
      <NavigationContainer
    //     theme={{
    //       colors: {
    //         background: "black",
    //       },
    //     }}
    //   >
    >
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Loading" component={Loading} />
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home}/>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import ExampleButton from "../Components/button";

const Welcome = ({ navigation }) => {
  return (
    <View style={welcomeStyles.pageContainer}>
      <Text style={welcomeStyles.text}>Welcome</Text>

      <ExampleButton
        handlePress={() => navigation.push("Login")}
        text={"Login"}
      />
    </View>
  );
};

export default Welcome;

const welcomeStyles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 20,
  },

  pageContainer: {
    display: "flex",
    width: "100%",
    height: "100%",
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
  }
});

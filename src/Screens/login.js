import { View, Text, StyleSheet } from "react-native";
import ExampleButton from "../Components/button";

const Login = ({ navigation }) => {
  return (
    <View style={loginStyles.pageContainer}>
      <Text style={loginStyles.text}>Login</Text>

      <ExampleButton
        handlePress={() => navigation.push("Home")}
        text={"Home"}
      />

      <ExampleButton
        handlePress={() => navigation.pop()}
        text={"Back to login"}
      />
    </View>
  );
};

export default Login;

const loginStyles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 20,
  },

  pageContainer: {
    display: "flex",
    width: "100%",
    height: "100%",
    backgroundColor: "purple",
    justifyContent: "center",
    alignItems: "center",
  },
});

import { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { onAuthStateChanged } from "firebase/auth";

import {auth} from "../../firebase"


const Loading = ({navigation}) => {
  const checkUserStatus = async () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigation.replace("Home");
      } else {
        navigation.replace("Welcome");
      }
    });
  };

  useEffect(() => {
    checkUserStatus();
  }, []);


  return (
    <View style={loadingStyles.pageContainer}>
      <Text style={loadingStyles.text}>Loading</Text>
    </View>
  );
};

export default Loading;

const loadingStyles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 20,
  },

  pageContainer: {
    display: "flex",
    width: "100%",
    height: "100%",
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
});

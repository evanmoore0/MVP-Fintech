
import { View, Text, StyleSheet } from "react-native";
import ExampleButton from "../Components/button";

const Home = ({navigation}) => {
    return(
        <View style = {homeStyles.pageContainer}>

            <Text style = {homeStyles.text}>
                Home
            </Text>

            <ExampleButton
            handlePress = {() => navigation.pop()}
            text = {"Back to welcome"}
            />

        </View>
    )
}

export default Home

const homeStyles = StyleSheet.create({
    text: {
        color: 'white',
        fontSize: 20
    },

    pageContainer: {
        display: "flex",
        width: "100%",
        height: "100%",
        backgroundColor: "blue",
        justifyContent: "center",
        alignItems: "center"
    }

})
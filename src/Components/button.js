import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

const ExampleButton = ({handlePress, text}) => {
    return(
        <TouchableOpacity
        onPress={() => handlePress()}
        >
            <View style = {exampleButtonStyles.buttonContainer}>
                <Text style = {exampleButtonStyles.buttonText}>
                    {text}
                </Text>
            </View>
        </TouchableOpacity>
    )
}


const exampleButtonStyles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: "yellow",
        border: "1px solid blue",
        padding: 20,
        marginTop: 10,
        borderRadius: 4
    },

    buttonText: {
        color: 'black',
        fontSize: 20
    }
})

export default ExampleButton
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

const Home = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.center}>
            <Text>This is the home screen</Text>
            <Button title="Go to About Screen"
                onPress={() => navigation.navigate('about')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
    },
});

export default Home;
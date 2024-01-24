import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const About = () => {
    const navigation = useNavigation()
  return (
    <View style={styles.center}>
      <Text>This is the about screen</Text>
      <Button title="ir a notificaciones"
      onPress={()=> navigation.navigate('notification')}
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

export default About;
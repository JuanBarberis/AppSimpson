import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../../screens/Home/Home";
import About from "../../screens/about/About";
import Contact from "../../screens/contact/Contact";
import Notification from "../../screens/notification/Notification";



const Stack = createStackNavigator();

const StackNav = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="home" component={Home} />
            <Stack.Screen name="about" component={About} />
            <Stack.Screen name="notification" component={Notification} />
        </Stack.Navigator>
    );
}

const UserLogged = () => {
    return (
        <Stack.Navigator >
            <Stack.Screen name="contact" component={Contact} />
        </Stack.Navigator>
    );
}

export { StackNav, UserLogged }
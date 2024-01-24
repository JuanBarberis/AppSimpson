import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StackNav, UserLogged } from "../stackNav/StackNav";


const Tab = createBottomTabNavigator();

const BottomTabBar = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="stack-nav" component={StackNav} />
      <Tab.Screen name="user-logged" component={UserLogged} />
    </Tab.Navigator>
  );
};

export default BottomTabBar;
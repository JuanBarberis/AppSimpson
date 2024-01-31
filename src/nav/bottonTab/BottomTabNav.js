import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StackNav, UserLogged } from "../stackNav/StackNav";
import CustomBottomTab from "./customBottom/CustomBottomTab";


const Tab = createBottomTabNavigator();

const BottomTabBar = () => {
  return (
    <Tab.Navigator
      tabBar={props => <CustomBottomTab {...props} />}
    >
      <Tab.Screen name="stack-nav" component={StackNav} />
      <Tab.Screen name="user-logged" component={UserLogged} />
    </Tab.Navigator>
  );
};

export default BottomTabBar;
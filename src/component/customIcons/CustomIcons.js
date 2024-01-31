import React from "react";
import { Icon } from "native-base";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { TouchableOpacity } from "react-native";


const CustomIcons = ({ name, color, size, callBack, styles, type, disabled }) => {
    return (
        <TouchableOpacity onPress={callBack} disabled={disabled}>
            <Icon as={type === "Ionicons" ? Ionicons : Entypo} name={name} color={color} size={size} style={styles} />
        </TouchableOpacity>
    )
}

export default CustomIcons
import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons, SimpleLineIcons } from "@expo/vector-icons";
import colors from "../config/colors";

function Icon({
    name,
    size = 40,
    backgroundColor = colors.primary,
    iconColor = colors.white,
    borderRadius = size / 2,
    style,
    simpleLineIcons
}) {
    return (
        <View
            style={[{
                width: size,
                height: size,
                borderRadius: borderRadius,
                backgroundColor,
            },
            styles.container
                , style]}
        >
            {simpleLineIcons ?
                <SimpleLineIcons name={name} color={iconColor} size={size * 0.5} /> :
                <MaterialCommunityIcons name={name} color={iconColor} size={size * 0.5} />}
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
    }
})

export default Icon;
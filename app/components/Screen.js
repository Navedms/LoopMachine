import React from "react";
import Constants from "expo-constants";
import { StyleSheet, SafeAreaView, View } from "react-native";
import colors from "../config/colors";

function Screen({ children, style, onPress, titleColor, backgroundColor = colors.white }) {
    return (
        <SafeAreaView style={[styles.screen, { backgroundColor: titleColor }, style]}>
            <View style={[styles.view, { backgroundColor: backgroundColor }, style]}>
                {children}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: Constants.statusBarHeight,
        flex: 1,
    },
    view: {
        flex: 1,
    }
});

export default Screen;

import { Platform } from "react-native";
import colors from "./colors";

export default {
    text: {
        color: colors.black,
        fontSize: Platform.OS === "android" ? 16 : 18,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    },
}
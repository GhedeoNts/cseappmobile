import { StyleSheet } from "react-native";
import colors from "../../../assets/theme/colors";

const styles = StyleSheet.create({

    inputContainer: {
        paddingVertical: 12,
    },

    wrapper: {
        height: 38,
        borderWidth: 1,
        borderRadius: 4,
        paddingHorizontal: 5,
        marginTop: 4,
    },

    inputContainer: {
        alignSelf: "center",
        paddingVertical: 12,
    },

    textInput: {
        flex: 1,
        width: '100%',
    },

    error: {
        color: colors.danger,
        paddingTop: 2,
        fontSize: 12,
        marginLeft: 50,
    },
});

export default styles;

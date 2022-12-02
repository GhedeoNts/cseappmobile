import { StyleSheet } from "react-native";
import generalStylesApp from "../../../styles/generalStylesApp";

const styles = StyleSheet.create({

    containerPagination: {
        marginTop: 10,
        marginBottom: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        width: 253,
        height: 40,
        alignSelf: "center",
        backgroundColor: generalStylesApp.ColorFromApp.SECOND_COLOR
    },

    styleButtonPrev: {
        borderColor: generalStylesApp.ColorFromApp.PRIMARY_COLOR,
        borderRadius: 7,
        borderWidth: 0.4,
        justifyContent: "center",
        width: 62,
        height: 40,
    },

    styleButtonNext: {
        borderRadius: 7,
        borderColor: generalStylesApp.ColorFromApp.PRIMARY_COLOR,
        borderWidth: 0.4,
        justifyContent: "center",
        width: 62,
        height: 40,
    },

    styleButtonPagination1: {
        borderRadius: 7,
        borderColor: generalStylesApp.ColorFromApp.PRIMARY_COLOR,
        borderWidth: 0.4,
        alignItems: "center",
        justifyContent: "center",
        width: 36,
        height: 40,
    },

    styleButtonPagination2: {
        borderRadius: 7,
        borderColor: generalStylesApp.ColorFromApp.PRIMARY_COLOR,
        borderWidth: 0.4,
        alignItems: "center",
        justifyContent: "center",
        width: 36,
        height: 40,
    },


    styleButtonPagination3: {
        borderRadius: 7,
        borderColor: generalStylesApp.ColorFromApp.PRIMARY_COLOR,
        borderWidth: 0.4,
        alignItems: "center",
        justifyContent: "center",
        width: 36,
        height: 40,
    },

    styleTitleButton: {
        color: '#ABB5BE',
        textAlign: "center",
    }


});

export default styles;
